import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/caiotheodoro.png' alt='' />
                    <div className={styles.authorInfo}>
                        <strong>Caio</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <time title='1 de janeiro de 2021' dateTime="2020-01-01">
                    Publicado há 1 minuto
                </time>
            </header>

            <div className={styles.content}>
                <p>dfgdfgfdg</p>

                <p><a href={""}>caiotheodoro.vercel.app</a></p>
                <p>

                    <a href={""}>#rest</a> {' '}
                    <a href={""}>#fgh</a> {' '}
                    <a href={""}>#refghgfhst</a> {' '}
                </p>


            </div>
            <form className={styles.comment}>
                <strong>

                </strong>
                <textarea placeholder='Comente'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}