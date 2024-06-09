import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyBookShelf from './pages/MyBookShelf';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mybookshelf' element={<MyBookShelf />} />
      </Routes>
      <Toaster position='bottom-center' />
    </>
  );
}

export default App;
