import React from 'react'
import ContentBlock from '../../UI/ContentBlock/ContentBlock'
import detective from '../../../assets/icon/detective.svg'
import Text from '../../UI/Text/Text'
import Title from '../../UI/Title/Title'
import Image from '../../UI/Image/Image'

const PopularAuthors = () => {
   return (
      <ContentBlock>
         <>
            <Title>Популярні автори</Title>
            <Image
               size='resize40'
               src={detective}
               alt='Detective'
            />
            <Text
               type='center'
            >
               Зараз популярних авторів немає
            </Text>
            <Text
               type='darken text--center'
            >
               Станьте першим популярним автором
            </Text>
         </>
      </ContentBlock>
   )
}

export default PopularAuthors