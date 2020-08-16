import React , {useState} from 'react';
import SearchRslt from "./SearchRslt.js";

const Search = () => {
    const [img, setImg] = useState("");
    const InputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return (
        <div className="searchbar">
           <input 
                type="text" 
                placeholder="Search Anything"
                value={img}
                onChange={InputEvent} 
            />
            <SearchRslt name={img}/>
        </div>
    )
}

export default Search;
