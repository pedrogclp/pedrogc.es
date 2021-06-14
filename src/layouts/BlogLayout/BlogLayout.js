import React from "react"
import "./BlogLayout.scss"

export default function BlogLayout(props) {
    const { children } = props

    return (
        <div>
            <h1>Hola</h1>
            {children}
        </div>
    )
}
