import {LogBox, StyleSheet, ScrollView, View, Text} from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';
import {useState} from 'react';
import RenderCount from '../UI/RenderCount.js'
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

const ModuleListScreen = ({navigation}) => {
    //Initialisations----
    //let modules = initialModules;

    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

    //State--------------
    const [modules, setModules] = useState(initialModules);


    //Handlers-----------
    const handleDelete = (module) =>{
       setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    }
    const onDelete = (module) => {
      handleDelete(module);
      navigation.goBack();
    };

    const onAdd = (module) => {
      handleAdd(module);
      navigation.goBack();
    };

    const goToViewScreen = (module) => navigation.navigate('ModuleViewScreen', {module, onDelete});
    
    const handleAdd = (module) => setModules([...modules,module]);

    const goToAddScreen = () => navigation.navigate('ModuleAddScreen', {onAdd});
    
    /*if(item.ModuleID !==module.ModuleID) return true; else return false;*/

      
    

    //View---------------
    //<RenderCount/> within 'Screen' for testing purposes
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add/>} onClick= {goToAddScreen}/>
      </ButtonTray>
      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  
});

export default ModuleListScreen;

