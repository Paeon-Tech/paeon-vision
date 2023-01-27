import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './Context'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './Assets/css/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </BrowserRouter>
    </StrictMode>
)

serviceWorkerRegistration.register()
