import { Link } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'shared/contexts/ThemeContext';
import { AppRouter } from 'app/providers/Router';


const App = () => {
  const { theme, toggleTheme } = useTheme()

  return <div className={classNames('app', {}, [theme])} >
    <button type='button' onClick={toggleTheme}>TOGGLE</button>

    <Link to={'/'}>Главная</Link>
    <Link to={'/about'}>О сайте</Link>

    <AppRouter />
  </div >
}


export default App;