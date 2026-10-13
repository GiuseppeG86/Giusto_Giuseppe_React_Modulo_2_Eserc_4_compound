import { useState } from "react";
import Counter from "./Counter";
import Form from "./Form";
import Input from "./Input";

function Header({children}){

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    function displayData(e) {
    
    e.preventDefault();
    setNome(e.target[0].value);
    setEmail(e.target[1].value);
    const card = document.querySelector(".card");
    
    if (e.target[0].value == undefined || e.target[0].value == "") {
        setNome("sconosciuto");
    }
    if (e.target[1].value == undefined || e.target[1].value == "") {
        setEmail("non pervenuta");
    }

    return card.style.display = "block";
    /** Sicuramente non è il modo più adatto a React per intervenire sul DOM */
}

function closeCard() {

    const card = document.querySelector(".card");
    return card.style.display = "none";
}

    return (
    <>
    <header>
        <div className="title">
            <h1>Modulo 2 esercizio 4: compound components</h1>
        </div>
        <div>
            {children}
        </div>
        <Counter />
        <Form   onsubmit={displayData}>
            <p><span>Nome</span>: {nome} </p>
            <p><span>e-mail</span>: {email} </p>
            <button type="button" onClick={closeCard}>X</button>         
        </Form>
    </header>
    </>
    )
}

export default Header
