import { GifItem } from '../../src/components/GifItem'
import {render , screen} from '@testing-library/react';


describe('Pruebas en GifItem', () => { 

    const title = 'Saitama';
    const url = 'https://dragonball.com/goku.jpg'


    test('Debemos hacer match con un snapshot', () => { 
        
        const {container} =render( <GifItem title={title} url={url}  />);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la img con el url y el alt indicado', () => { 
        
        render( <GifItem title={title} url={url}  />);
        // screen.debug();

        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);

    })

    test('debe de mostrar el titulo en el componente', () => { 
        render( <GifItem title={title} url={url}  />);
        expect(screen.getByText(title)).toBeTruthy();
    })

})
