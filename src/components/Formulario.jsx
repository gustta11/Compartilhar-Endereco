import './Formulario.css'
import {useState} from 'react'
import { useForm} from "react-hook-form"

const Formulario = () =>{

    let {register, handleSubmit} = useForm();
    
    const onSubmit = async(e)=>{
        const response = await fetch(`https://viacep.com.br/ws/${e.cep}/json/`)
        const data = await response.json()

        console.log(e)

        const dados = {
            
            estado:data.uf,
            cep: data.cep,
            cidade: data.localidade,
            bairro: data.bairro,
            logradouro:data.logradouro

        }


        let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(e.contato)}&text=${encodeURIComponent(` Olá ${e.nome}, CEP:${dados.cep}\n Estado:${dados.estado} \n Cidade:${dados.cidade}\n Bairro:${dados.bairro}\n Logradouro:${dados.logradouro}`)}`
       
        window.open(url)

   


    }

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
                    <input type="text" {...register('cep')} />
                </label>
                <div className='botoes'>
                    <button type='submit'> Enviar </button>  
                </div>
              </form>
            </div>
        </div>
    )
}

export default Formulario