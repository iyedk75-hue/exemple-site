import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4">
          {/* Logo avec style Editorial */}
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-800">Beauté Divine</span>
          
          </div>

        {/* Icônes réseaux sociaux */}
          <div className="flex gap-3 sm:gap-6 items-center">
            {/* Twitter */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-block hidden sm:block"
              title="Twitter"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Twitter</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-block hidden sm:block"
              title="Facebook"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Facebook</span>
            </a>

            {/* Snapchat */}
            <a 
              href="https://snapchat.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-block hidden sm:block"
              title="Snapchat"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 group-hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Snapchat</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-block hidden sm:block"
              title="Instagram"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 group-hover:text-rose-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Instagram</span>
            </a>

            {/* Medium */}
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-block hidden sm:block"
              title="Medium"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.285 7.269a.75.75 0 00-.208.966L8.727 16.5H6a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-2.727l4.65-8.265a.75.75 0 10-1.296-.758L14.25 15.16V6a.75.75 0 00-1.5 0v9.16L9.85 7.477a.75.75 0 00-.758-.208z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Medium</span>
            </a>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
      </div>
      
      {/* Ligne rose en bas du header */}
      <div className="h-1 bg-gradient-to-r from-pink-400 to-rose-500"></div>
    </header>

    {/* Sidebar mobile */}
    {isSidebarOpen && (
      <>
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden top-0"
          onClick={() => setIsSidebarOpen(false)}
        />
        <aside className="fixed left-0 top-16 h-screen z-50 lg:hidden overflow-y-auto">
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </aside>
      </>
    )}
    </>
  );
}