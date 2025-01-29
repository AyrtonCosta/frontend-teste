import { useState } from "react"



export default function BuscarCep() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const[error, setError] = useState('')

    const buscarCep = async () => {
        try {
            const response = await fetch('https://viacep.com.br/ws/01001000/json/')

           
        } catch (error) {
            
        }
    }
    return(
        <div>
            <h1>Buscar Cep</h1>
            <input type="text" placeholder="Digite o CEP" />
            <button>Buscar</button>
        </div>
    )
}