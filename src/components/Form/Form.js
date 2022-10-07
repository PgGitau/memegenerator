import './Form.css';

function Form() {
    return(
        <div className="form-container">
            <div className="form" name='memeform' method='post' action='#'>
                <input className="form-input input1" type="text" placeholder="First text" name="first" id="first"></input>
                <input className="form-input input2" type="text" placeholder="Second text" name="last" id="last"></input>
                <button className="form-button">Get a new meme image 🖼</button>
            </div>
        </div>
    )
}

export default Form;