import React, { useState } from 'react'

export default function WithQuestion(OriginalComponent) {
    const NewComponent = (props) => {
        const [showInfo, setShowInfo] = useState(false)

        const toggleShoeInfoHandler = () => {
            setShowInfo(prevShowInfo => !prevShowInfo)
        }

        return <OriginalComponent showInfo={showInfo} toggleShoeInfoHandler={toggleShoeInfoHandler} {...props}/>
    }

    return NewComponent
}
