import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/caiotheodoro.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
        <header>
            <div className={styles.authorAndTime}>
                <strong>dfdf</strong>
                <time dateTime="2020-01-01">Cerca de 1h atrás</time>
            </div>

            <button title="deletar comentário">
                <Trash size={24} />
            </button>
        </header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit!!
        </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>12</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}