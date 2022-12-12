import { PlusCircle } from 'phosphor-react';
import Clipboard from '../assets/Clipboard.svg'
import { Task } from './Task';
import styles from './TaskList.module.css';
import {ChangeEvent,  FormEvent,  useState } from "react";


interface TaskProps {
  id: string;
  text: string;
  isCompleted: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  
  const [newTaskText, setNewTaskText] = useState("");
  const [amountTasks, setAmountTasks] = useState(0);
  const [amountCompletedTasks, setAmountCompletedTasks] = useState(0);

  function crateNewTask(event: FormEvent) {
    event.preventDefault();
    if(newTaskText){
      const newTask =
      {
        id: newTaskText,
        text: newTaskText,
        isCompleted: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
      setAmountTasks((state) => {
        return state + 1;
      });
    }
  }

  function newTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
   
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task.text !== taskToDelete;
    });
    
    setTasks(taskWithoutDeletedOne);
    setAmountTasks(taskWithoutDeletedOne.length);
    countCompletedTasks();
  }

  function countCompletedTasks(){
    let count = 0;
    tasks.filter(task => {
      if (task.isCompleted === true) {
        count++;
      }
    })
    setAmountCompletedTasks(count)
  }

  function IsCompletedTask(taskToDelete: string) {
    tasks.map(task => {
      if (task.text === taskToDelete) {
        task.isCompleted = !task.isCompleted
      }
    })
    countCompletedTasks();
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
            <span>{amountTasks}</span>
          </div>
          <div className={styles.counterTaskComplt}>
            <p>Concluídas</p>
            <span>{amountCompletedTasks} de {amountTasks}</span>
          </div>
        </div>
      </div>
      <div className={styles.TasksContainer}>
       
          {
            tasks.length > 0 ? (
              tasks.map((task) => {
                return (
                <Task 
                  key={task.text}
                  taskText={task.text} 
                  onDeleteTask={deleteTask}
                  onIsCompletedTask={IsCompletedTask}
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