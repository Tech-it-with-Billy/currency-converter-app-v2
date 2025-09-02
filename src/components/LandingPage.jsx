import '../index.css'
import { Link } from 'react-router-dom';
import Navigation from './navigation';

function LandingPage() {
    return (
        <div class="min-h-screen flex flex-col items-center">
            <div class="mt-10">
                <Navigation />
            </div>

            <div className='landing-page flex-direction: column pt-40'>
                <h1 class='p-4'>Currency Converter</h1>
                <p class='p-4'>Convert between currencies with live exchange rates</p>
                <div class='p-4'>
                    <Link to="/converter">
                        <button>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;