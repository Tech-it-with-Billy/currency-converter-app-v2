import '../index.css'
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <h1>Currency Converter</h1>
            <p>Convert between currencies with live exchange rates</p>
            <Link to="/converter">
                <button>Get Started</button>
            </Link>
        </div>
    )
}

export default LandingPage;