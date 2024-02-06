import { useLogin } from './useLogin'

const Login = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }

  const formStyle = {
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff'
  }

  const labelStyle = {
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333'
  }

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '14px'
  }

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }

  const { handleLogin, setUsername, setPassword, succes } = useLogin()

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '30px', fontSize: '28px', color: '#333' }}>Hubstaff</h1>
      <p>{succes}</p>
      <form style={formStyle}>
        <label style={labelStyle}>Username</label>
        <input
          type="text"
          style={inputStyle}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          style={inputStyle}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button
          style={buttonStyle}
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
