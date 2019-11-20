import React from "react";
import { directive } from "@babel/types";
import './button.css';


const button =(props)=> {
    let result= null;
    switch(props.func){
        case("add"):
        result=<div className="button" onClick={props.onclick}>In</div>;
        break;
        case("use"):
        result=<div className="button"  onClick={props.onclick}>Out</div>;
        break;
        case("update"):
        result=<div className="button"  onClick={props.onclick}>Update</div>;
        break;
        case("delete"):
        result=<div className="button"  onClick={props.onclick}>Delete</div>;
        break;
        case("submit"):
        result=<button onClick={props.onclick} type="submit" className="button-submit">Submit</button>;
    }
        
    return result;

};


export default button;