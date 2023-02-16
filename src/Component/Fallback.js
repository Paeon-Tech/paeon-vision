import { MDBSpinner } from 'mdb-react-ui-kit'

const Fallback = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <MDBSpinner color="success" size="xl">
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
        </div>
    )
}

export default Fallback
