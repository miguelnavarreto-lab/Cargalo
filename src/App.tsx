import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Cargalo</h1>
        <p>Capacitor + React + TypeScript</p>
      </header>
      
      <main className="app-main">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
          <p>
            Edita <code>src/App.tsx</code> y guarda para recargar
          </p>
        </div>
      </main>

      <footer className="app-footer">
        <p>💡 Listo para Android & iOS</p>
      </footer>
    </div>
  )
}

export default App
