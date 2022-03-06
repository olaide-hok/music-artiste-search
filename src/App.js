import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { GeniusProvider } from "./context/genius/GeniusContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GeniusProvider>
      <AlertProvider>
        <Router>
          <div className="d-flex flex-column justify-content-between vh-100">
            <Navbar/>

            <main className="container mx-auto px-3 pb-5">
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About /> } />
                <Route path='/notfound' element={<NotFound /> } />
                <Route path='/*' element={<NotFound /> } />
              </Routes>
            </main>
            
            <Footer />
          </div>
          
        </Router>
      </AlertProvider> 
    </GeniusProvider>
  );
}

export default App;
