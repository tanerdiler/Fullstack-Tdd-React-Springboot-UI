import React from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionForm from "./trx-form";

class App extends React.Component {
    state = {
        screen: 'form',
    }

    clickNewButton = () => {
        this.setState({screen:'form'});
    }

    clickListButton = () => {
        this.setState({screen:'list'});
    }

    render() {
        return (
            <div className="App">
                <button data-testid='new-button' onClick={this.clickNewButton}>Transaction  New</button>
                <button data-testid='list-button' onClick={this.clickListButton}>Transaction List</button>
                {this.state.screen === 'form' && <TransactionForm/>}
                {this.state.screen === 'list' && <div data-testid="transaction-list"></div>}
            </div>
        );
    }
}

export default App;
