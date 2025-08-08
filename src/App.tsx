import React, { useState, useEffect } from 'react';
import { HashRouter } from './components/HashRouter';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HashRouter>
        {({ currentRoute, navigate }) => (
          <>
            <Navigation currentRoute={currentRoute} navigate={navigate} />
            <main>
              {currentRoute === '' || currentRoute === 'home' ? (
                <HomePage navigate={navigate} />
              ) : currentRoute === 'privacy' ? (
                <PrivacyPage />
              ) : currentRoute === 'terms' ? (
                <TermsPage />
              ) : currentRoute === 'about' ? (
                <AboutPage />
              ) : (
                <HomePage navigate={navigate} />
              )}
            </main>
          </>
        )}
      </HashRouter>
    </div>
  );
}

export default App;