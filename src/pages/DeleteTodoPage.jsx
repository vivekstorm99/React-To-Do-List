import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const API = 'https://stingray-app-axdpn.ondigitalocean.app/api/todo/delete'

const DeleteTodoPage = () => {

    const {id} = useParams()
    const todo_id = id
    const navigate = useNavigate()
    console.log(id)

    useEffect(() =>{
        deleteTodo()
    })

    const deleteTodo = async () =>{
        await axios.post(API,{todo_id})
            .then(res => {
                console.log(res)
                navigate('/dashboard')
            })
            .catch(err =>{
                console.log(err)
            })
    }

  return (
    <div>

    </div>
  )
}

export default DeleteTodoPage