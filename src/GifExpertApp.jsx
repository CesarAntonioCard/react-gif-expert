import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GitExpertApp = () =>{

    const [ categories, setCategories ] = useState( [ 'One Piece' ] );

    const onAddCategory = ( newCategory) =>{
        if ( categories.includes( newCategory ) ) {
            return;
        }
         setCategories( [ newCategory,...categories ] );
        // setCategories( cat => [ ...cat, 'Valorant'] );
    }

    return (
        <>
        {/* Titulo */}
        <h1>GitExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={setCategories}
            onNewCategory = { (value) => onAddCategory(value)}
         />

        {/* Listado de Gif */}

        { 
            categories.map( category => (

                    // <div key={ category }>
                    //     <h3>{ category }</h3>
                    //     <li>{ category }</li> 
                    // </div>  
                    <GifGrid key={ category } category= { category }/>                 
                )
            ) 
        }

            {/* Gif Item */}
        </>
    )
}
