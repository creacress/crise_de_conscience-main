'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation'; 

type User = {
  username: string;
  isAdmin: boolean;
} | null;

type AuthContextType = {
  user: User;
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Vérification côté client uniquement
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('adminUser');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setIsAdmin(parsedUser.isAdmin);
        } catch (error) {
          console.error('Error parsing user data', error);
          logout();
        }
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'admin123') {
      const userData = { username, isAdmin: true };
      setUser(userData);
      setIsAdmin(true);
      localStorage.setItem('adminUser', JSON.stringify(userData));
      router.push('/admin/dashboard');
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}