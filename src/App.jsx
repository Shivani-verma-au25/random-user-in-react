import { useState,useEffect } from 'react'
import './App.css'
import User from './components/User'
import { getUser } from './api/api'


function App() {

  // useState hook
  const [userdata,setUSerData] = useState(null)
  // console.log(userdata);

  // useEffect hook
  useEffect(()=>{
    getUser().then((data)=> setUSerData(data.results[0]))
  },[])

  const refresh = ()=>{
    getUser().then((data)=> setUSerData(data.results[0]))
  }

  return (
    <>
      <div className="main">
          <p>Random User For Fun</p>
          {userdata && <User value = {userdata}/>}
          <button onClick={refresh} >Refresf User</button>
      </div>
    </>
  )
}

export default App
