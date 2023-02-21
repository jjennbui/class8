import Link from "next/link"
import { useState } from "react"


export default function UseEffectThree(){
    const [number, setNumber] = useState (0);
    return(
        <>
        <Link href="/">Home</Link>
        <div>
           <button>click me</button> 
        </div>
        <div>
            UseEffectThree
        </div>
        <div>

        </div>
        </>
    )
}