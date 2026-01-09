
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X, Instagram, Facebook, Twitter, Phone, MapPin, Mail } from 'lucide-react';
import { CartItem, MenuItem } from './types';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('creamy_delights_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('creamy_delights_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-3xl font-pacifico text-pink-500">Creamy Delights</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link to="/" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Home</Link>
                <Link to="/menu" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Menu</Link>
                <Link to="/about" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">About Us</Link>
                <Link to="/contact" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Contact</Link>
                <Link to="/cart" className="relative p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-pink-500" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-4">
                <Link to="/cart" className="relative p-2 bg-pink-100 rounded-full">
                  <ShoppingCart className="w-5 h-5 text-pink-500" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Content */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-pink-500">Home</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-pink-500">Menu</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-pink-500">About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-pink-500">Contact</Link>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
            <Route 
              path="/cart" 
              element={<Cart cart={cart} onRemove={removeFromCart} onUpdateQty={updateQuantity} onClear={clearCart} />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
