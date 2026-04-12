import { RrwebPlayer } from 'rehearseur'
import 'rehearseur/style.css'

function App() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <RrwebPlayer
          recordingUrl="m4_local_forecasting.json"
          annotationsUrl="m4_local_forecasting.annotations.md" />
    </div>
  )
}

export default App