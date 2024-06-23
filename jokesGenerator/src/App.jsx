import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [joke,setjoke] = useState('')
  useEffect(()=>{
    axios.get('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((d)=>setjoke(d.data))
  },[])
  const handle = ()=>{
    axios.get('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((d)=>setjoke(d.data))
  }
  return (
    <>
        <div className='relative flex justify-center min-h-screen h-screen w-full bg-zinc-900 sm:p-5'>
          <h1 className='absolute  top-8 text-2xl text-white font-semibold'>Random Jokes Generator</h1>
          <div className='absolute min-h-[200px] min-w-[300px] h-auto rounded-lg left-1/2 top-1/2 bg-zinc-800 p-10 -translate-x-[50%] -translate-y-[50%] flex flex-col gap-8'>
              <div>
                  <p className='text-justify text-zinc-300'>{joke.joke}</p>
              </div>
              <div className='flex justify-center items-center'>
              <button className='p-3 rounded-lg bg-green-500' onClick={handle}>Generate New</button>
              </div>
          </div>
          <h1 className='absolute bottom-6 text-1xl text-zinc-700 font-semibold hover:text-green-500'>Made By:Nesar Alam</h1>
        </div>
    </>
  )
}

export default App
