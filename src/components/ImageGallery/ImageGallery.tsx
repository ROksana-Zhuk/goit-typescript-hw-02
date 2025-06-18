import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'


type Props = {
    images: Image[];
    openModal: (imageUrl: string) => void;
  };

//const ImageGallery: React.FC<Props> = ({ images, openModal }) => {
    export default function ImageGallery ({ images, openModal }:Props  )  {

    return (
        <ul className={css.list}>
          {images.map((image) => (
            <li key={image.id} className={css.item}>
              <ImageCard image={image} openModal={openModal} />
            </li>
           ))}
        </ul>

       )

}
// export default ImageGallery;
