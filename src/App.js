import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './component/Utilities/Authentication/Registration';
import Login from './component/Utilities/Authentication/Login';
import ProtectedRoute from './component/Utilities/ProtectedRoute/ProtectedRoute';
import AllContent from './component/Pages/AllContent/AllContent';
import Header from './component/Header/Header'; 
import Test from './component/Utilities/Authentication/Test';
import UserProfile from './component/Pages/UserProfileRelated/UserProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<ProtectedRoute />}>
          <Route path='' element={<AllContent />} />
          <Route path='test' element={<Test />} />
          <Route path='user/profile' element={<UserProfile/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
