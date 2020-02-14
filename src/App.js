import React from 'react';
import Btn from './component/button';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{
        nama:'Walid',
        warna :'blue'
      },
      {
        nama:'mustofa',
        warna:'gold'
      },
      {
        nama:'Chandra',
        warna:'red'
      },
      {
        nama:'bibit',
        warna:'brown'
      },
      {
        nama:'ardhi',
        warna:'green'
      },
      {
        nama:'waizal',
        warna:'lightblue'
      }]
    }
  }

  render(){  
    return (
    <div>
        {
          this.state.data.map((param) => {
          return (
            <Btn warna = {param.warna} > {param.nama} </Btn>
            )
          })
        }
    </div>
    )
  }
}

export default App;