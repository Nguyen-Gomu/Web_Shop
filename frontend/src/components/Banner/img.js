import React from 'react'
import '../Banner/style.scss'

function ImgComp({src}){
    let imgStyle = {
        width:100+"%",
        height:"auto",
    }

    return <img src={src} alt="slid-img" style={imgStyle}></img>
}

export default ImgComp
