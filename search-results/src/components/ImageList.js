import ImageShow from './ImageShow';
import './imageList.css';

export default function ImageList({ images }) {

    const renderedImages = images.map((image) => {
        return < ImageShow image={image}/>
    })
    
    return <div className='image-list'>{renderedImages}</div>
}