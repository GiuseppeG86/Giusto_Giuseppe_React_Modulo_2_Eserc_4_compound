function Card({children, onClick, card}){
    // console.log({children});
    
    return(
        <>
        {card &&          
        <div className="card">
            <ul>
                {children}
            </ul>
            <button type="button" onClick={onClick}>X</button>
        </div>}
        </>
    )
}

export default Card