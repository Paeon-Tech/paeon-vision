import { Routes, Route } from 'react-router-dom'
import { Homepage } from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Homepage />} />
				<Route path="dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default App
