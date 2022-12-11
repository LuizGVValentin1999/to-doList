import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaskList />
        <main></main>
      </div>
    </div>
  );
}

export default App;
