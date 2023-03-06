import React from 'react'

const DRecipes = ({
    datePublished,
    category,
    title}) => {
        return (
            <div>
                <p>{datePublished}</p>
                <p>{category}</p>
                <h2>{title}</h2>
            </div>
  )
}

export default DRecipes;