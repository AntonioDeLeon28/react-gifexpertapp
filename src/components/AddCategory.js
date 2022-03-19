import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('Agrega una categoria');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Extrae lo que marcamos en el teclado cuando el cursor esta en la caja de texto y lo hace visual en la caja de texto (lo concatena en la caja de texto
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita el refresh del navegador que es lo que haria por default el "form" al detectar un enter
        if ( inputValue.trim().length > 2 ) { // Validación de que la entrada debe ser mayor a 2 caracteres para que la agregue a la lista ordenada
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue(''); // Va a borrar lo de la caja de texto cada que se da enter
        }
    }

    const handleClick = () => { // Al dar clic para escribir se borra la instrucción de lo que se debe ingresar a la caja de texto
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInputChange } // Cada que suceda un cambio en la caja de texto "input" se va a dispara la función handleInputChange
                onClick={ handleClick }
            />
        </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired 
}