import React from 'react'

export default function PropCom(props) {
    let {title, date, children} = props;

  return (
    <div>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{children}</p>
    </div>
  )
}
