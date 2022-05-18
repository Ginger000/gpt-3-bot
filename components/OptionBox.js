import React, { useState, useContext } from 'react';
import ChatContext from '../context/ChatContext';
function OptionBox() {
    const {engine, setEngine} = useContext(ChatContext)
    const handleChange = (e) => {
        setEngine(e.target.value);
    };

    return (
        <div>
            <form className='text-white'>
                <h5>Engine Options</h5>
                <div>
                    <input
                        className='hidden'
                        type="radio"
                        id='radio1'
                        value="text-davinci-002"
                        checked={engine === 'text-davinci-002'}
                        onChange={handleChange}
                    /> 
                    <label className={engine === 'text-davinci-002' ? "bg-zinc-100/30 font-medium text-xl" : ''} htmlFor="radio1">text-davinci-002</label>
                </div>
                <div>
                    <input
                    className='hidden'
                        type="radio"
                        id='radio2'
                        value="text-curie-001"
                        checked={engine === 'text-curie-001'}
                        onChange={handleChange}
                    /> 
                    <label className={engine === 'text-curie-001' ? "bg-zinc-100/30 font-medium text-xl" : ''}  htmlFor="radio2">text-curie-001</label>
                </div>
                <div>
                    <input
                    className='hidden'
                        type="radio"
                        id='radio3'
                        value="text-babbage-001"
                        checked={engine === 'text-babbage-001'}
                        onChange={handleChange}
                    /> 
                    <label className={engine === 'text-babbage-001' ? "bg-zinc-100/30 font-medium text-xl" : ''}  htmlFor="radio3">text-babbage-001</label>
                </div>
                <div>
                    <input
                    className='hidden'
                        type="radio"
                        id='radio4'
                        value="text-ada-001"
                        checked={engine === 'text-ada-001'}
                        onChange={handleChange}
                    /> 
                    <label className={engine === 'text-ada-001' ? "bg-zinc-100/30 font-medium text-xl" : ''}  htmlFor="radio4">text-ada-001</label>
                    
                </div>
            </form>
        </div>
    );
}

export default OptionBox;
