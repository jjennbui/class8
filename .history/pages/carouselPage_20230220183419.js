import Link from "next/link";
import Carousel from "@/components/carousel";
import styles from '@/styles/carouselPage.module.css'

export default function CarouselPage(){
    return(
        <>
        <div className={styles.main}>
        <Link className={styles.text} href="/">Home</Link>
        <Carousel/>
        </div>
        
        </>
    )
}