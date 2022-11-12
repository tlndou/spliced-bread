import { Parallax } from 'react-parallax';
import Farm from '../img/farm.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Farm} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageThree 