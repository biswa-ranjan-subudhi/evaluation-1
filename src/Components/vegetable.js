import React from 'react';
import './vegetable.css'

function vegetable(props) {
    const [count1, setCount1] = React.useState(props.tomatoes);
    const [count2,setCount2 ] =  React.useState(props.potatoes);
    const [count3, setCount3] = React.useState(props.carrots);
    const [count4, setCount4] = React.useState(props.onions);
    

    const changeCount1=(val) =>{
        setCount1(count1 + val);
    }
    const changeCount2=(val) =>{
        setCount2(count2 + val);
    }
    const changeCount3=(val) =>{
        setCount3(count3 + val);
    }
    const changeCount4=(val) =>{
        setCount4(count4 + val);
    }
    
    return (
        <>
            <div>
                <h1>Tomatoes: {count1}kgs</h1>
            </div>
            <div className='button'>
            <button onClick={()=>changeCount1(+1)}>+</button>
            <button onClick={() => changeCount1(-1)}>-</button>
        </div>
            <div>
                <h1>Potatoes: {count2}kgs</h1>
            </div>
            <div className='button'>
            <button onClick={()=>changeCount2(+1)}>+</button>
            <button onClick={() => changeCount2(-1)}>-</button>
            </div>
            <div>
                <h1>Carrots: {count3}kgs</h1>
                </div>
                <div className='button'>
            <button onClick={()=>changeCount3(+1)}>+</button>
            <button onClick={() => changeCount3(-1)}>-</button>
</div>
            <div>
                <h1>Onions: {count4}kgs</h1>
                    </div>
                    <div className='button'>
            <button onClick={()=>changeCount4(+1)}>+</button>
                    <button onClick={() => changeCount4(-1)}>-</button>
                    </div>
</>

        
    )
 }

export default vegetable;