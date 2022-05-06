import { useState } from 'react';
import { 
  Button,
  FlatList,
  ScrollView,
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';


export default function App() {
  const [usuario, setUsuario] = useState({nome: '', telefone: ''})
  const[usuarios, setUsuarios] = useState([])
  const[contadorUsuario, setContadorUsuario] = useState(0)

  const adicionarUsuario = () => {
    //operador spread
    //const lista = [1, 2, 3]
    //...lista
    setUsuarios(usuarios => {
      setContadorUsuario(contadorUsuario + 1)
      return [{key: contadorUsuario.toString(), value: usuario}, ...usuarios]
    })
  }
  
  return (
    <View style={styles.telaPrincipalView}>
      <View>
        <TextInput
          value={usuario.nome}
          onChangeText={(t) => setUsuario({...usuario, nome: t})} 
          placeholder='Nome'
          style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}
        />
        <TextInput
          value={usuario.telefone}
          onChangeText={(t) => setUsuario({...usuario, telefone: t})}  
          placeholder='Telefone'
          style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}
        />
        <Button
          title="Adicionar Contato"
          onPress={adicionarUsuario}
        />
      </View>
      <FlatList 
        data={usuarios}
        renderItem={
          l => (
            <View
              style={styles.itemNaLista}>
                <Text>Nome: {l.item.value.nome}</Text>
                <Text>Telefone: {l.item.value.telefone}</Text>
            </View>
          )
        }
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40   
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});
