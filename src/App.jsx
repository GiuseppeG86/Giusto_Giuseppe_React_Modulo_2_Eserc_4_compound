import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import List from "./Components/List";

function App() {
    
  const lists = ['questa', 'lista è un', 'compound', 'component'];

  return (
    <>
    <Navbar />
    
    <Header>
      <List>
        {lists.map((list)=>{
          return (
            <li key={list}>{list}</li>            
          )})
        }
      </ List>      
    </Header>

    <Section />
    </>
  )
}

export default App
