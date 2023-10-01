import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './item/ImageGallery';
import Button from './item/Button';
import Loader from './item/Loader';
import Modal from './item/Modal';
import fetchImages from './Utils/api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const maxImages = 2700;
  const imagesPerPage = 12; 

  useEffect(() => {
    if (!query) return;

    const fetchImageData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page, imagesPerPage);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    if (images.length < maxImages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length < maxImages && images.length > 0 && <Button onClick={handleLoadMore} />}
      {showModal && <Modal largeImageURL={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
