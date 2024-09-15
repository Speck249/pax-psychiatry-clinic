import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AboutPage from './pages/about';
import DoctorsPage from './pages/doctors';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ProfilePage from './pages/profile';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import { UserAuthContextProvider } from './context/userAuthContext';
import './App.css';
import { GlobalStyle } from './GlobalStyling';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
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