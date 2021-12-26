import React, {Component} from 'react';
import './box.css';
import { Helper } from './Helper';

export default class Box extends Component{
    static defaultProps = {
        allColor : ["violet", "magenta", "purple", "pink", "tomato", "Chocolate", "Cyan", "DarkRed", "ForestGreen", "DodgerBlue"]
    }
    constructor(props){
        super(props);
        this.state = {
            color: Helper(this.props.allColor)
        }
        this.handleClick = this.handleClick.bind(this);
    }
    Change(){
        let newColor;
        do{
             newColor = Helper(this.props.allColor);
        }while( newColor === this.state.Color);
        this.setState({color: newColor});
    }
    handleClick(e){
        this.Change();
    }
    render(){
        return (
            <div className="Box" onClick={this.handleClick} style={{backgroundColor:this.state.color}}></div>
        )
    }
}