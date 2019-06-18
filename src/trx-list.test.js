import React from 'react';
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react';
import TransactionList from './trx-list';

afterEach(cleanup)

it('lists transactions', async () => {
    const trxList = [
        {"id":1,"agent":{"email":"john_doe@gmail.com","fullname":"john doe"},"code":"TR123","state":"APPROVED","productName":"USB Disc","price":{"value":100.0}},
        {"id":2,"agent":{"email":"john_doe@gmail.com","fullname":"john doe"},"code":"TR124","state":"UNAPPROVED","productName":"Flash Disc","price":{"value":200.0}}
    ];
    const { getByTestId, getByText } = render(<TransactionList list={trxList}/>);
    const trx1Row = await waitForElement(()=>getByTestId('transaction-1-row'));
    expect(getByTestId('transaction-1-agent').textContent).toEqual('john doe');
    expect(getByTestId('transaction-1-code').textContent).toEqual('TR123');
    expect(getByTestId('transaction-1-productname').textContent).toEqual('USB Disc');
    expect(getByTestId('transaction-1-price').textContent).toEqual('100');
    expect(getByTestId('transaction-1-state').textContent).toEqual('APPROVED');

    const trx2Row = await waitForElement(()=>getByTestId('transaction-2-row'));
    expect(getByTestId('transaction-2-agent').textContent).toEqual('john doe');
    expect(getByTestId('transaction-2-code').textContent).toEqual('TR124');
    expect(getByTestId('transaction-2-productname').textContent).toEqual('Flash Disc');
    expect(getByTestId('transaction-2-price').textContent).toEqual('200');
    expect(getByTestId('transaction-2-state').textContent).toEqual('UNAPPROVED');
})



