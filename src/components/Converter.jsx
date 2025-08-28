import '../index.css'
import CurrencyDropdown from './CurrencyDropdown';

function Converter() {
    return (
        <div>
            <h1>Currency Converter</h1>
            <form id='converter-form'>
                <div >
                    <label name="current-currency">From</label>
                    <CurrencyDropdown />
                </div>

                <div>
                    <label name="target-currency">To</label>
                    <CurrencyDropdown />
                </div>

                <div>
                    <label htmlFor="amount">Amount</label>
                    <input id='amount' type="number" name="amount" placeholder="000000" />
                </div>

                <div>
                    <button type='submit'>Convert</button>
                </div>

            </form>
        </div>
    )
}

export default Converter;