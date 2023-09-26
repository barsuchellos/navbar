import './styles/reset.scss'
import './styles/inter.scss'

import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';

import Manifesto from './pages/ManifestoPage/ManifestoPage.jsx'
import HowItWorks from './pages/HowItWorksPage/HowItWorksPage.jsx'
import Pricing from './pages/PricingPage/PricingPage.jsx'
import CountryExplorer from './pages/CountryExplorerPage/CountryExplorePage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/Manifesto' element={<Manifesto/>} />
        <Route path='/HowItWorks' element={<HowItWorks/>} />
        <Route path='/posts' element={<Pricing/>} />
        <Route path='/CountryExplorer' element={<CountryExplorer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
