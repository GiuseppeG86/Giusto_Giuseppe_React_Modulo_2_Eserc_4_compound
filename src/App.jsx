import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Input from "./Components/Input";

function App() {
    
  const lists = ['questa', 'lista è un', 'compound', 'component'];
  // const [nome, setNome] = useState();
  // const [email, setEmail] = useState();
  const [formList, setFormList] = useState([]);
  const [card, setCard] = useState(false);
  const [id, setId] = useState(1);

  function displayData(e) {
  
    e.preventDefault();

    if (e.target[0].value == undefined || e.target[0].value == "" || e.target[1].value == undefined || e.target[1].value == "") {
        alert("Attenzione, i campi non sono stati compilati correttamente.");
    } else {
    // setNome(e.target[0].value);
    // setEmail(e.target[1].value);
    setId((prev) => prev + 1);
    setFormList( [...formList, {'nome': e.target[0].value, 'email': e.target[1].value, 'id': id}] );
    
    setCard(true);
    }
  }

function closeCard() {
  setCard(false)
}
  return (
    <>
    <Navbar />
    
    <Header>
      <Header.List>
        {lists.map((list)=>{
          return (
            <li key={list}>{list}</li>            
          )})
        }
      </ Header.List>
      <Header.Form onSubmit={displayData}>
        <Input type="text" id="nome" placeholder="Mario">Nome</Input>           
        <Input type="email" id="e-mail" placeholder="mario@gmail.com">Email</Input>
      </Header.Form>
      <Header.Card onClick={closeCard} card={card}>
        {formList.map((el)=>{

          // console.log(formList);
          // console.log(el.id);
          // console.log(card);
          
          return (
            <li key={el.id}>{el.id}. <span>Nome</span>: {el.nome}; <span> e-mail</span>: {el.email}</li>
          )
        })}
      </Header.Card>
    </Header>
    <main>
      <Section />
    </main>
    </>
  )
}

export default App