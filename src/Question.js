import React, { useState } from 'react'
import WithQuestion from './HOC/WithQuestion'

function Question({ id, info, title, toggleShoeInfoHandler, showInfo }) {


    return (
        <article className='question' onClick={toggleShoeInfoHandler}>
            <header className='d-flex justify-content-between'>
                <h4 className='mx-5'>{title}</h4>
                <button className='btn btn-success'>
                    {showInfo ? (<p>+</p>) : (<p>-</p>)}
                </button>
            </header>
            {showInfo && (<p>{info}</p>)}
        </article>
    )
}

export default WithQuestion(Question)
