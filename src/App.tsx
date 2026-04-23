import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FloatingWhatsAppButton } from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import Restaurant from '@/pages/Restaurant';
import Bar from '@/pages/Bar';
import Laverie from '@/pages/Laverie';
import Contact from '@/pages/Contact';
import QRPage from '@/pages/QRPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/laverie" element={<Laverie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qr" element={<QRPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
