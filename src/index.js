// 1. Primero lo que no depende de nada más del proyecto (o depende poco)
export * from './styles/breakpoints';
export * from './styles/themes';
export * from './styles/variables';
export * from './utils/dataEstatica';
export * from './api/apiClient';
export * from './components/atomos/Icono';
export * from './components/moleculas/Btnsave';

// 2. Luego los que dependen de lo anterior
export * from './components/organismos/sidebar/SidebarCard';
export * from './components/organismos/Menuambur';
export * from './components/organismos/sidebar/Sidebar';

// 3. Luego contextos, stores, hooks
export * from './context/AuthContent';
export * from './hooks/ProtectedRoute';
export * from './store/AuthStore';

// 4. Páginas y templates
export * from './components/templates/HomeTemplate';
export * from './components/templates/LoginTemplate';
export * from './pages/Home';
export * from './pages/Login';

// 5. Rutas
export * from './routers/routes';

// 6. Al final, App (lo que más depende de todo)
export { default as App } from './App';
