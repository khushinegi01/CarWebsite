import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border text-black dark:text-white dark:border-white border-black"
    >
      {theme === 'dark' ? 'Light Mode' : 'Night Mode'}
    </button>
  );
}
