import Link from "next/link";
import Carousel from "@/components/carousel";
import style from 

export default function CarouselPage(){
    return(
        <>
        <Link className={styles.main} href="/">Home</Link>
        <Carousel/>
        </>
    )
}