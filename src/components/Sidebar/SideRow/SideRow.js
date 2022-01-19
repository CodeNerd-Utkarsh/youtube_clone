import React from 'react'
import './SideRow.css'
function SideRow({selected,Icon,title}) {
    return (
        <div className={`sideRow ${selected && "selected" }`}>
            <Icon className="sideRow__icon"  />
            <h2 className="sideRow__title"  >{title}</h2>
        </div>
    )
}

export default SideRow
