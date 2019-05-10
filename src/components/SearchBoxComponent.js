import React from 'react';

const SearchBoxComponent = ({onSearchBarChange}) => {
    return (
        <div>
            <input
                className={'pa3 ba b--green bg-lightest-blue'}
                type={'search'}
                placeholder={'Search Robots!!!'}
                onChange={onSearchBarChange}
            />
        </div>
    )
};

export default SearchBoxComponent;