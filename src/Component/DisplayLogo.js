import Logo from '../Assets/img/pv-logo.png'

const DisplayLogo = ({text}) => {
	return (
		<div className="text-center pb-3 pv-logo">
            <img src={Logo} alt="Paeon Vision Logo" height="70px" />
            <h5 className="pt-4 pb-2">{text}</h5>
        </div>
	);
};

export default DisplayLogo;