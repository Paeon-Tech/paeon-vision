import { Routes, Route } from 'react-router-dom'
import { Homepage, Contact } from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Homepage />} />
				<Route path="Home" element={<Dashboard/>}/>
				<Route path="Contact" element={<Contact/>}/>
            </Route>
        </Routes>
    )
}

export default App
