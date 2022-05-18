import { useEffect, useState } from 'react';


import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


import './styles/global.scss';




export function App() {
  const [appSelectedGenreId, setAppSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar setAppSelectedGenreId={setAppSelectedGenreId}/>
      <Content selectedGenreId={appSelectedGenreId}/>
      
    </div>
  )
}