import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeContext } from 'shared/contexts/ThemeContext';

const root = createRoot(document.getElementById('root'));


const RootComponent = () => {
  return (<BrowserRouter>
    <ThemeContext.Provider>
      <App />
    </ThemeContext.Provider>
  </BrowserRouter>)
}

root.render(<RootComponent />)