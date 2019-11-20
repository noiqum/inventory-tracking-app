import React from 'react';
import Category from '../../Components/Input/Category';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';



class Add extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return (
        <div>
        
        <Category value={["kitchen","office","maintance"]}></Category> 
        <Input label="barcode"inputtype="textarea" name="barcode" placeholder="barcode"></Input>
        <Input label="item name"inputtype="input" type="text" name="name" placeholder="item name"></Input>
        <Input label="amount"inputtype="input" type="number" name="amount" placeholder="amount"></Input>
        <Input label="price"inputtype="input" type="number" name="price" placeholder="price"></Input>
        <Button func="submit"></Button>
        </div>
         );
    }
}

export default Add;