import { useEffect, useState } from 'react';
import api from '../../services/api'

interface NoticiasProps {
    id?: number;
    titulo: string;
    descricao: string;
}

export default function Noticias() {
    const [noticias, setNoticias] = useState<NoticiasProps[]>([])
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [editando,setEditando] = useState<NoticiasProps| null>(null)

    const fetchNoticia= async () => {
        const response = await api.get('/api/noticia')
        setNoticias(response.data)
    }

    const criarNoticia = async () => {
        await api.post('/api/noticia', {titulo,descricao})
        setTitulo('')
        setDescricao('')
        fetchNoticia()
    }

    const editarNoticia = async () => { 
        if(editando){
            await api.put(`/api/noticia/${editando.id}`,{titulo,descricao})
            setTitulo('')
            setDescricao('')
            setEditando(null)
            fetchNoticia()
        }
    }

    const deletarNoticia = async (id: number) => { 
        await api.delete(`/api/noticia/${id}`)
        fetchNoticia()
    }

    const iniciarEdicao = (noticia: NoticiasProps) => {
        setEditando(noticia)
        setTitulo(noticia.titulo)
        setDescricao(noticia.descricao)
    }

    const cancelarEdicao = () => {
        setEditando(null)
        setTitulo('')
        setDescricao('')
    }

    useEffect(() => {
        fetchNoticia()
    },[])
    return(
        <div>
            <h1>Gerenciador de Notícias</h1>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Titulo" />
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />

            {editando ? (
                <>
                    <button onClick={editarNoticia}>Editar</button>
                    <button onClick={cancelarEdicao}>Cancelar</button>
                </>
            ) : (
                <button onClick={criarNoticia}>Adicionar</button>
            )}
            <ul>
                {noticias.map(noticia => (
                    <li key={noticia.id}>
                        <h2>{noticia.titulo}</h2>
                        <p>{noticia.descricao}</p>
                        <button onClick={() => deletarNoticia(noticia.id!)}>Deletar</button>
                        <button onClick={() => iniciarEdicao(noticia)}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}