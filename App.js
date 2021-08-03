import React from 'react';
import StackNavigate from './src/components/navigation/StackNavigation';
import { Provider as AuthProvider } from './src/providers/AuthContext';
import LongTimers from './src/components/utils/LongTimers';

export default function App() {
LongTimers();
  return (
    <AuthProvider>
      <StackNavigate />
    </AuthProvider>
  );
}
