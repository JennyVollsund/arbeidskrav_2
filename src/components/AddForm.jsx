import { useState } from "react"

export default function AddForm({ item, setItem, setItems }) {

    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target

        setItem((prev) => ({...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!item?.name && !item?.quantity) {
            setError("Du må fylle ut både vare og antall.")
            return;
        }
        if (!item?.name) {
            setError("Du må skrive inn en vare.")
            return;
        }
        if (!item?.quantity) {
            setError("Du må skrive inn antall.")
            return
        }

        setError("")

        const uniqId = crypto.randomUUID()

        setItems((prev) => ([
            {
                id: uniqId,
                name: item.name,
                quantity: Number(item.quantity),
                purchased: false
            },
            ...prev
        ]))

    
        setItem()
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Legg til vare</h2>

            <label htmlFor="itemname">Vare</label>
            <input name="name" type="text" id="itemname" placeholder="Egg.." onChange={handleChange}></input>
        
            <label htmlFor="itemqty">Antall</label>
            <input name="quantity" type="number" id="itemqty" min="1" onChange={handleChange}></input>

            <button>Legg til vare</button>

            {error && <p style={{ color: "dark gray" }}>{error}</p>}
        </form>
    )
}