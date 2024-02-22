import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Text} from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import ModuleItem from '../entity/modules/ModuleItem.js';
import ModuleList from '../entity/modules/ModuleList.js';
import {useState} from 'react';
import RenderCount from '../UI/RenderCount.js'

const ModuleListScreen = () => {
    //Initialisations----
    //let modules = initialModules;

    //State--------------
    const [modules, setModules] = useState(initialModules);


    //Handlers-----------
    
    const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    
    /*if(item.ModuleID !==module.ModuleID) return true; else return false;*/

      
    

    //View---------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  
});

export default ModuleListScreen;

