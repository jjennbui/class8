import Link from "next/link"
export default function UseEffectOne(){

    const [number, setNumber] = useState(0)

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