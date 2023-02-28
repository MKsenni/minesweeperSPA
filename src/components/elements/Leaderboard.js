import { useNavigate } from 'react-router-dom';
import './leaderboard.css';

function Leaderboard () {
    const navigate = useNavigate();
    const back = () => navigate(-1);
    let winers = JSON.parse(localStorage.getItem('bestTime') || '[]');
    winers.sort( (a, b) => {
        return a - b;
    })
    return (
        <div className="container">
            <button onClick={back} className="back"> back </button>
            <table className="table">
                <tr className="row">
                    <td>PLACE</td>
                    <td>TIME,sec</td>
                </tr>
                <tr className="row">
                    <td>1</td>
                    <td>{winers[0]}</td>
                </tr>
                <tr className="row">
                    <td>2</td>
                    <td>{winers[1]}</td>
                </tr>
                <tr className="row">
                    <td>3</td>
                    <td>{winers[2]}</td>
                </tr>
                <tr className="row">
                    <td>4</td>
                    <td>{winers[3]}</td>
                </tr>
                <tr className="row">
                    <td>5</td>
                    <td>{winers[4]}</td>
                </tr>
                <tr className="row">
                    <td>6</td>
                    <td>{winers[5]}</td>
                </tr>
                <tr className="row">
                    <td>7</td>
                    <td>{winers[6]}</td>
                </tr>
                <tr className="row">
                    <td>8</td>
                    <td>{winers[7]}</td>
                </tr>
                <tr className="row">
                    <td>9</td>
                    <td>{winers[8]}</td>
                </tr>
                <tr className="row">
                    <td>10</td>
                    <td>{winers[9]}</td>
                </tr>
            </table>
        </div>
    )
}

export default Leaderboard;