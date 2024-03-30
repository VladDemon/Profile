import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function Providers({ children } : {children : React.ReactElement}) {
    return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );  
}

