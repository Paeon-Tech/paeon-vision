import { MDBCol } from 'mdb-react-ui-kit'

const Results = ({ state: { prediction } }) => {

    return (
        <MDBCol lg="6" className="p-3 small">
            <div>
                <h3 className="mb-3 ">Prediction Result</h3>
                {prediction && prediction.map( (data, index) => <p key={index}>{data.probability}</p>)}
            </div>
        </MDBCol>
    )
}

export default Results
