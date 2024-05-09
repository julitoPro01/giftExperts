import { useEffect, useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GiftCard } from "./components/GiftCard";
import { GiftMenuFilter } from "./components/GiftMenu";

export const GiftCardApp = () => {

  const [giftCards, setGiftCards] = useState(['one puch', 'superman']);
 const [giftFilter, setgiftFilter] = useState([...giftCards]);

  const addNewGiftCar = (value) => {

    const isExist = giftCards.find(item => item === value);
    if (isExist) return;

    setGiftCards(items => [value, ...items]);

  };

  const allFilter =()=>{
    setgiftFilter(giftCards);
  }

  
  const renderFilterGift=(values,value)=>{
    setgiftFilter([...values]);
    if(!value) return;
    setGiftCards((gift=>gift.filter(item=>item!=value )));
  }

  useEffect(() => {
    
    allFilter()

  }, [giftCards]);
  


  return (
    <>
      <h1 style={{fontWeight:'bolder',color:'red'}} >Gif Giphy</h1>
      {/* AGREGAR CARD */}
      < AddCategory onNewValueGift={addNewGiftCar} />
      {/* NAV */}

     <GiftMenuFilter onFilterGift={{giftCards,renderFilterGift}} />

      {/* RENDER CARD */}
      <div className="content-gift" >

        {
          giftFilter.map(item => (

            <GiftCard key={item} category={item} />
          ))
        }

      </div>
    </>

  )
}
