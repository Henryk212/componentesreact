import React from 'react'
import { Box } from '../UI'
import { extratoLista } from '../../info'

export default function Extrato() {
  return (
    <Box> 
   {
    extratoLista.updates.map(({id,type,value, from,date}) => {
        return(
        <div key={id}>
            <div>{type}</div>
            <div>{from}</div>

        </div>
    )
    })

   };


    </Box>
  )
}
