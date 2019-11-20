import React from 'react';
import Add from '../Add/Add';
import Use from '../Use/use';
import Delete from '../Delete/Delete';
import Update from '../Update/Update';
import './Info.css';



function Info(props) {
    let block;

    switch(props.stateController){
        case("add"):
        return block=<Add/>;
        break;
        case("use"):
        return block=<Use/>;
        break;
        case("delete"):
        return block= <Delete/>;
        break;
        case("update"):
        return block= <Update/>;
        break;
    }

    if(props.stateController===" "){
        return null;
    }
    else{
        return {block};
    }
        

}

export default Info;
