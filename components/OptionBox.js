import React, { useState, useContext } from 'react';
import ChatContext from '../context/ChatContext';
function OptionBox() {
    const {engine, setEngine} = useContext(ChatContext)
    const handleChange = (e) => {
        setEngine(e.target.value);
    };

    return (
        <div className='bg-zinc-50/50 p-6'>
            <form className='text-white'>
                <h5 className='text-xl font-semibold mb-4'>Engine Options</h5>
                <div>
                    <input
                        className='hidden'
                        type="radio"
                        id='radio1'
                        value="text-davinci-002"
                        checked={engine === 'text-davinci-002'}
                        onChange={handleChange}
                    /> 
                    <label className={engine === 'text-davinci-002' ? "drop-shadow-md font-medium hover:cursor-pointer " : ''} htmlFor="radio1">text-davinci-002</label>
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
                    <label className={engine === 'text-curie-001' ? "drop-shadow-md font-medium hover:cursor-pointer " : ''}  htmlFor="radio2">text-curie-001</label>
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
                    <label className={engine === 'text-babbage-001' ? "drop-shadow-md font-medium hover:cursor-pointer " : ''}  htmlFor="radio3">text-babbage-001</label>
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
                    <label className={engine === 'text-ada-001' ? "drop-shadow-md font-medium hover:cursor-pointer " : ''}  htmlFor="radio4">text-ada-001</label>
                    
                </div>
            </form>
        </div>
    );
}

export default OptionBox;
