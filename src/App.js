import { Routes, Route } from 'react-router-dom'
import { Homepage } from './Pages/Home'

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Homepage />} />
            </Route>
        </Routes>
    )
}

export default App
