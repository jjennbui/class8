import Link from "next/link"
import { useEffect } from "react";
export default function UseEffectOne(){

    const [number, setNumber] = useState(0);

    useEffect()

    return(
        <>
            <Link href="/">Home</Link>
            <div>
                useEffectOne
            </div>
            <div>

            </div>
        </>
    )
}