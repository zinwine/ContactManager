import React from 'react'
import PropType from 'prop-types'
import classnames from 'classnames'

const InputGrop = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error

}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} onChange={onChange} value={value} name={name} className={classnames("form-control form-control-lg", {'is-invalid': error})} placeholder={placeholder} />
            {error && <div className="invalid-feedback">{error}</div>}
            <br/>                
        </div>
    )
}

InputGrop.prototype = {
    label: PropType.string.isRequired,
    name: PropType.string.isRequired,
    placeholder: PropType.string.isRequired,
    value: PropType.string.isRequired,
    type: PropType.string.isRequired,
    error: PropType.string,
    onChange: PropType.func.isRequired,
}

export default InputGrop;