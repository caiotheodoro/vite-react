import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}: {content: string, onDeleteComment: (content: string) => void}) {
    const [likeCount, setLikeCount] = useState(0);
    const handleDelete = () => {
        onDeleteComment(content)
    }

    const handleAddLike = () => {
        setLikeCount(likeCount + 1);
        
    }


    
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

            <button title="deletar comentário" onClick={handleDelete}>
                <Trash size={24} />
            </button>
        </header>
        <p>
            {content}
        </p>
                </div>
                <footer>
                    <button onClick={handleAddLike}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}