import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

function App() {

  const [borderEndEndRadius, setborderEndEndRadius] = useState(0)
  const [borderEndStartRadius, setborderEndStartRadius] = useState(0)
  const [borderTopLeftRadius, setborderTopLeftRadius] = useState(0)
  const [borderTopRightRadius, setborderTopRightRadius] = useState(0)

  const Copy = () => {
    let Top = "Top Left: " + borderTopLeftRadius.toString() 
    let _Top = "Top Right: " + borderTopRightRadius.toString()
    let Bottom = "Bottom Left: " + borderEndStartRadius.toString() 
    let _Bottom = "Bottom Right: " + borderEndEndRadius.toString()

    return Top+'\n'+ _Top+'\n'+Bottom+'\n'+_Bottom
  }

  return (
    <div className="App">
      <header className="App-header">

        <p className="Title" >Border Radius Dynamic</p>

        <div className="Row">
          <div className="Column">
            <div 
              className="InputContainerMain"
            >
              <div className="InputContainer">
                <input 
                  className="Input" 
                  placeholder="Type some value"
                  type="number" 
                  onChange={(value) => {
                      if (value.target.valueAsNumber) {
                        setborderTopLeftRadius(value.target.valueAsNumber)
                      } else {
                        setborderTopLeftRadius(0)
                      }
                  }} 
                />
                <input 
                  className="Input" 
                  placeholder="Type some value"
                  type="number" 
                  onChange={(value) => {
                      if (value.target.valueAsNumber) {
                        setborderTopRightRadius(value.target.valueAsNumber)
                      } else {
                        setborderTopRightRadius(0)
                      }
                  }} 
                />
              </div>
              <div className="InputContainer">
                <input 
                  className="Input" 
                  placeholder="Type some value"
                  type="number" 
                  onChange={(value) => {
                      if (value.target.valueAsNumber) {
                        setborderEndStartRadius(value.target.valueAsNumber)
                      } else {
                        setborderEndStartRadius(0)
                      }
                  }} 
                />
                <input 
                  className="Input" 
                  placeholder="Type some value"
                  type="number" 
                  onChange={(value) => {
                      if (value.target.valueAsNumber) {
                        setborderEndEndRadius(value.target.valueAsNumber)
                      } else {
                        setborderEndEndRadius(0)
                      }
                  }} 
                />
                <input hidden={true} value={Copy()} id="teste"/>
              </div>
            </div>

            <CopyToClipboard text={Copy()}>
              <button 
                className="Button"
              >Copy to clipboard</button>
            </CopyToClipboard>
          </div>

          <div 
            
            className="Box"
            style={{
              borderEndEndRadius: borderEndEndRadius,
              borderEndStartRadius: borderEndStartRadius,
              borderTopLeftRadius: borderTopLeftRadius,
              borderTopRightRadius: borderTopRightRadius,
            }}

          />
        </div>
      </header>
    </div>
  );
}

export default App;
