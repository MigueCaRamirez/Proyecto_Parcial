import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Estado(){
    return(
        <>
        <Link to="/api" >
        <button> Ir a Api</button>
        </Link>
        </>
    ); 
}
