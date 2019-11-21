// IMPORTS
// react 
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// helpers 
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Counter = props => {
    // props
    const {missionTracker, setMissionTracker, selectedMission} = props;
    console.log('[input counter props]', props);
    console.log('[missionTracker]', missionTracker)
    
    // state hooks
    const [counter, setCounter] = useState({
        value: 1
    });

    // handlers
    const increment = e => {
        setCounter({ ...counter, value: counter.value + 1 });
        if (missionTracker.length < 1) {
            setMissionTracker([{ question_id: selectedMission, answer: counter.value + 1 }])
        } else {
            missionTracker.map(mission => {
                if (mission.question_id === selectedMission) {
                    console.log('theres a match')
                    mission.answer = counter.value + 1;
                } else {
                    setMissionTracker([...missionTracker, {question_id: selectedMission, answer: counter.value + 1}])
                }
            })
        }
    };

    const decrement = e => {
        setCounter({ ...counter, value: counter.value - 1 });
    };
    
    return (
        <CounterWrapper>
            <button onClick={decrement}>-</button>
            <Display>{counter.value}</Display>
            <button onClick={increment}>+</button>
        </CounterWrapper>
    );
};

// STYLED COMPONENTS
const CounterWrapper = styled.div`
    width: 100%;
    height: 5rem;
    margin: 2rem;
    margin-bottom: 4rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

        button {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            border: none;
            background-color: rgba(0, 0, 0, 0.5);
            color: #FFF;
            font-size: 2rem;
            margin: 0 2rem;
            margin-top: auto;
            box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1); 
        }
`

const Display = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: none;
        background-color: rgba(0, 0, 0, 0.5);
        color: #FFF;
        font-size: 2rem;
        box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
`

// EXPORT
export default Counter;