import { useState, useEffect } from 'react'

const Prolist = () => {
  const projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' }
  ]

  const [activeTimer, setActiveTimer] = useState(null)
  const [timers, setTimers] = useState({})

  const startTimer = (projectId) => {
    stopTimer()

    const timerId = setInterval(() => {
      setTimers((prevTimers) => ({
        ...prevTimers,
        [projectId]: (prevTimers[projectId] || 0) + 1
      }))
    }, 1000)

    setActiveTimer(timerId)
  }

  const stopTimer = () => {
    if (activeTimer) {
      clearInterval(activeTimer)
      setActiveTimer(null)
    }
  }

  useEffect(() => {
    return () => {
      stopTimer()
    }
  }, [activeTimer])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Prolist</h1>
      <div style={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} style={styles.projectItem}>
            <h3>{project.name}</h3>
            <div style={styles.timer}>
              {timers[project.id] ? formatTime(timers[project.id]) : '00:00'}
            </div>
            <button style={styles.button} onClick={() => startTimer(project.id)}>
              Start
            </button>
            <button style={styles.button} onClick={stopTimer}>
              Stop
            </button>
          </div>
        ))}
      </div>
      <div style={styles.totalTimer}>
        <strong>Total Time:</strong>{' '}
        {Object.values(timers).reduce((total, time) => total + time, 0)}
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    color: '#333'
  },
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectItem: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    width: '300px'
  },
  timer: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#555'
  },
  button: {
    margin: '5px',
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#3498db',
    color: '#fff',
    transition: 'background-color 0.3s'
  },
  totalTimer: {
    marginTop: '20px',
    fontSize: '16px',
    color: '#333'
  }
}

export default Prolist
