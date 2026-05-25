import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TheChoicePage from './pages/TheChoice/TheChoicePage'
import GrandeRotaPage from './pages/GrandeRota/GrandeRotaPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<TheChoicePage />} />
        <Route path="/grande-rota" element={<GrandeRotaPage />} />
        <Route path="*"            element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
