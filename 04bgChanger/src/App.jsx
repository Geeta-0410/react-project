import {useState} from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
 
     <div className="w-full h-screen duration-200" 
    
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-centergap-3 shadow-lg bg-white px-3 py-2 rounded-full ">
<button 
onClick={()=>setColor("red")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"red"}}>Red 
</button>
<button 
onClick={()=>setColor("green")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"green"}}>green
</button>
<button 
onClick={()=>setColor("yellow")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"yellow"}}>yellow
</button>
<button 
// onClick={()=>setColor("pink")}
onClick={()=>setColor("pink")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"pink"}}>pink
</button>
<button 
onClick={()=>setColor("blue")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"blue"}}>blue
</button>
<button 
onClick={()=>setColor("brown")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"brown"}}>brown
</button>
<button 
onClick={()=>setColor("black")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"black"}}>black
</button>
<button 
onClick={()=>setColor("lavender")}
 className="out line-none px-4 py-2 rounded-full shadow-lg"
style={{backgroundColor :"lavender"}}>lavender
</button>
       </div>
    </div>
</div>
  )
}

export default App
