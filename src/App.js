import { Routes, Route } from 'react-router-dom'
import { Homepage, Contact, About } from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Homepage />} />
                <Route path="Home" element={<Dashboard />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="About" element={<About />} />
            </Route>
        </Routes>
    )
}

export default App
