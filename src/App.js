import './App.css';
import { GlobalStyle } from './GlobalStyling';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/about';
import DoctorsPage from './pages/doctors';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ProfilePage from './pages/profile';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import { UserAuthContextProvider } from './context/userAuthContext';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<AboutPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
           </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
};

export default App;