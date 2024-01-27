import React from 'react'

export default function NavBar() {
  return (
    <div className='nav-bar'>
        <select className='filter'>
            <option disabled> Filtrar por género </option>
            <option> Horror </option>
            <option> Misterio </option>
            <option> Crimen </option>
            <option> Suspenso </option>
        </select>
        <select className='sort'>
            <option disabled> Ordenar por puntuación </option>
            <option> Ascendente </option>
            <option> Descendente </option>
        </select>
    </div>
  )
}
