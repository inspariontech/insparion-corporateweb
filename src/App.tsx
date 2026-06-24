import { Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './i18n'
import Home from './components/Home'
import LegalPage from './components/LegalPage'

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gizlilik" element={<LegalPage doc="privacy" />} />
        <Route path="/privacy" element={<LegalPage doc="privacy" />} />
        <Route path="/kvkk" element={<LegalPage doc="kvkk" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  )
}
