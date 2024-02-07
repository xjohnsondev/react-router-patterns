import {useParams, Link, useNavigate} from 'react-router-dom';

const ColorDisplay = () => {
    const navigate = useNavigate();
    const params = useParams();
    const styles = {
        backgroundColor: params.color,
        height: '100vh',
        width: '100vw',
        position: "absolute",
        top: 0,
        left: 0,
    };
    return (
        <div style={styles}>
            <h1>This is {params.color}</h1>
            <h1>Isn't it beautiful?!</h1>
            <Link to="#" onClick={() => navigate(-1)}>Go Back</Link>
        </div>
    )
};

export default ColorDisplay;