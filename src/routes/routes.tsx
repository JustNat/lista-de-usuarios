import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';

<Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/tasks/:id" element={<Home />}/>
    <Route path="/posts/:id" element={<Home />}/>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Home />} />
</Routes>

