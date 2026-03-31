import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const tarefas =[
  {id: "1", titulo: "Aprender Git"},
  {id: "2", titulo: "Aprender fazer commit"},
  {id: "3", titulo: "Aprender utlizar o Gitbub"},
  {id: "4", titulo: "Criar um novo commit"},


  ]

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Lista de Tarefas</Text>
    <FlatList
    data={tarefas}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <Text style={styles.item}> {item.titulo} </Text>
      
    )}
    
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },

  titulo: {
  fontSize: 48,
  fontWeight: 'bold',
  color: 'white',
  marginBottom : 20
  },
  item:{
    padding:15,
    marginTop:10,
    backgroundColor:'violet',
    borderRadius:5,
    color:'white'
  }
});
