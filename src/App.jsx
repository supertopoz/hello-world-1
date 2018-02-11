import React from 'react';
//import './styles.css';


class App extends React.Component{
  constructor(props) {
  	super(props);
  this.state = {
    gifts : []
  }  
  this.addGift = this.addGift.bind(this)
  }

  addGift(){
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({id: max_id + 1});

    this.setState({ gifts })
    console.log(...this.state.gifts)
  }
 
  render(){
  	return(
  		<div>
  		<h1>Hello World 1</h1>
      <div className='btn-add' onClick={this.addGift}>Add Gift</div>
  		</div>
  	)
  }
}

export default App;




  