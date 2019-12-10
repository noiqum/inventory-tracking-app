import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Layout from './Components/Layout/Layout';
import './Components/Layout/layout.css';
import Navbar from './Components/Navbar/Navbar';
import Info from './Containers/Info/Info';



class App extends React.Component{
  constructor(props){
    super(props);
  };
  state={
    btnClicked:" ",
    logst:"log out",
    
  }

    clicked = (func)=>{
    switch(func){
      case("add"):
      this.setState({btnClicked:"add"});
      console.log(this.state.btnClicked);
      break;
      case("use"):
      return this.setState({btnClicked:"use"});
      case("update"):
      return this.setState({btnClicked:"update"});
      case("delete"):
      return this.setState({btnClicked:"delete"});
    }
  
  };



  render(){
    return (
      <Layout>
        <Navbar user="user" logst="log out"/>
        <div className="buttons">
        <Button onclick={this.clicked.bind(this,"add")} func="add"/>
        <Button onclick={this.clicked.bind(this,"use")} func="use"/>
        <Button onclick={this.clicked.bind(this,"update")} func="update"/>
        <Button onclick={this.clicked.bind(this,"delete")} func="delete"/>
        </div>
        <div className="info"><Info stateController={this.state.btnClicked}/></div>
        <div className="footer">footer</div>
      </Layout>
    );
  };
}



export default App;
