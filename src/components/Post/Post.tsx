import { PostProps } from '@/Interfaces/Post'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'



export function Post({author,content,id,publishedAt}: PostProps) {
    const [comments, setComments] = useState([
        "Muito bom",
    ])
    const [newComment, setNewComment] = useState("")

    const publisehdDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", { locale: ptBR })
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    function handleCreateComment (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        const target = e.target as typeof e.target & {
            content: { value: string };
          };

        const { value } = target.content
        setComments([...comments, value])

        setNewComment("")
    }

    function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
     
        e.target.setCustomValidity("")
        setNewComment(e.target.value)
    }

    function deleteComment(content: string){

        setComments(comments.filter(comment => comment !== content))
    }

    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
        e.target?.setCustomValidity("Esse campo é obrigatório")

    }

   const isNewCommentEmpty = newComment.length === 0
    return (
        <article className={styles.post} key={id}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt='' />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publisehdDateFormatted} dateTime={publishedAt.toISOString()}>
                    Publicado {publishedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(({type,content}, index) => (
                    <div key={index}>
                        <p>
                        {type === 'paragraph' ? content : type === 'link' ? <a href={content}>{content}</a> : null}
                        </p>
                    </div>
                ))}
             

            </div>
            <form className={styles.comment} onSubmit={handleCreateComment}>
                <strong>

                </strong>
                <textarea
                  placeholder='Comente'
                  name="content"
                  value={newComment}
                  onChange={handleNewCommentChange as any}
                  required 
                  onInvalid={handleNewCommentInvalid}
                  
                  />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => (
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    ))
                }
            </div>
        </article>
    )
}