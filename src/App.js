import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Success from './Components/Success';
import NotFound from './Components/NotFound';
import Projects from './Components/Projects';
import FeaturedProjects from './Components/FeaturedProjects';
import NewProjects from './Components/NewProjects';
import UserDetails from './Components/UserDetails';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/success' element={<Success /> } />
        
        <Route path='/projects' element={<Projects />} >
          <Route index element={<FeaturedProjects /> }/>  
          <Route path='featured' element={<FeaturedProjects /> } />
          <Route path='new' element={<NewProjects /> } />
        </Route>
        <Route path='/users' element={<Users /> } />
        <Route path='users/:userid' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
