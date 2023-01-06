import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import MainNavbar from './components/navbar.component';
import BillData from './components/billdata.component';
import Reader from './components/readerlogin.component';


function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/billdata" element={<BillData />} />
        <Route path="/" element={<Reader />} />
      </Routes>
    </>
  );
}

export default App;
