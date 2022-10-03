import type { NextPage } from 'next'
import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ImagesContainer from '../components/image_container'
import styles from '../styles/Home.module.css'

const SERVER_BASE_URL = 'http://localhost:5000';
const API_V1_PATH = '/api/v1/';
const API_V1_URL = `${SERVER_BASE_URL}${API_V1_PATH}`;

const Home: NextPage = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('/placeholder.png');
  const [filteredImage, setFilteredImage] = useState('/placeholder.png');
  const [filterFunc, setFilterFunc] = useState('emboss');

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img);
      setImageURL(URL.createObjectURL(img));
    }
  };

  const processImage = async (event) => {
    const body = new FormData();
    body.append('image', image);
    body.append('filterFunc', filterFunc);
    const processImageURL = `${API_V1_URL}apply_filter/`;
    // TODO catch on error
    const response = await fetch(processImageURL, {
      method: 'POST',
      body
    });

    const data = await response.json();
    const bImage = `data:${data['type']};base64, ${data['filtered_img']['py/b64']}`;
    setFilteredImage(bImage);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CADT Test</title>
      </Head>

      <ImagesContainer>
        {/* TODO use Image component */}
        <img src={imageURL} alt='' />
        <img src={filteredImage} alt='' />
      </ImagesContainer>
      <h4>Select Image</h4>
      {/* TODO style this tags */}
      <input type='file' name='myImage' onChange={uploadToClient} accept='image/png, image/jpeg' />
      <select
        value={filterFunc}
        onChange={(e) => {setFilterFunc(e.target.value);}}
      >
        <option value="emboss">Emboss</option>
        <option value="gaussianBlur">Gaussian Blur</option>
        <option value="cannyEdge">Canny Edge</option>
        <option value="grayScale">Gray Scale</option>
        <option value="sepia">Sepia</option>
      </select>
      <button className='btn btn-primary' type='submit' onClick={processImage}>Process image</button>
    </div>
  )
}

export default Home
