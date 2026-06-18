import { createContext, useContext, useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import { useAuthStore } from '../store/AuthStore';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setAuth } = useAuthStore();

  useEffect(() => {
    const checkSession = async () => {
      try {
        // Llamada directa con fetch nativo — sin interceptores de axios
        // así el 401 no dispara el auto-refresh y simplemente va al login
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/auth/session`,
          { credentials: 'include' }
        );

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          setAuth(true, data.user);
        } else {
          // 401 = no hay sesión → ir al login, normal
          setUser(null);
          setAuth(false);
        }
      } catch {
        setUser(null);
        setAuth(false);
      } finally {
        setLoading(false); // ← siempre desbloquea la pantalla
      }
    };

    checkSession();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', height: '100vh',
        background: '#131313', color: '#fff', fontSize: '1.2rem',
      }}>
        Cargando...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);