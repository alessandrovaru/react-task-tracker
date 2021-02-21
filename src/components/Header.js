// Importación de PropTypes para requerir params(de RoR) desde App.js o donde se encuentre el componente
import PropTypes from 'prop-types'


import Button from "./Button";

// Función que crea al componente mediante un Arrow Function(simpleExtension: rafce ), recibe title
const Header = ({ title }) => {

    // Declaración de constantes para los Props(params)onClick
    const onClick = () => {
        console.log('hola');
    }

    // Componente
    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text = 'Add' onClick={onClick} />
        </header>
    )
}

// Default Params
Header.defaultProps = {
    title: 'Page-title',
}

// SE NECESITA IMPORTAR "import PropTypes from 'prop-types'"
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
