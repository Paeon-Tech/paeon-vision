import { MDBFooter } from 'mdb-react-ui-kit'

const Footer = () => {
    return (
        <MDBFooter className='bg-theme-color-2'>
            <div className="text-center mt-4 pb-4 small text-dark">
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a href="https://paeonvision.tech/">paeonvision.tech</a>
            </div>
        </MDBFooter>
    )
}

export default Footer
