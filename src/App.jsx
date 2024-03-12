import { Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AddTodoPage from './pages/AddTodoPage'
import LogoutPage from './pages/LogoutPage'
import ProtectedRoute from './ProtectedRoute'
import DeleteTodoPage from './pages/DeleteTodoPage'


function App() {

  return (
    <Routes>
      <Route exact path='/' element={<RegisterPage />} />
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/register' element={<RegisterPage />} />
      <Route exact path='/logout' element={<LogoutPage />} />
      <Route element={<ProtectedRoute />}>
        <Route exact path='/dashboard' element={<DashboardPage />} />
      </Route>


      <Route element={<ProtectedRoute />}>
        <Route exact path='/add-todo' element={<AddTodoPage />} />
      </Route>

      <Route exact path='/delete-todo/:id' element={<DeleteTodoPage />}/>

    </Routes>
  )
}

export default App