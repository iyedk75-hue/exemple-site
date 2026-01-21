import { useState } from 'react';

// Composant MenuItem
function MenuItem({ href, children, onClose }) {
  return (
    <li>
      <a 
        href={href}
        onClick={onClose}
        className="block py-2 px-3 sm:px-4 text-sm sm:text-base hover:bg-pink-100 hover:text-rose-500 transition-colors rounded"
      >
        {children}
      </a>
    </li>
  );
}

// Composant SubMenu
function SubMenu({ title, items, isOpen, onToggle, onClose }) {
  return (
    <li>
      <button
        className={`w-full text-left py-2 px-3 sm:px-4 text-sm sm:text-base hover:bg-pink-100 hover:text-rose-500 transition-colors rounded flex justify-between items-center ${
          isOpen ? 'text-rose-500 bg-pink-50' : ''
        }`}
        onClick={onToggle}
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <ul className={`ml-3 sm:ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {items.map((item, index) => (
          <MenuItem key={index} href={item.href} onClose={onClose}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </li>
  );
}

// Composant MenuHeader
function MenuHeader({ title }) {
  return (
    <div className="border-b border-pink-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
      <h2 className="text-xl sm:text-2xl font-bold text-rose-500">{title}</h2>
    </div>
  );
}

// Composant principal Sidebar
export default function Sidebar({ onClose }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  // Configuration du menu - facilement modifiable
  const menuConfig = {
    header: "Menu",
    items: [
      { type: 'link', href: '#accueil', label: 'Accueil' },
      { type: 'link', href: '#services', label: 'Services' },
      {
        type: 'submenu',
        title: 'Nos Soins',
        items: [
          { href: '#', label: 'Soins du Visage' },
          { href: '#', label: 'Manucure & Pédicure' },
          { href: '#', label: 'Épilation' },
          { href: '#', label: 'Maquillage' }
        ]
      },
      { type: 'link', href: '#apropos', label: 'À propos' },
      { type: 'link', href: '#contact', label: 'Contact' },
      {
        type: 'submenu',
        title: 'Informations',
        items: [
          
          { href: '#', label: 'Horaires' },
          { href: '#', label: 'Rendez-vous' }
        ]
      }
    ]
  };

  let submenuIndex = 0;

  return (
    <nav className="w-56 sm:w-64 bg-white shadow-xl h-full p-4 sm:p-6 overflow-y-auto">
      <MenuHeader title={menuConfig.header} />
      
      <ul className="space-y-2">
        {menuConfig.items.map((item, index) => {
          if (item.type === 'link') {
            return (
              <MenuItem key={index} href={item.href} onClose={onClose}>
                {item.label}
              </MenuItem>
            );
          } else if (item.type === 'submenu') {
            const currentSubmenuIndex = submenuIndex++;
            return (
              <SubMenu
                key={index}
                title={item.title}
                items={item.items}
                isOpen={openSubmenu === currentSubmenuIndex}
                onToggle={() => toggleSubmenu(currentSubmenuIndex)}
                onClose={onClose}
              />
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
}
