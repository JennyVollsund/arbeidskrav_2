import ShoppingItem from './ShoppingItem'

export default function ShoppingList({ items, setItems }) {
    return (
        <section>
            <h2>Handleliste</h2>

            <ul>
                {items.map((item) => (
                    <ShoppingItem key={item.id} item={item} setItems={setItems}></ShoppingItem>
                ))}
            </ul>
        </section>
    )
}