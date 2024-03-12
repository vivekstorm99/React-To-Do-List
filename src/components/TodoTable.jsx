import axios from "axios"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"
import Loading from "./Loading"
import { Link } from "react-router-dom"
import EmptyTodo from "./EmptyTodo"

const API = 'https://stingray-app-axdpn.ondigitalocean.app/api/todo/find/user'

const TodoTable = () => {

    const [myTodos, setTodos] = useState(null)
    const todoCondition = myTodos != null && myTodos.length > 0

    const cookies = new Cookies()
    const user_id = cookies.get('user_id')
    useEffect(() => {

        fetchAllTodos()
    }, [todoCondition]);

    const fetchAllTodos = async () => {
        try {
            await axios.post(API, { user_id })
                .then(res => {
                    console.log(res)
                    setTodos(res.data)
                })
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Todo Title </th>
                        <th>Todo Description </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {todoCondition ? myTodos.map((item, index) => (

                        <tr key={index}>
                            <th>{item.todo_title}</th>
                            <td>{item.todo_description}</td>
                            <td>
                                <Link to={`/delete-todo/${item.id}`}>
                                    Delete
                                </Link>


                            </td>
                        </tr>


                    )) : <EmptyTodo />}


                </tbody>
            </table>
        </div>
    )
}

export default TodoTable