import {LogBox, StyleSheet, ScrollView, View, Text} from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';
import {useState} from 'react';
import RenderCount from '../UI/RenderCount.js'

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
    }

    const handleSelect = (module) => navigation.navigate('ModuleViewScreen', {module, onDelete});
    
    /*if(item.ModuleID !==module.ModuleID) return true; else return false;*/

      
    

    //View---------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  
});

export default ModuleListScreen;

