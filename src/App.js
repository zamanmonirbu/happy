import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './component/Authentication/Registration';
import Login from './component/Authentication/Login';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import AllContent from './component/Pages/AllContent/AllContent';
import Header from './component/Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<ProtectedRoute />}>
          <Route path='' element={<AllContent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
