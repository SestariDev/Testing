import styles from './Carro.module.css'
import PropTypes from 'prop-types'

function Carro({marca, ano, modelo}){

    return (
        <div >
            <h1 className={styles.teste}>
                Marca: {marca}
            </h1>
            <h1>
                Ano {ano}
            </h1>
            <h1>
                Modelo: {modelo}
            </h1>

        </div>
    )



}

Carro.propTypes = {
    marca: PropTypes.string.isRequired

}

Carro.defaultProps = {
    marca: "Faltou marca"

}



export default Carro 