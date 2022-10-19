import './Form.css';
import {useEffect, useState} from 'react';
// import MemesData from '../../MemesData';

function Form() {
    const [ allMemes, setAllMemes ] = useState([]);

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
    }, [])


    const [ memeData, setMemeData ] = useState(
      {
         firstText: "",
         secondText: "",
         randomImage: "https://i.imgflip.com/1g8my4.jpg" 
      }
  );

    function getMemeImage() {
        const num = Math.floor(Math.random() * allMemes.length)
        const memeImg = allMemes[num].url;
        
        setMemeData(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memeImg
            }
        } )
    }

    
    function handleChange(event) {
        const { name, value } = event.target;
        setMemeData(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }


    return (
      <div className="form-container">
        <div className="form" name="memeform" method="post" action="#">
          <input
            className="form-input input1"
            type="text"
            placeholder="First text"
            name="firstText"
            id="first"
            onChange={handleChange}
            value={memeData.firstText}
          >
          </input>

          <input
            className="form-input input2"
            type="text"
            placeholder="Second text"
            name="secondText"
            id="last"
            onChange={handleChange}
            value={memeData.secondText}
          >
          </input>

          <button
            className="form-button"
            onClick={getMemeImage}
          >
            Get a new meme image 🖼
          </button>

        </div>
        <div className="meme">
            <img src={memeData.randomImage} className="meme--image" alt="random meme"/>
            <h2 className="meme--text top">{memeData.firstText}</h2>
            <h2 className="meme--text bottom">{memeData.secondText}</h2>
        </div>
      </div>
    );
}

export default Form;