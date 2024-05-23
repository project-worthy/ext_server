import { createContext,useState } from "react";
export const ThemeContext = createContext();
function ThemeProvider({children})
  const [ isDark, setIsDark ] = useState(true);
  const providerValue = {
  isDark
}
  return <ThemeContext.Provider value={providerValue}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeProvider;
