import Input from "./Input";

function Form ({onsubmit, children}) {

    return (
        <>
        <div className="form" >
            <form action="" onSubmit={onsubmit}>
                <Input type="text" id="nome" placeholder="Mario">Nome</Input>           
                <Input type="email" id="email" placeholder="mario@gmail.com">Email</Input>  
                <button type="submit" >Invia</button>
            </form>
            <div className="card">
                {children}
            </div>   
        </div>
        </>
    )
}

export default Form