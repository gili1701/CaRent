import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Car, UserCircle2 } from 'lucide-react';

const Header: React.FC = () => {
  const { isAuthenticated, isAdmin, logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Car size={28} />
          <h1 className="text-2xl font-bold">AutoDrive</h1>
        </div>

        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <button 
                onClick={() => navigate('/')}
                className="hover:text-blue-200 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/cars')}
                className="hover:text-blue-200 transition-colors"
              >
                Cars
              </button>
            </li>
            {isAuthenticated ? (
              <>
                {isAdmin && (
                  <li>
                    <button 
                      onClick={() => navigate('/admin')}
                      className="hover:text-blue-200 transition-colors"
                    >
                      Admin Panel
                    </button>
                  </li>
                )}
                <li>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-700 rounded-full">
                      <UserCircle2 size={18} />
                      <span className="text-sm">{user?.name}</span>
                    </div>
                    <button 
                      onClick={() => {
                        logout();
                        navigate('/login');
                      }}
                      className="px-4 py-1 bg-blue-700 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </>
            ) : (
              <li>
                <button 
                  onClick={() => navigate('/login')}
                  className="px-4 py-1 bg-blue-700 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;