import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const loewr=word.toLowerCase();
        return loewr.charAt(0).toUpperCase() + loewr.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg} 
            
        </div>
    )
}

export default Alert
