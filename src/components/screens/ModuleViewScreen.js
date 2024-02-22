import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';

const ModuleViewScreen = ({navigate, route}) => {
    //Initialisations----
  const{module} = route.params;


    //State--------------
    //Handlers-----------
    //View---------------
  return (
    <Screen>
      <ModuleView module={module}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container:{
    gap: 15,
  },
  image:{
    borderRadius: 3,
  },
  infoTray:{
    gap: 5,
  },
  text:{
    fontSize:16,
  },
  boldText:{
    fontWeight: 'bold',
  },
  dimText:{
    color:'grey',
  },
});

export default ModuleViewScreen;