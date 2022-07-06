import React from 'react'
import PropTypes from 'prop-types'
import ContentBlock from '../../UI/ContentBlock/ContentBlock'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Label from '../../UI/Label/Label'

const Search = ({searchValue, setSearchValue}) => {
   return (
      <ContentBlock>
         <>
            <Label
               htmlFor='search'
            >
               Знайдіть допис
            </Label>
            <Input
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               size='medium'
               type='text'
               id='search'
               placeholder='Оптимізація графіки'
            />
            <Button
               size='medium'
            >
               Пошук
            </Button>
         </>
      </ContentBlock>
   )
}

Search.propTypes = {
   searchValue: PropTypes.string,
   setSearchValue: PropTypes.func,
}

export default Search