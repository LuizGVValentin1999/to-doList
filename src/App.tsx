import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <ToastContainer />
      <TaskList />
      </div>
    </div>
  );
}

export default App;
