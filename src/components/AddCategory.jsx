import { useState } from 'react';
import './style.css';

export const AddCategory = ({onNewValueGift}) => {

    const [value, setValue] = useState('');

    const handleInputSearch=(e)=>{
        const target = e.target;
        setValue(target.value);
    }

    const handleFormAdd=(e)=>{
        e.preventDefault();

        if(value.trim().length<=1) return;

        onNewValueGift(value.trim());

        setValue('');
    }

  return (
    <>

        <form onSubmit={handleFormAdd} >

        <input type="text" placeholder='search new card' 
        name='inputcard' value={value} onChange={handleInputSearch} />
        <input type="submit" value='search' name='search'  />
        
        </form>
    </>
  )
}
