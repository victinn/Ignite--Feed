import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar"
import { useState } from "react";

interface commentProps{
    content: string,
    onDeleteComment: (comment: string) => void,
}

export function Comment({ content, onDeleteComment }: commentProps){
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0)

    function handelLikeComment(){
        setLikeCount((state) => { /* melhor jeito de fazer */
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar Borderless={true} src="https://avatars.githubusercontent.com/u/86677587?v=4" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Lima</strong>
                            <time title="17 de Jan às 09:56" dateTime="2023-01-17 09:56:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handelLikeComment} title="Aplaudir">
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

            
        </div>
    )
}