import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { ProductDetail } from './components/product/ProductDetail';

function App() {
  return (
    <div className="bg-slate-800 text-white font-inter w-full">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle/:id' element={<ProductDetail />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;