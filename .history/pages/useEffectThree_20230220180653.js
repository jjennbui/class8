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
        <Link  className={styles.home} href="/">Home</Link>
        <div>
           <button className={styles.btn}onClick={() => setNumber(number + 1)}>click me</button> 
        </div>
        <div>
            UseEffectThree
        </div>
        <div className={styles.number}>
        {value}
        </div>
        </div>
        </>
    )
}