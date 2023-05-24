import React,{useState} from 'react'
import './App.css'

const App = () => {
    let time = new Date().toLocaleTimeString();
    const [cTime, setcTime] = useState();

    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setcTime(time);
    }
    setInterval(updateTime,1000);
    return(
        <>
        <div className='container'>
            <h1>{cTime}</h1>
        </div>
        </>
    )
}
export default App