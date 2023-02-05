import { useState } from 'react';
import PropTypes from 'prop-types'

const FormDeseo = ({ onNewDeseo }) => {
  const [newDeseoText, setNewDeseoText] = useState('');
  return (
    <fieldset className='deseo-input'>
      <legend className='deseo-input__label'>Nuevo deseo</legend>
      <input 
        className='deseo-input__field' type="text" 
        placeholder='Introduce tu deseo' 
        value={newDeseoText} 
        onChange={e => setNewDeseoText(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter' && newDeseoText.length) {
            onNewDeseo({texto: newDeseoText, realizado: false});
            setNewDeseoText('');
          }
        }} />
    </fieldset>
  );
}

FormDeseo.propTypes = {
  onNewDeseo: PropTypes.func,
}

FormDeseo.defaultProps = {
  onNewDeseo: () => {},
}

export default FormDeseo;