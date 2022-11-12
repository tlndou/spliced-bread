import { Parallax } from 'react-parallax';
import Earth from '../img/earth.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Earth} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne 