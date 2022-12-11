import { PlusCircle  } from 'phosphor-react';
import Clipboard from '../assets/Clipboard.svg'
import styles from './TaskList.module.css';
export function TaskList() {
  return (
    <main>
      <form autoComplete='off' className={styles.taskForm}>
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
      <div className={styles.overviewBox}>
        <div className={styles.overview}>
          <div className={styles.counterTask}>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>
          <div className={styles.counterTaskComplt}>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className={styles.noTasksContainerBox}>
            <div className={styles.noTasksContaine}>
            <img src={Clipboard} alt="Clipboard" />
              <p  className={styles.textNotTask}>Você ainda não tem tarefas cadastradas</p>
              <p  className={styles.texteAddTask}>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
    </main>
  )
}