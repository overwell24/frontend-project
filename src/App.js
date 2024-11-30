import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <Profile />
        </section>
        <Projects />
      </main>
    </div>
  );
};

export default App;