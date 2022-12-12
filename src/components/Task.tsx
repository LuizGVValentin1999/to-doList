import styles from './Task.module.css';

import { Trash } from 'phosphor-react';
import { useState } from "react";

interface TaskProps {
    taskText: string;
    onDeleteTask: (taskText: string) => void;
    onIsCompletedTask: (taskText: string) => void;
}
export function Task({ taskText,onDeleteTask,onIsCompletedTask }: TaskProps) {

    const [isCompleted, setisCompleted] = useState(false);

    function deleteTesk(){
        onDeleteTask(taskText);
    }
    
    function taskComplete() {
        setisCompleted(!isCompleted);
        onIsCompletedTask(taskText);
    }
   
    return (
        <div className={styles.tasks}>
            <div className={styles.checkboxAndText}>
                <div>
                    <input
                        title='checkbox'
                        type="checkbox"
                        onClick={taskComplete}
                    />
                </div>

                <p className={isCompleted?styles.isCompleted:''}>{taskText}</p>
            </div>
            <button
                onClick={deleteTesk}
                type='button'
                title='delete'>
                <Trash size={24} />
            </button>
        </div >
    )
}