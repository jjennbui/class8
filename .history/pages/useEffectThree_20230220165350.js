import Link from "next/link"
import { use, useEffect, useState } from "react"


export default function UseEffectThree(){
    const [number, setNumber] = useState (0);
    
    cosnt [useDebugValue, setValue] = useState (-10);

    useEffect(() => {
        setValue(Value + 10)
    }, [number])

    return(
        <>
        <Link href="/">Home</Link>
        <div>
           <button onClick={() => setNumber}>click me</button> 
        </div>
        <div>
            UseEffectThree
        </div>
        <div>

        </div>
        </>
    )
}