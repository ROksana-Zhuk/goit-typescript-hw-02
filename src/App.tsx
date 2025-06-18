
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader'
import { fetchImages } from './images-api';
import css from './App.module.css';
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Image } from './types';



function App() {

  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('');

  function openModalFunction(imageUrl: string): void {
    setModalIsOpen(true);
    setModalImage(imageUrl);
  };

  function closeModal(): void {
    setModalIsOpen(false);
  };


  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setCurrentPage(1);
    setImages([]);

    toast.success('Successfully!');
  };


  const incrementPage = (): void => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData(): Promise<void> {
      try {
        setIsError(false);
        setIsLoading(true);
        setIsLastPage(false);
        const data = await fetchImages(query, currentPage);
        setImages((prevImages) => [...prevImages, ...data.images]);

        const receivedTotalPages = data.totalPages;

        if (receivedTotalPages === currentPage) {
            setIsLastPage(true);
            toast("You've reached the end of the gallery 📷 No more photos to load!", {
                duration: 6000,
              });
        }

      } catch {
        setIsError(true);
        console.log('error');

      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentPage, query]);


  function afterOpenModal() : void {
    console.log('test');
  }


  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch}/>
      {isError && <ErrorMessage /> }
      <ImageGallery images={images} openModal={openModalFunction}/>
      {isLoading && <Loader />}

      {(images.length > 0 && !isLastPage)  && <LoadMoreBtn onClick={incrementPage}/>}

      <Toaster position="top-right" />

      <ImageModal modalIsOpen={modalIsOpen}
                  afterOpenModal={afterOpenModal}
                  closeModal={closeModal}
                  modalImageRegular={modalImage}
                  />

    </div>
  )
}


export default App

