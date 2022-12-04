import { ReactNode, createContext, useState } from 'react';

// ----------------------------------------------------------------------

export type KeypadContextProps = {
  password: number[] | string[];
  setPassword: React.Dispatch<React.SetStateAction<number[] | string[]>>;
  isKeypadOpen: boolean;
  setIsKeypadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onHideKeypad: VoidFunction;
  getPassword: () => string;
};

const initialState: KeypadContextProps = {
  password: [],
  setPassword: () => {},
  isKeypadOpen: true,
  setIsKeypadOpen: () => {},
  onHideKeypad: () => {},
  getPassword: () => ''
};

const KeypadContext = createContext(initialState);

type KeypadProviderProps = {
  children: ReactNode;
};

function KeypadProvider({ children }: KeypadProviderProps) {
  const [password, setPassword] = useState<number[] | string[]>([]);
  const [isKeypadOpen, setIsKeypadOpen] = useState<boolean>(true);

  function onHideKeypad() {
    setIsKeypadOpen(false);
  }

  function getPassword(): string {
    return password.length ? password.join('') : '';
  }

  return (
    <KeypadContext.Provider
      value={{
        password,
        setPassword,
        isKeypadOpen,
        setIsKeypadOpen,
        onHideKeypad,
        getPassword
      }}
    >
      {children}
    </KeypadContext.Provider>
  );
}

export { KeypadProvider, KeypadContext };
