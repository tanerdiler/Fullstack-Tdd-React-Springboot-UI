import React from 'react';

class TransactionList extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <div data-testid="transaction-list">
                <table>
                    <tbody>
                    {
                        list && list.map(r=><tr key={`transaction-${r.id}-row`} data-testid={`transaction-${r.id}-row`}>
                                        <td key={`transaction-${r.id}-agent`} data-testid={`transaction-${r.id}-agent`}>{r.agent.fullname}</td>
                                        <td key={`transaction-${r.id}-code`} data-testid={`transaction-${r.id}-code`}>{r.code}</td>
                                        <td key={`transaction-${r.id}-productname`} data-testid={`transaction-${r.id}-productname`}>{r.productName}</td>
                                        <td key={`transaction-${r.id}-price`} data-testid={`transaction-${r.id}-price`}>{r.price.value}</td>
                                        <td key={`transaction-${r.id}-state`} data-testid={`transaction-${r.id}-state`}>{r.state}</td>
                                    </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TransactionList;

