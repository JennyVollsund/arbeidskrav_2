export default function ShoppingItem({ item, setItems }) {

    const togglePurchased = () => {
        setItems((prev) =>
            prev.map((i) =>
                i.id === item.id ? { ...i, purchased: !i.purchased } : i
            )
        );
    };

    const changeQuantity = (e) => {
        const value = Number(e.target.value)
        if (value <= 0) return

        setItems((prev) =>
            prev.map((i) =>
                i.id === item.id ? { ...i, quantity: value } : i
            )
        );
    };

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={!!item.purchased}
                    onChange={togglePurchased}
                ></input>
                {item.name}
            </label>

            <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={changeQuantity}
            ></input>
        </li>
    );
}