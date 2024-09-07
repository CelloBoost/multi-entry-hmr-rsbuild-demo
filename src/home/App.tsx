import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Home
      </div>
      <h1>Demo for Multi-entry app migrate from vite to rsbuild</h1>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <a href="/entry_one.html">&rarr; entry one(html)</a>
        <a href="/entry_two.html">&rarr; entry two(html)</a>
        <a href="/entry_one">&rarr; entry one</a>
        <a href="/entry_two">&rarr; entry two</a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
