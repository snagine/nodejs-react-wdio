// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';

function App() {
  const [textValue, setTextValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <div className="App">
      <h1>Simple React UI for Testing</h1>

      {/* Textbox */}
      <label>
        Enter Text:
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Type here"
          data-testid="textbox"
        />
      </label>

      {/* Radio Button */}
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="option1"
            checked={radioValue === 'option1'}
            onChange={(e) => setRadioValue(e.target.value)}
            data-testid="radio-option1"
          />
          Option 1
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="option2"
            checked={radioValue === 'option2'}
            onChange={(e) => setRadioValue(e.target.value)}
            data-testid="radio-option2"
          />
          Option 2
        </label>
      </div>

      {/* Checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={checkboxValue}
            onChange={(e) => setCheckboxValue(e.target.checked)}
            data-testid="checkbox"
          />
          I agree to the terms and conditions
        </label>
      </div>

      {/* Link */}
      <a href="https://example.com" data-testid="link">
        Visit Example
      </a>

      {/* Image */}
      <div>
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          data-testid="image"
        />
      </div>

      {/* Button */}
      <div>
        <button data-testid="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default App;
