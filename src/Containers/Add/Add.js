import React from 'react';
import Category from '../../Components/Input/Category';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';



class Add extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Category:"",
            barcode:"",
            name:"",
            amount:0,
            price:0
        }
        this.onchange=this.onchange.bind(this);
    };
  
    onchange=(element,event)=>{
        switch(element){
            case("category"):
            this.setState({Category:event.target.value},()=>{
                console.log(this.state.Category);
            });
            
            break;
            case("barcode"):
            this.setState( {barcode:event.target.value}, ()=> {
                return console.log(this.state.barcode);
            } );
            break;
            case("name"):
            this.setState({name:event.target.value},()=> {
                return console.log(this.state.name);
            });
            break;
            case("amount"):
            this.setState({amount:event.target.value},()=>{
                return  console.log(this.state.amount);
            });
            break;
            case("price"):
            this.setState({price:event.target.value},()=>{
                return console.log(this.state.price);
            });
            break;
        }
    } 
 
       
   

    

    render(){
        return (
        <div>
        
        <Category  onChange={this.onchange.bind(this,"category")}value={["kitchen","office","maintance"]}></Category> 
        <Input onChange={this.onchange.bind(this,"barcode")} label="barcode"inputtype="textarea" name="barcode" placeholder="barcode"></Input>
        <Input onChange={this.onchange.bind(this,"name")}label="item name"inputtype="input" type="text" name="name" placeholder="item name"></Input>
        <Input onChange={this.onchange.bind(this,"amount")}label="amount"inputtype="input" type="number" name="amount" placeholder="amount"></Input>
        <Input onChange={this.onchange.bind(this,"price")}label="price"inputtype="input" type="number" name="price" placeholder="price"></Input>
        <Button func="submit"></Button>
        </div>
         );
    }
}

export default Add;