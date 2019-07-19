import React from 'react'
import './Calculator.css'
import Button from './Button'
import Display from './Display'

const initialState = {
    displayValue: '0',
    clearStatus: false,
    operation: null,
    values: [0,0],
    current: 0 //0 ou 1 
}

export default class Calculator extends React.Component {
    state = {...initialState}
    clear(){
        this.setState({...initialState});
    }

    setOperation(operacao){
        switch (operacao){
            case '+':
            case '+':
            case '+':
            case '+':
                console.log(operacao);

        }
    }

    addDigit(digit){
        if(digit == '.' && this.state.displayValue.includes('.')){
            return;
        }

        if(this.state.current == 1){
            this.state.displayValue = '';
        }

        if((this.state.displayValue == '0' || this.state.clearStatus == true) && digit != '.'){
            this.state.displayValue = '';  
        }
        const displayValue = this.state.displayValue.concat(digit);
        console.log(displayValue)
        this.setState({displayValue, clear: false});

        if(digit != '.'){
            const i = this.state.current; // 1 ou 0
            const values = this.state.values;
            values[i] = parseFloat(displayValue);
            this.setState({values});
        }
    }

    render(){
        const setOperation = op => this.setOperation(op);
        const addDigit = digit => this.addDigit(digit);

        return(
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button text='AC' click={() => this.clear()}/>
                <Button text='+/-' click={setOperation}/>
                <Button text='%' click={setOperation}/>
                <Button side text='/' click={setOperation}/>
                <Button text='7' click={addDigit}/>
                <Button text='8' click={addDigit}/>
                <Button text='9' click={addDigit}/>
                <Button side text='*' click={setOperation}/>
                <Button text='4' click={addDigit}/>
                <Button text='5' click={addDigit}/>
                <Button text='6' click={addDigit}/>
                <Button side text='-' click={setOperation}/>
                <Button text='1' click={addDigit}/>
                <Button text='2' click={addDigit}/>
                <Button text='3' click={addDigit}/>
                <Button side text='+' click={setOperation}/>
                <Button double text='0' click={addDigit}/>
                <Button text='.' click={addDigit}/>
                <Button side text='=' click={setOperation}/>
            </div>

        )
    }
}
