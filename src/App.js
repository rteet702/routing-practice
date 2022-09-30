import React from 'react'
import { Word } from './components/Word'
import { Welcome } from './components/Welcome'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Welcome />} />
        <Route path={'/home'} element={<Welcome />} />
        <Route path="/:word" element={<Word />}/>
        <Route path="/:word/:color/:bg" element={<Word />}/>
      </Routes>
    </BrowserRouter>
  )
}