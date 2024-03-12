import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Loading from '../components/Loading'

const LogoutPage = () => {

    const cookies = new Cookies()
    const navigate = useNavigate()

    useEffect(() => {
        cookies.remove('user_id')
        cookies.remove('access_token')
        setTimeout(() => {
            navigate('/login')
        }, 3000);
    })
    return (
        <div className="hero min-h-screen bg-base-300">
            <Loading />
        </div>
    )
}

export default LogoutPage