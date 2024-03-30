import { useTheme } from "next-themes";
import React,{ useState, useEffect } from "react";

import { FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

function ThemeSwitcher(): JSX.Element {
    const [mounted, setMounted] = useState<boolean>(false);
    const {theme, setTheme} = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return <></>;
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <>
            <button className="themeBtn" onClick={toggleTheme}>
                {theme === 'light' ? <FaRegMoon /> : <IoSunny />}
            </button>
        </>
    );
}

export default ThemeSwitcher;