import Link from "next/link"


export default function UseEffectThree(){
    const [number, setNumber] = use
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