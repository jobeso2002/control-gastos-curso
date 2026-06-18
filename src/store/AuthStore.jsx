// src/store/auth.jsx
import { create } from 'zustand';
import { apiClient } from '../api/apiClient';

export const useAuthStore = create((set) => ({
  isAuth: false,
  datauserGoogle: null,

  // Reemplaza supabase.auth.signInWithOAuth — redirige al backend
  signInWithGoogle: () => {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/google`;
  },

  // Reemplaza supabase.auth.signOut
  signout: async () => {
    try {
      await apiClient.post('/auth/logout');
    } catch (e) {
      console.error('Error al cerrar sesión:', e);
    } finally {
      set({ isAuth: false, datauserGoogle: null });
    }
  },

  // Llamado desde AuthContext cuando se verifica la sesión
  setAuth: (isAuth, userData = null) => set({ isAuth, datauserGoogle: userData }),
}));