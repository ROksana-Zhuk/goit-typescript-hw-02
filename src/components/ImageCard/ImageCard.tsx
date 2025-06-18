
import React from 'react';
import { Image } from '../../types';
import css from './ImageCard.module.css';


type Props = {
    image: Image;
    openModal: (imageUrl: string) => void;
  };

    const ImageCard: React.FC<Props> = ({ image, openModal }) => {
        const handleClick = (): void => {
          openModal(image.urls.regular);
        };

    return (
        <div>
          <img src={image.urls.small}
               alt={image.alt_description}
                onClick={handleClick}
                className={css.image}
               />
        </div>
    )
}

export default ImageCard;



