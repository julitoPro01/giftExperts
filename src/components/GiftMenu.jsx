import { useState } from "react"

export const GiftMenuFilter = ({onFilterGift}) => {

    const {giftCards,renderFilterGift} = onFilterGift;

    const oneFilterGift =(e,value)=>{
      const target = e.target;
      if(target.matches('span')){
      renderFilterGift(giftCards.filter(item=>item != value),value);
      return
      }
      renderFilterGift([value]);
    }

    const allFilter=()=>{
      renderFilterGift(giftCards)
    }

  return (
    <nav className="menu">
    <ul>
      <li> <a href="#/" onClick={allFilter} >All</a> </li>
      <li className="favorite"> <span> History </span>
        <ol>
            {
                giftCards.map(item=>(
                    <li key={item} onClick={(e)=>oneFilterGift(e,item)}
                    style={{paddingRight:"10px"}}>
                         <span className="gift_delete" >X</span> 
                    {item} </li>
                ))
            }
        </ol>
      </li>
    </ul>
  </nav>
  )
}
