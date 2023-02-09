import { Routes, Route } from 'react-router-dom'
import {
    Homepage,
    Contact,
    About,
    Signup,
    LoginPage,
    Error,
    ForgotPassword,
} from './Pages/Home'
import { PrivateRoute, Fallback } from './Component'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Homepage />}>
                    <Route index element={<LoginPage />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                </Route>
                <Route path="/home" element={ <PrivateRoute><Dashboard /></PrivateRoute>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/developer" element={<About />} />
                <Route path="/fallback" element={<Fallback />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

export default App
