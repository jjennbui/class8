import Link from "next/link";
import Carousel from "@/components/carousel";
import styles from '@/styles/carousel.module.css'

export default function CarouselPage(){
    return(
        <>
        <Link className={styles.main} href="/">Home</Link>
        <Carousel/>
        </>
    )
}