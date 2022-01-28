import styles from './App.module.css';
import Login from './components/login/Login';
import useAuthUser from './hooks/useAuthUser';
import Sidebar from './components/sideBar/Sidebar';
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const user = useAuthUser();
  if (!user) {
    return <Login />;
  }

  return (
    <div className={styles.App}>
      <div className={styles.body}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
