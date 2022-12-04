import { useContext } from 'react';
import { KeypadContext } from '../contexts/KeypadContext';

const useCustomKeypad = () => {
  const context = useContext(KeypadContext);

  if (!context) throw new Error('Auth context must be use inside AuthProvider');

  return context;
};

export default useCustomKeypad;
