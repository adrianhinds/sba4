const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

const container = document.querySelector("#container")

const clear = () => {
  container.innerHTML = ""
}

const showCats = async (numDogs = 10) => {
  clear()
  const { id, name } = await getRandBreed()
  const dogs = await getDogs(numDogs, id)
  const data = await dogs.json()
  data.forEach(dog => {
    container.appendChild(createDogElement(dog))
  })
  return {
    id,
    name,
  }
}

export default showCats