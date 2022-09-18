import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));


const RootComponent = () => {
  return (<BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>)
}

root.render(<RootComponent />)