import React from 'react';
import StackNavigate from './src/components/navigation/StackNavigation';
import StackNavigateLogin from './src/components/navigation/StackNavigationLogin';
export default function App() {
  return (
    <StackNavigateLogin>
      <StackNavigate />
    </StackNavigateLogin>
  );
}