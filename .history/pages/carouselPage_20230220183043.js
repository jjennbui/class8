import Link from "next/link";
import Carousel from "@/components/carousel";
import styles from '@/styles/c.module.css'

export default function CarouselPage(){
    return(
        <>
        <Link className={styles.main} href="/">Home</Link>
        <Carousel/>
        </>
    )
}