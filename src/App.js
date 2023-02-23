import './App.css';
import Contact from './components/contact';
import Header from './components/header';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Tools from './components/tools';

function App() {
  return (
    <div className="h-[450px] lg:h-screen bg-gradient-to-t from-indigo-200">
      <Navbar />
      <Header />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
