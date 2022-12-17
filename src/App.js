import './App.css';
import BotonesFondo from './components/BotonesFondo';
import Canva from './components/Canva';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import CartProvider from './context/contexto';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <Formulario />
        </header>
        <main>        
          <BotonesFondo />
          <Canva />
        </main>
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
