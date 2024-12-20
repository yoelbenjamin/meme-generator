import { use } from "react"
import { useState, useEffect } from "react"

export default function Main() {


  const [meme, setMeme] = useState({
    imgUrl:"https://imgflip.com/s/meme/One-Does-Not-Simply.jpg",
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor'
  })

  const [memeData, setMemeData] = useState([])

  function handleTextChange(event) {
    const {value, name} = event.target
    setMeme( prevMeme => ({
      ...prevMeme, 
      [name]: value
    }))
  }

  useEffect(() => {
    fetch ("https://api.imgflip.com/get_memes")
      .then (response => response.json())
      .then (data => setMemeData(data.data.memes))
    }, [])

  function generateMeme() {
    const randomNum = Math.floor(Math.random() * memeData.length)
    const newMemeUrl = memeData[randomNum].url
    setMeme( prevMeme => ({
      ...prevMeme,
      imgUrl: newMemeUrl
    }))
  }

  return (
    <main className="main-styling">
      <form className="form-input-styling">
        <label className="label-styling" htmlFor="top-text">Top Text
        <input
          onChange={handleTextChange}
          value = {meme.topText}
          className="input-field-styling"
          type="text"
          name="topText"
          placeholder="Top Text" />
        </label>
        <label className="label-styling" htmlFor="bottom-text">Bottom Text
        <input 
          onChange={handleTextChange} 
          value = {meme.bottomText}
          className="input-field-styling"
          type="text" 
          name="bottomText"
          placeholder="Bottom Text" />
        </label>
      </form>

      <div className="meme-styling">
      <img className="meme-image-styling" src={meme.imgUrl} alt="meme" />
      <span className="top-text-styling">{meme.topText}</span>
      <span className="bottom-text-styling">{meme.bottomText}</span>
      </div>

      <button 
        onClick={generateMeme}
        className="generate-button-styling"
        >Generate a new meme image</button>

    </main>
  )
}