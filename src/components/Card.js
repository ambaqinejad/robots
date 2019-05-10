import React from 'react'

const Card = ({id, name, email}) => {
    return(
        <div className={"bg-light-green grow shadow-5 tc dib ma3 pa3 br3"}>
            <img src={`https://robohash.org/${id}?size=200x200`} alt={'Robot'}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;