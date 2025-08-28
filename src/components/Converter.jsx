import '../index.css'
import CurrencyDropdown from './CurrencyDropdown';

function Converter() {
    return (
        <div>
            <h1>Currency Converter</h1>
            <form action="">
                <div >
                    <label name="currency-label">From</label>
                    <CurrencyDropdown />
                </div>

                <div>
                    <label name="currency-label">To</label>
                    <CurrencyDropdown />
                </div>

                <div>
                    <label name="amount">Amount</label>
                    <input type="number" name="amount" placeholder="000000" />
                </div>

                <div>
                    <button type='submit'>Convert</button>
                </div>

            </form>
        </div>
    )
}

export default Converter;