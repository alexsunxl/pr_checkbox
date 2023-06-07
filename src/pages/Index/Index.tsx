import CheckboxTable from '@component/CheckboxTable'
import { useReducer, useState } from 'react';

enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
}
interface CountAction {
    type: CountActionKind;
    // payload: number;
}
interface CountState {
    value: number;
}
function counterReducer(state: CountState, action: CountAction) {
    switch (action.type) {
        case CountActionKind.INCREASE:
            return {
                ...state,
                value: state.value + 1,
            };
        case CountActionKind.DECREASE:
            if (state.value == 1) {
                return state
            }

            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
}

const Index = () => {
    const checks = [
        'aaa',
        'bbb',
        'ccc',
        'ddd',
        'fff',
        'ggg',
        'hhh',
        'iii',
    ].map(item => ({ name: item, checked: false }))
    const [column, dispatch] = useReducer(counterReducer, { value: 2 });
    const add = () => dispatch({ type: CountActionKind.INCREASE })
    const reduce = () => dispatch({ type: CountActionKind.DECREASE })

    return (
        <>
            <div className='flex-center min-h-[200px]'>
                <CheckboxTable data={checks} cols={column.value} onChange={(checkResult) => {
                    console.log('checkResult', checkResult)
                }} />
            </div>
            <div className='flex-center'>
                <button onClick={reduce}>-</button>
                Count: {column.value}
                <button onClick={add}>+</button>
            </div>
        </>

    );
};

export default Index;
