import styles from "./Post.module.css"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { Link } from "phosphor-react";
import { useState } from "react";

export function Post({ author, publishedAt, content }){
    const [comments, setComments] = useState([
        1,
        2,
    ])
    const publishedDateFormated = new Intl.DateTimeFormat('pt-BR',{
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)
        
    const publishedDateRelative = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault() /* impedir comportamento padrão do html de redirecionar */
        console.log("Oi")
        setComments([...comments, comments.length + 1])
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatar}/>
                    <div className={styles.userInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelative}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == "paragraph"){
                        return <p>{line.content}</p>
                    }
                    else if(line.type == "link"){
                        return <a href="">{line.content}</a>
                    }
                    
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong> Deixe seu Feedback </strong>
        
                <textarea placeholder="Deixe um comentário"/>

                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>
        </article>
    )
}