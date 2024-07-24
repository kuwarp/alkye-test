
import './App.css'
import StepForm from './pages/Logins/Steps'
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './Components/Footer'
import PasswordStep from './pages/Logins/Password'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginStep from './pages/Logins/Email';
function App() {

  return (
    <>    <div className="  max-w-screen max-h-full ">
    <div className="flex-grow">
    <Router>
<Routes>
  <Route path="/" element={<LoginStep />} />
  <Route path="/login-password" element={<PasswordStep/>}/>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path='/login' element={<StepForm/>}/>
</Routes>
</Router>
    </div>
    <Footer />
  </div>

    </>
  )
}

export default App

