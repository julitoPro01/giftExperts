import { useEffect, useState } from "react";
import { getGiftCard } from "../helper/getGiftCard";

export const GiftCard = ({category}) => {

    const [giftCards, setgiftCards] = useState([]);

    const addGiftCards = async () => {
        const list = await getGiftCard(category);
        setgiftCards(list);

    }

    useEffect(() => {
        addGiftCards()
    }, [])


    return (
        <>
        <h2> {category} </h2>
        {giftCards.length===0 && <h4>is loading...</h4> }
            {
                giftCards.map(item => (
                    <div key={item.id} className="gift">
                        <p> {item.title} </p>
                        <img src={item.img} alt={item.img.split(' ')[0]} />

                    </div>
                ))
            }
        </>
    )
}
