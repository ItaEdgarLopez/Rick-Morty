function Characters({personajes, setPersonajes}) {
    //destructurin
    const { results } = personajes

    const resetPersonajes = () => {
        setPersonajes(null)
    }

    return ( 

        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetPersonajes}> Volver al home</span>
            <div className="container-characters">
                {results.map((personaje, index) =>(

                    <div key={index} className="character-container">
                        <div>
                            <img src={personaje.image} alt={personaje.name} />
                        </div>
                        <div>
                            <h3>{personaje.name}</h3>
                            <h6>
                                {personaje.status === "Alive" ? (
                                    <>
                                    <span className="alive"/>
                                    Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"/>
                                        Dead
                                    </>
                                )
                            }
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{personaje.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{personaje.species}</span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
                <span className="back-home" onClick={resetPersonajes}>Volver al home</span>
        </div>
     );
}

export default Characters;