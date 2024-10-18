import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import EditBag from './components/EditBag';
import Practice from './components/Practice';

function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [activeClubs, setActiveClubs] = useState<string[]>([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActivePage('home');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Golf Practice App</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {activePage === 'home' && (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl mb-8">Welcome to Your Golf Practice</h2>
            <div className="space-x-4">
              <button
                onClick={() => setActivePage('editBag')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Edit Bag
              </button>
              <button
                onClick={() => setActivePage('practice')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Practice
              </button>
            </div>
          </div>
        )}
        {activePage === 'editBag' && (
          <EditBag
            activeClubs={activeClubs}
            setActiveClubs={setActiveClubs}
            onBack={() => setActivePage('home')}
          />
        )}
        {activePage === 'practice' && (
          <Practice
            activeClubs={activeClubs}
            onBack={() => setActivePage('home')}
          />
        )}
      </main>
    </div>
  );
}

export default App;