import './Formulario.css'
import {UseState} from 'react'
import { useForm} from "react-hook-form"

const Formulario = () =>{

    const {register, handleSubmit} = useForm();

    const onSubmit = (e)=>{
        let botao = document.querySelector('.botaoWhats')
        let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(e.contato)}&text=${encodeURIComponent(e.nome)}`
        botao.setAttribute('href',url)
        botao.setAttribute('target', '_blank')
    }

    /*const whats =(e)=>{
        let botao = document.querySelector('.botaoWhats')
        let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(e.contato)}&text=${encodeURIComponent(e.nome)}`
        botao.setAttribute('href',url)
        botao.setAttribute('target', '_blank')
    }*/

    return(
        <div className='layoutForm'>
            <div className='conteudoForm'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nome:
                    <input type="text" {...register('nome')}/>
                </label>
                <label >
                    Contato:
                    <input type="text" {...register('contato')}/>
                </label>
                <label>
                    CEP:
                    <input type="text" />
                </label>
                <button type='submit'> Enviar </button>
                <a className='botaoWhats'><button>Whatsapp</button></a>
              </form>
            </div>
        </div>
    )
}

export default Formulario