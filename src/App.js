
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './component/header/Header';
import Main from './component/main/Main';

function App() {
  return (
    <>

      <Header />
      <Routes>

        <Route path="/project-ubike" element={<Main />} />
        <Route path="/instruction" element={<h2>使用說明</h2>} />
        <Route path="/payment" element={<h2>收費方式</h2>} />
        <Route path="/info" element={<Main />} />
        <Route path="/news" element={<h2>最新消息</h2>} />
        <Route path="/events" element={<h2>活動專區</h2>} />




      </Routes></>


  );
}

export default App;
