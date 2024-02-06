import axios from 'axios'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [succes, setSucess] = useState('')
  // const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password
      })
      console.log(response)
      if (response?.status === 200) {
        setSucess('Login successful')
        console.log('Successful login. Navigating...')
        const cookie = response?.data?.token

        document.cookie = `USER_ACCESS_TOKEN=${cookie}; path=/`

        // navigate('/projectList')
      }
      // onLogin(response.data.token)
    } catch (error) {
      console.error('Login failed:', error.response?.data?.error)
    }
  }

  return {
    handleLogin,
    setUsername,
    setPassword,
    username,
    password,
    succes
  }
}
