import { ReactNode, createContext, useEffect, useState } from "react";

interface SearchMoviesProviderProps {
  children: ReactNode;
}

const SearchMoviesContext = createContext({});

const SearchMoviesProvider = ({ children }: SearchMoviesProviderProps) => {
  return (
    <SearchMoviesContext.Provider value={{}}>
      {children}
    </SearchMoviesContext.Provider>
  );
};
