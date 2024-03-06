import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import TodayPage from './pages/TodayPage/TodayPage.tsx';
import InboxPage from './pages/InboxPage/InboxPage.tsx';
import PersonalPage from './pages/PersonalPage/PersonalPage.tsx';
import WorkPage from './pages/WorkPage/WorkPage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
