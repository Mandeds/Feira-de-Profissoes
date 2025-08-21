import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import Navegar from './react/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegar/>
  </StrictMode>,
)
