
import React from 'react';
// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => { //Este componente hace la peticion http de los 10 gifs pero hasta el momento solo de Rick y Morty

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>

            <div className='card-grid'>
                    {
                        images.map(img => ( // Cuando se tienen los paréntesis y no las llaves significa que es un return implicito osea todo lo de dentro de los paréntesis es el return
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
                
            </div>
        </>
    )
}
