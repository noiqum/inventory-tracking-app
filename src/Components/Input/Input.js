import React from 'react'

function Input(props) {

    let InputResult= null;

    switch(props.inputtype){
        case("textarea"):
         InputResult = <textarea {...props} ></textarea>;
        break;
        case("input"):
         InputResult= <input {...props}></input>;
        break;
    }
    
    return (
        <div className="inputElement">
            <label htmlFor={props.label}>{props.label}</label>
            {InputResult}
        </div>
    );




}

export default Input;