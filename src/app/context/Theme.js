"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // // console.log(prefiereDarkMode.matches);

    // if (prefiereDarkMode.matches) {
    //     document.body.classList.add('dark');
    // } else {
    //     document.body.classList.remove('dark');
    // }

    // prefiereDarkMode.addEventListener('change', function () {
    //     if (prefiereDarkMode.matches) {
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    // });


    const [theme, setTheme] = useState('dark');

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}