import { useState } from "react"

export default function Main() {


  const [meme, setMeme] = useState({
    imgURL:'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg',
    topText: 'Top Text',
    bottomText: 'Bottom Text'
  })

  function handleTopTextChange(event) {
    setMeme(event.target.value)
  }

  function handleBottomTextChange(event) {
    setMeme(event.target.value)
  }

  function generateMeme() {
    const randomNum = Math.floor(Math.random() * 100)
    const randomMeme = `https://imgflip`
  }

  return (
    <main className="main-styling">
      <form className="form-input-styling">
        <label className="label-styling" htmlFor="top-text">Top Text
        <input
          onChange={handleTopTextChange}
          className="input-field-styling"
          type="text"
          name="top-text"
          placeholder="Top Text" />
        </label>
        <label className="label-styling" htmlFor="bottom-text">Bottom Text
        <input 
          onChange={handleBottomTextChange} 
          className="input-field-styling"
          type="text" 
          name="bottom-text"
          placeholder="Bottom Text" />
        </label>
      </form>

      <div className="meme-styling">
      <img className="meme-image-styling" src={meme.imgURL} alt="meme" />
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