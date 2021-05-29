import './App.css';
import Counter from './components/Counter'
import OnClick from './components/OnClick'
import Helper from './components/Helper'
import ThemeContext from './components/Context/ThemeContex'
import React, { Component } from 'react'
class App extends Component {

  state = {
    theme:'bright',
    // switchTheme: ()=>{
    //   this.setState({theme: this.state.theme==='bright'?'dark':'bright'});
    // }
  }
  switchTheme = () => {
    this.setState({theme: this.state.theme==='bright'?'dark':'bright'});
  }
  render(){
     const {theme} = this.state;
      return (
        <div className="App">
            <Counter>
              {(count,incrementCount)=>(
                <OnClick
                    count={count}
                    incrementCount={incrementCount}
                /> )}
            </Counter>
            <ThemeContext.Provider value={{theme,switchTheme:this.switchTheme}}>
                <Helper />
            </ThemeContext.Provider>
        </div>
      );
  }
}

export default App;
