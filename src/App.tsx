import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { AboutPage } from './pages/AboutPage/AboutPage.async';
import { MainPage } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {
  const { theme, toggleTheme } = useTheme()

  return <div className={classNames('app', {}, [theme])} >
    <button type='button' onClick={toggleTheme}>TOGGLE</button>

    <Link to={'/'}>Главная</Link>
    <Link to={'/about'}>О сайте</Link>

    <Suspense fallback="Идет загрузка...">
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </Suspense>
  </div >
}


export default App;