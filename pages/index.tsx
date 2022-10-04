import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Select from '../components/select'
import ImagesContainer from '../components/image_container'
import GlobalConatiner from '../components/global_container'
import { ButtonsContainer, Button, InputButton } from '../components/buttons'

const SERVER_BASE_URL = 'http://localhost:5000';
const API_V1_PATH = '/api/v1/';
const API_V1_URL = `${SERVER_BASE_URL}${API_V1_PATH}`;

const Home: NextPage = () => {
  const [image, setImage] = useState<string|Blob>('');
  const [imageURL, setImageURL] = useState('/placeholder.png');
  const [filteredImage, setFilteredImage] = useState('/placeholder.png');
  const [filterFunc, setFilterFunc] = useState('emboss');

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img);
      console.log(event);
      setImageURL(URL.createObjectURL(img));
    }
  };

  const processImage = async (event: any) => {
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
    <GlobalConatiner>
      <Head>
        <title>CADT Test</title>
      </Head>

      <ImagesContainer>
        <img src={imageURL} alt='' />
        <img src={filteredImage} alt='' />
      </ImagesContainer>
      <Select
        value={filterFunc}
        onChange={(e) => {setFilterFunc(e.target.value);}}
      >
        <option value='emboss'>Emboss</option>
        <option value='gaussianBlur'>Gaussian Blur</option>
        <option value='cannyEdge'>Canny Edge</option>
        <option value='grayScale'>Gray Scale</option>
        <option value='sepia'>Sepia</option>
      </Select>
      <ButtonsContainer>
        <InputButton type='file' onChange={uploadToClient} accept='image/png, image/jpeg'>Upload image</InputButton>
        <Button type='submit' onClick={processImage} disabled={!image} >Process image</Button>
      </ButtonsContainer>
    </GlobalConatiner>
  )
}

export default Home
