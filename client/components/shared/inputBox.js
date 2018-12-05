import React from 'react';
import './inputBox.scss';
import icons from '../../assets/icons.svg';

export default (props) => {
  const {
    type, label, handleChange, value, name, required, icon,
  } = props;
  return (
    <div className={`input-box ${type === 'textarea' ? 'textarea' : ''}`}>
      <svg className="icon">
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
      {(() => {
        if (type === 'textarea') return <textarea value={value} className={value ? 'active' : ''} required={required} name={name} type={type || 'text'} id={name} onChange={handleChange} rows="4" />;
        return <input value={value} className={value ? 'active' : ''} required={required} name={name} type={type || 'text'} id={name} onChange={handleChange} />;
      })()}
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
