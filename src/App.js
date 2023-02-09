import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { lazily } from 'react-lazily'

const { Homepage, Contact, About, Signup, LoginPage, Error, ForgotPassword } = lazily( () => import('./Pages/Home'))
const { PrivateRoute, Fallback } = lazily( () => import('./Component'))
const { Dashboard } = lazily(() => import('./Pages/Dashboard'))

const App = () => {
    return (
		<Suspense fallback={<Fallback/>}>
			<Routes>
				<Route path="/">
					<Route path="/" element={<Homepage />}>
						<Route index element={<Suspense fallback={<Fallback/>}><LoginPage /></Suspense>} />
						<Route path="signup" element={<Suspense fallback={<Fallback/>}><Signup /></Suspense>} />
						<Route
							path="forgot-password"
							element={<Suspense fallback={<Fallback/>}><ForgotPassword /></Suspense>}
						/>
					</Route>
					<Route
						path="home"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route path="contact" element={<Contact />} />
					<Route path="developer" element={<About />} />
					<Route path="fallback" element={<Fallback />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</Suspense>
    )
}

export default App
