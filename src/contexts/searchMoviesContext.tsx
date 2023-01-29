import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";

interface SearchMoviesProviderProps {
  children: ReactNode;
}

const SearchMoviesContext = createContext({});

export const useSearchMoviesContext = () => {
  return useContext(SearchMoviesContext);
};

export const SearchMoviesProvider = ({
  children,
}: SearchMoviesProviderProps) => {
  return (
    <SearchMoviesContext.Provider value={{}}>
      {children}
    </SearchMoviesContext.Provider>
  );
};
