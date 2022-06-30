import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    

    const onInputChange = ({target}) => {        
        setInputValue(target.value);        
    }
    
    const onSubmit = ( event ) => {        
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories( categories => [ inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
// el onSubmit reacciona con mi enter, y envia el texto del input value.
  return (
    <form onSubmit={  onSubmit } aria-label="form">   
        <input
            type="text"
            placeholder="Buscar GIFs"
            value={inputValue}
            onChange={ onInputChange } //actualiza a medida que escribo en el textbox
        />
    </form>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}