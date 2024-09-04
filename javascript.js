const CAT_FAVOURITES = 'https://api.thecatapi.com/v1/favourites';
const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

import showCats from './import_stuff/cats.js';
import showOptions from './utils/breeds.js';

const container = document.querySelector('#container');

const getFavourites = async () => {
  const response = await fetch(CAT_FAVOURITES, {
    headers: {
      'x-api-key': CAT_API_KEY
    }
  });
  const data = await response.json();
  return data;
};

const createInputElement = () => {
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Enter number of images';
  input.id = 'numImages';
  input.style.margin = '10px';
  input.style.width = '200px';
  return input;
};

const createSubmitButton = () => {
  const button = document.createElement('button');
  button.textContent = 'Submit';
  button.addEventListener('click', handleFormSubmit);
  return button;
};



