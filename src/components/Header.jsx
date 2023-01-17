import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header(){
    return (       
        <header className={styles.Header}>
            <img className={styles.igniteLogo} src={igniteLogo} alt="Logo do Ignite" />
        </header>
    )
}