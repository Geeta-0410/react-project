import { useState,useCallback ,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(20)
  const[numAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("");
 
const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
   let pass=" "
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
        
if(numAllowed) str+="0123456789"
if(charAllowed)str+="!@#$%6&*+-()[]{}~`"

  


for(let i=1;i<length;i++){
  let char=Math.floor(Math.random()*str.length+1)

  pass += str.charAt(char)

}
setPassword(pass)


  },[length,numAllowed,charAllowed,setPassword])

   const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    
    window.navigator.clipboard.writeText(password)
   },[password])



  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed,charAllowed,password])
  return (
  <>
    <div className='bg-yellow'>
     {/* <h1 className ="text-4xl text-white text-center"></h1> */}
    <div className='w-full max-w-md shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray'>
<h1 className='text-white text-center my-3'>password Generator</h1>


<div className ="flex shadow rounded-lg overflow-hidden mb-4">

<input 
type="text"
value={password}
className="outline-none w-full py-1 px-3 
 placeholder=password"
 readOnly
ref={passwordRef}
/>
<button
onClick={copyPasswordtoClipboard}

className="outline-none bg-blue-700 text-whitw px-3 py-0 shrink-0">copy
</button>

</div>
<div className="flex text-sm gap-x-2">
<div className='flex items-center gap-x-1'>
  <input 
  type="range" 
  min={6}
  max={100}
value={length}
className="cursor-pointer"/>
onChange={(e)=>{setLength (e.target.value)}}
<label>length:{length}</label>
</div>

<div className="flex items-center gap-x-1">
<input
type="checkbox"
defaultChecked={numAllowed}
id="numberInput"
onChange={()=>{
  setNumberAllowed((prev)=>!prev);
}}
/>
<label htmlFor='numberInput'>Numbers</label>
</div>
<div className='flex items-center gap-x-1'>
<input
type='checkbox'
defaultChecked={charAllowed}
id="characterInput"
onChange={()=>{
  setCharAllowed((prev)=>!prev)

}}
/>
<label htmlFor='characterInput'>character</label>
</div>
</div>
</div>
</div>
</>
)
}

export default App
