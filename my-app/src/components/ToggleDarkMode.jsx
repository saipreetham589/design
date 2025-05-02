export default function ToggleDarkMode() {
    const toggleMode = () =>
      document.documentElement.classList.toggle('dark');
  
    return (
      <button onClick={toggleMode} className="btn-primary m-4">
      </button>
    );
  }
  