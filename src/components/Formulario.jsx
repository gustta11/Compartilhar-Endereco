import './Formulario.css'


const Formulario = () =>{


    return(
        <div className='layoutForm'>
            <div className='conteudoForm'>
                <p>NOME:<input type="text" /></p>
                <p>TELEFONE:<input type="text" /></p>
                <p>CEP:<input type="text" /></p>
            </div>
        </div>
    )
}

export default Formulario