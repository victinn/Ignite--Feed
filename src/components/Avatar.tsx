import styles from "./Avatar.module.css"
import { ImgHTMLAttributes } from "react"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{  /* Todas as propriedades de uma image html normal*/
    Borderless?: boolean
}
                                    /* propriedades img html */
export function Avatar({Borderless, ...Props}: AvatarProps){
    return(                                                                     /* propriedades img html */
        <img className={Borderless ? styles.avatar : styles.avatarWithBorder} {...Props}/>
        
    )
}