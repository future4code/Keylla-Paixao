import React from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import MatchesPages from './pages/MatchesPage/MatchesPages';

 const App = () => {
  return (
    <div>
  <Header/>
  <HomePage/>
  <MatchesPages/>

  </div>

  )
}
export default App;