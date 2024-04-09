// es-lint-disable
import React from 'react';

// import reactLogo from './assets/react.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: 0
    }
    this.numbers = [
      {value: 1,},
      {value: 2,},
      {value: 3,},
      {value: 4,},
      {value: 5,},
      {value: 6,},
      {value: 7,},
      {value: 8,},
      {value: 9,},
      {value: 0,},
    ]
    this.operations = [
      {value: '='},
      {value: '+'},
      {value: '-'},
      {value: '/'},
      {value: '*'},
      {value: 'C'},
    ]
    this.result = React.createRef();
  }

  inputNumber(val) {
    let currentValue = val
    let result = this.result.current

    this.setState({
      output: currentValue
    })

    result.value += currentValue
  }
  inputOperation(val) {
    if(val === '=') {
      this.result.value = eval(this.result.value)
    } else {
      let currentValue = val
    let result = this.result.current

    this.setState({
      output: currentValue
    })

    result.value += currentValue
    }
  } 

  render() {
    return(
      <div className='main'>
        <input ref={this.result} type="text" defaultValue={this.state.output}/>
          {
            this.numbers.map((button, index) => 
              <button onClick={()=> this.inputNumber(button.value)} key={index}>
                {button.value}
              </button>
            )
          }

          {
            this.operations.map((button, index) => 
              <button onClick={()=> this.inputOperation(button.value)} key={index}>
                {button.value}
              </button>
            )
          }
      </div>
    )
  }
}

export default App