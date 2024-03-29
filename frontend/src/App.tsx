import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import TodayPage from './pages/TodayPage/TodayPage.tsx';
import InboxPage from './pages/InboxPage/InboxPage.tsx';
import PersonalPage from './pages/PersonalPage/PersonalPage.tsx';
import WorkPage from './pages/WorkPage/WorkPage.tsx';
import RefreshContextProvider from './context/RefreshContextProvider.tsx';
import TaskModal from './components/TaskModal/TaskModal.tsx';
import ModalContextProvider from './context/ModalContextProvider.tsx';
import CategoriesContextProvider from './context/CategoriesContextProvider.tsx';
import Toast from './components/Toast/Toast.tsx';
import ToastContextProvider from './context/ToastContextProvider.tsx';

function App() {
  return (
    <>
      <RefreshContextProvider>
        <CategoriesContextProvider>
          <ModalContextProvider>
            <ToastContextProvider>
              <BrowserRouter>
                <Sidebar />
                <TaskModal />
                <Toast />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/today" element={<TodayPage />} />
                  <Route path="/inbox" element={<InboxPage />} />
                  <Route path="/personal" element={<PersonalPage />} />
                  <Route path="/work" element={<WorkPage />} />
                </Routes>
              </BrowserRouter>
            </ToastContextProvider>
          </ModalContextProvider>
        </CategoriesContextProvider>
      </RefreshContextProvider>
    </>
  );
}

export default App;
