import styles from "./Post.module.css"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar"

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/87485590?v=4"/>
                    <div className={styles.userInfo}>
                        <strong>Vitin</strong>
                        <span>Full-Stack Develpoer</span>
                    </div>
                </div>

                <time title="17 de Jan às 09:56" dateTime="2023-01-17 09:56:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href="">👉 jane.design/doctorcare</a></p>

            <p><a href="">#novoprojeto</a>  <a href=""> #nlw </a> <a href=""> #rocketseat </a></p>
            </div>


            <form className={styles.comentForm}>
                <strong> Deixe seu Feedback </strong>
        
                <textarea placeholder="Deixe um comentário"/>

                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}