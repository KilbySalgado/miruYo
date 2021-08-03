import React from 'react';
import StackNavigate from './src/components/navigation/StackNavigation';
import { Provider as AuthProvider } from './src/providers/AuthContext';

export default function App() {

  return (
    <AuthProvider>
      <StackNavigate />
    </AuthProvider>
  );
}
