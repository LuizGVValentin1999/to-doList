import { PlusCircle } from 'phosphor-react';
import Clipboard from '../assets/Clipboard.svg'
import { Task } from './Task';
import styles from './TaskList.module.css';
import {ChangeEvent,  FormEvent,  useState } from "react";
export function TaskList() {
  const [tasks, setTasks] = useState(["tarefa 1"]);
  
  const [newTaskText, setNewTaskText] = useState("");

  function crateNewTask(event: FormEvent) {
    event.preventDefault();
    if(newTaskText){
      setTasks([...tasks, newTaskText]);
      setNewTaskText("");
    }
  }

  function newTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(taskWithoutDeletedOne);
  }

  return (
    <div>
      <form onSubmit={crateNewTask} autoComplete='off' className={styles.taskForm}>
        <input
          type="text"
          name="task"
          placeholder="Adicione uma nova tarefa"
          onChange={newTaskChange}
          value={newTaskText}
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
      <div className={styles.TasksContainer}>
       
          {
            tasks.length > 0 ? (
              tasks.map((task) => {
                return (
                <Task 
                  key={task}
                  taskText={task} 
                  onDeleteTask={deleteTask}
                 />
                )
              })
            ) 
            : (
              <div className={styles.noTasksContaine}>
              <img src={Clipboard} alt="Clipboard" />
              <p className={styles.textNotTask}>Você ainda não tem tarefas cadastradas</p>
              <p className={styles.texteAddTask}>Crie tarefas e organize seus itens a fazer</p>
            </div>
            )

          }
     
      
       
      </div>
    </div>
  )
}