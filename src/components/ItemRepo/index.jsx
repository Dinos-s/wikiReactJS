import { ItemContainer } from "./style"

export const ItemRepo = () => {
    return(<ItemContainer>
        <h3>GMR</h3>
        <p>Pokédex</p>
        <a href="#">Ver repositório</a><br />
        <a href="#" className="remover">Remover</a>
        <hr />
    </ItemContainer>)
}