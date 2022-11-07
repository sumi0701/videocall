import './App.css';
import { useState } from 'react';
import VideoRoom from './components/VideoRoom';

function App() {
  const [joined,setJoined]=useState(false);
  return (
 <div className='App'>
  <h1>iH</h1>
  {!joined &&(
  <button onClick={()=>setJoined(true)}>Join room</button>
  )}
 {joined && <VideoRoom /> }

  </div>
 
  );
}

export default App;
