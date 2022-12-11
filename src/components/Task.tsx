import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    taskText: string;
}
export function Task({ taskText }: TaskProps) {
    return (
        <div className={styles.tasks}>
            <div  className={styles.checkboxAndText}>
                <div>
                <input
                    title='checkbox'
                    type="checkbox"
                />
                </div>
                
                <p className={styles.ischecked}>{taskText}</p>
            </div>
            <button
                type='button'
                title='delete'>
                <Trash size={24} />
            </button>
        </div >
    )
}