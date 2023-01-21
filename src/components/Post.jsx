import styles from "./Post.module.css"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { Link } from "phosphor-react";

export function Post({ author, publishedAt, content }){
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