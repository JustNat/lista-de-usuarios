import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tasks from './components/Tasks';
import Posts from './components/Posts'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks/:id' element={<Tasks />} />
          <Route path='/posts/:id' element={<Posts />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
