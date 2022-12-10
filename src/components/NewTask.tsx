import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';
export function NewTask(){
    return (
       <div>
     <form autoComplete='off'  className={styles.taskForm}>
        <input
          type="text"
          name="task"
          placeholder="Adicione uma nova tarefa"
          required
        />
        <footer>
          <button type="submit" >
          Criar 
          <PlusCircle size={20} />
          </button>
        </footer>
      </form>
       </div>
    )
}