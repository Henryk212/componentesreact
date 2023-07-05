import React from 'react'
import { Box, Btn } from '../UI'
import { extratoLista } from '../../info'
import Items from '../Items';

export default function Extrato() {
  return (
    <Box> 
   {
    extratoLista.updates.map(({id,type,value, from,date}) => {
        return(
          <Items key={id} type={type} from={from} value={value} date={date} ></Items>

        
    );
    })}

    <Btn>Ver mais</Btn>
    </Box>
  )
}
