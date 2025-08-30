"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import {
  registerWithEmail,
  signInWithEmail,
  signInWithGoogle,
} from "@/firebase/services/authService";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<User>;
  loginWithGoogle: () => Promise<User>;
  register: (
    email: string,
    password: string,
    displayName?: string
  ) => Promise<User>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      loginWithEmail: async (email, password) => {
        const u = await signInWithEmail(email, password);
        return u as User;
      },
      loginWithGoogle: async () => {
        const u = await signInWithGoogle();
        return u as User;
      },
      register: async (email, password, displayName) => {
        const u = await registerWithEmail(email, password, displayName);
        return u as User;
      },
      logout: async () => {
        await signOut(auth);
      },
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
