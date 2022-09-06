import './PokeMoveCard.css'

const PokeMoveCard = (props) => {
const { id, move, type } = props
    return (
        <li className='poke-move-card'>
            <h3>Move {id}</h3>
            <h4 style={{padding:10}}>{move.toUpperCase()}</h4>
            <h5>Type: {type}</h5></li>
    )
}

export default PokeMoveCard