import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App extends Component {
  state = {
    information : [
      {
        id:0,
        name:'홍길동',
        phone: '010-0000-0000'
      },
      {
        id:1,
        name:'김건부',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) =>{
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
