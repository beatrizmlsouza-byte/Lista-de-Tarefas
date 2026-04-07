import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {


  const [tarefas,setTarefas] = useState([
    {id: "1", titulo: "Aprender Git"},
    {id: "2", titulo: "Aprender fazer commit"},
    {id: "3", titulo: "Aprender utlizar o Gitbub"},
    {id: "4", titulo: "Criar um novo commit"},
  ])

  const [novaTarefa,setnovaTarefa] = useState('');
  
  function addTarefas(){
    const task = [{
      id : String(Date.now()),
      titulo : novaTarefa
   } ]
  }

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

  <TextInput
    style={styles.input}
    value={novaTarefa}
    onChangeText={ (texto)=>setnovaTarefa(texto) }
    placeholder= "Digite uma tarefa"
    textAlign= 'center'
  />

    <TouchableOpacity style={styles.btnAdicionar}><text>Adicionar tarefa</text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },

  titulo: {
  fontSize: 48,
  fontWeight: 'bold',
  color: 'white',
  marginBottom : 20,
  alignItems: 'center',
  justifyContent:'center'
  },

  item:{
    padding:15,
    marginTop:10,
    backgroundColor:'violet',
    borderRadius:5,
    color:'white',
   alignItems: 'center',
   justifyContent:'center'
  },

  btnAdicionar:{
    width:"90%",
    backgroundColor:'purple',
    margin:15,
    height:40,
    borderRadius:5,
    alignItems: 'center',
    justifyContent:'center',
    color:'white'
  },
  
  input: {
    borderWidth: 1,
    width: "90%",
    margin: 15,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#B8D7E9',
    textAlign: 'center',
    color:'white'
  },

});
