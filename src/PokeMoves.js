import { moves } from './data'
import PokeMoveCard from './PokeMoveCard'

const PokeMoves = () => {
    const newArray = [1, 2, 3].map((item => {
        <div key = {`item+${item.id}`}>thing</div>
    }))
    
    return(<div> 
        <h1>PokeMoves</h1>
        <ul>
        {moves.map((item) => (
            <PokeMoveCard key = {item.id} {...item}/>
        ))}            
        </ul>
        {newArray}
    </div>)
}



export default PokeMoves