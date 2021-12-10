import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config' //importando o banco de dados criado
import { collection, getDocs } from 'firebase/firestore' // collection é um metodo que apontará para determinada lista do firestore. getDocs retorna todos os documentos de uma determinada coleção

function App() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users") //Nesse caso, estamos selecionando uma lista "users" dentro do db

  useEffect(() => {
    //console.log('usersCollectionRef: ', usersCollectionRef)
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)// o getDocs vai buscar a lista "users" no firestore e vai armazena-la no data

      console.log('data: ', data)
      console.log('data.docs: ', data.docs)

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))) //As informações presentes no data costumam aparecer de foma confusa dentro de multiplos níveis do objeto. Essa função busca acessa-la ao mesmo tempo que adiciona o id do documento à resposta. Se for feito um console.log no users apos essa etapa, verá que foi foi retornado um array de objetos contendo name, age e id. O metodo .data() coleta as informações presentes dentro do caminho _document > data > value > mapValue > fields
    }


    getUsers()

  }, [])

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <div className="App">
      {users.map((users) => {
        return 
          <div>
            <h1>Name: {users.name}</h1>
            <h1>Age: {users.age}</h1>
          </div>
      })}
    </div>
  );
}

export default App;
