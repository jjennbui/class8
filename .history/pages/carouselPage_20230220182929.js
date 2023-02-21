import Link from "next/link";
import Carousel from "@/components/carousel";

export default function CarouselPage(){
    return(
        <>
        <Link className={styles.} href="/">Home</Link>
        <Carousel/>
        </>
    )
}