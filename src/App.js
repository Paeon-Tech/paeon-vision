import { Routes, Route } from 'react-router-dom'
import {
    Homepage,
    Contact,
    About,
    Signup,
    LoginPage,
    Error,
} from './Pages/Home'
import { PrivateRoute } from './Component'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Homepage />}>
                    <Route index element={<LoginPage />} />
                    <Route path="Signup" element={<Signup />} />
                </Route>
                <Route
                    path="Home"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route path="Contact" element={<Contact />} />
                <Route path="About" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

export default App
