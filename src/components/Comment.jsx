import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
    return(
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/87485590?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vitin</strong>
                            <time title="17 de Jan às 09:56" dateTime="2023-01-17 09:56:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button title="Aplaudir">
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

            
        </div>
    )
}