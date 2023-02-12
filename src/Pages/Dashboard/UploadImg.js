import { MDBTypography, MDBInputGroup, MDBBtn, MDBSpinner } from "mdb-react-ui-kit";

const UploadImg = ({ state: { fileInput, handleFileInput, handleUpload, loading } }) => {

	return (
		<div className="p-3 mb-3 small border bg-theme-color-2">
			<h3>Select an image</h3>
			<MDBTypography tag="small">
				Please make sure to upload a file with a supported image
				format such as <span className="fst-italic">JPEG, PNG, or GIF.</span>
			</MDBTypography>
			<div className="mt-4">
				<MDBInputGroup className="mb-3">
					<input
						ref={fileInput}
						className="form-control me-2 me-md-5"
						type="file"
						onChange={handleFileInput}
					/>
					<MDBBtn
						color="dark"
						className={`shadow-0 ${ loading ? 'disabled' : ''}`}
						size="sm"
						onClick={handleUpload}
					>
						{loading ? (
							<MDBSpinner size="sm" color='light'>
								<span className='visually-hidden'>Loading...</span>
							</MDBSpinner>
						) : (
							'UPLOAD'
						)}
					</MDBBtn>
				</MDBInputGroup>
			</div>
		</div>
	);
};

export default UploadImg;