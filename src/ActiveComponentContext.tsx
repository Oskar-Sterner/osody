import { createContext, useState, useContext } from 'react';

interface ActiveComponentContextProps {
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

export const ActiveComponentContext =
  createContext<ActiveComponentContextProps>({
    activeComponent: 'projects',
    setActiveComponent: () => {},
  });

export function ActiveComponentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeComponent, setActiveComponent] = useState('projects');

  return (
    <ActiveComponentContext.Provider
      value={{ activeComponent, setActiveComponent }}
    >
      {children}
    </ActiveComponentContext.Provider>
  );
}

export function useActiveComponent() {
  return useContext(ActiveComponentContext);
}
