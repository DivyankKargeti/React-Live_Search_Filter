import React from 'react';

const SearchRslt = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.name}` ;
    return (
        <>
            <div>
                <img src={img} alt="search result"/>
            </div>
        </>
    )
}

export default SearchRslt;
