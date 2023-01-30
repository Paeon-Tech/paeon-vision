import { Routes, Route } from 'react-router-dom'
import { Homepage, Contact, About, Signup, LoginPage} from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path='/' element={<Homepage />} >
					<Route index element={<LoginPage />}/>
					<Route path="Signup" element={<Signup />}/>
				</Route>
                <Route path="Home" element={<Dashboard />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="About" element={<About />} />
            </Route>
        </Routes>
    )
}

export default App
