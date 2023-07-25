
import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import Opening from './components/Opening/Opening';
import Features from './components/Features/Features';
import EmpoweringStudents from './components/EmpoweringStudents/EmpoweringStudents';
// import WhySitipay from './components/WhySitipay/WhySitipay';
// import Testimonials from './components/Testimonials/Testimonials'
// import Timeline from './components/Timeline/Timeline';
// import AboutUs from './components/AboutUs/AboutUs';
// import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Opening />
      <Features />
      <EmpoweringStudents />
      {/* 
      
      
      <WhySitipay />
      <Testimonials />
      <Timeline />
      <AboutUs />
      <Footer /> */}
    </div>
  );
}

export default App;
