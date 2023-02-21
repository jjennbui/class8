import Link from "next/link"
import { use, useEffect, useState } from "react"
import styles from '@/styles/UseEffectThree.module.css'


export default function UseEffectThree(){
    const [number, setNumber] = useState (0);
    
    const [value, setValue] = useState (-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return(
        <>
         <div className={styles.main}>
        <Link href="/">Home</Link>
        <div>
           <button onClick={() => setNumber(number + 1)}>click me</button> 
        </div>
        <div>
            UseEffectThree
        </div>
        <div>
        {value}
        </div>
        </div>
        </>
    )
}