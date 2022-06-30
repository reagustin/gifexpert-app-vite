import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";




describe('Pruebas en gifExpertAoo', () => { 
    
    test('No tiene que agregar dos veces la misma categoria', () => { 
        
        render( <GifExpertApp/> );
        screen.debug();


     })
 })