
import Form from "./Form";
import List from "./List";
import Card from "./Card";

export default function Header({children}){

    return (
    <>
    <header>
        <div className="title">
            <h1>Modulo 2 esercizio 4: compound components</h1>
        </div>
        {children}
    </header>
    </>
    )
}

Header.List = List;
Header.Form = Form;
Header.Card = Card;