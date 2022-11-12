import { Parallax } from 'react-parallax';
import Rain from '../img/rain.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Rain} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo