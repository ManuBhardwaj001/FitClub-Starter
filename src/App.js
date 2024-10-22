import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import BMI from './components/BMI/BMI';
import Tutorials from './components/Tutorials/Tutorials';
import DietRecommendation from './components/DietRecommendation/DietRecommendation';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  
  return (
    <div className="App">
<Router>
<Routes>
  <Route path='/' element={<>
  <Hero />
      <Programs />
      <BMI />
      <DietRecommendation/>
      <Tutorials/>
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer /> </>}/> 
        <Route path="/login" element={<Login/>} />   
        <Route path="/signup" element={<SignUp/>} />   
      </Routes>
    </Router>
    </div>
  );
}

export default App;
