import React, { Component } from 'react'

export default function Title({name, title}) {
    return (
        <div className="textTitle">
            <h1>
                {name}
                {title}
            </h1>
        </div>
    )
}

