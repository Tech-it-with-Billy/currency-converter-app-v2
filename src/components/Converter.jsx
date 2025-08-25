import '../index.css'

function Converter() {
    return (
        <div>
            <h1>Currency Converter</h1>
            <form action="">
                <input type="text" name="current" value="USD" />
                <input type="text" name="target" value="EUR" /><br/>
                <label for="amount">Amount:</label>
                <input type="text" name="amount" value="000000" /><br/>
                <button type='submit'>Convert</button>
            </form>
        </div>
    )
}

export default Converter;