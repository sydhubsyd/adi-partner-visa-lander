import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ThankYou from './pages/ThankYou'
import Sorry from './pages/Sorry'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/sorry" element={<Sorry />} />
      </Routes>
    </BrowserRouter>
  )
}
