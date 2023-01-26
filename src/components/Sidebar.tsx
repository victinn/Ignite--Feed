import styles from "./Sidebar.module.css"
import { Pencil, PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar.jsx"
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1546198633-17b6085e28dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>

            <div className={styles.profile}>
                <Avatar  src="https://avatars.githubusercontent.com/u/87485590?v=4"/>
                <strong> Vitin </strong>
                <span>Full-Stack Developer</span>
            </div>

            <footer>        
                <a href="#"><PencilLine size={20}/> Edite seu Perfil</a>
            </footer>
        </aside>
    )
}