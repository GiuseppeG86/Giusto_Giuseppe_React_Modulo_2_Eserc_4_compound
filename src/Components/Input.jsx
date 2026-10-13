function Input({children, type, id, placeholder}){
    return (
        <>
        <label htmlFor="nome">{children}</label>
        <input type={type} id={id} placeholder={placeholder}/>
        </>
    )
}

export default Input