import { useState, useEffect } from 'react'
import axios from 'axios'

function LoadImg() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=b5bb89a6a9bd5c7c7212a4d476d76b87&format=json&nojsoncallback=1'
      )
      .then((response) => {
        setPhotos(response.data.photos.photo)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, []) // Empty dependency array ensures the API request is made when the component mounts

  return photos
}

function SearchImg(query) {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b5bb89a6a9bd5c7c7212a4d476d76b87&format=json&nojsoncallback=1&text=${query}`
      )
      .then((response) => {
        setSearchResults(response.data.photos.photo)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [query])

  return searchResults
}

export { LoadImg, SearchImg }

// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const count = 1
// function LoadImg() {
//   const [state, setState] = useState([])

//   useEffect(() => {
//     axios
//       .get(
//         'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=b5bb89a6a9bd5c7c7212a4d476d76b87&format=json&nojsoncallback=1'

//         //unsplash api key
//         // 'https://api.unsplash.com/photos/?client_id=GhOz3KAsEqeaQmQ39scsiwMLmN7wO2V98fj-B8ZsoRo'
//       )
//       .then((data) => {
//         setState(data.data.photos.photo)
//       })
//   }, [count])
//   return state
// }

// function SearchImg(query) {
//   const [state, setState] = useState([])

//   useEffect(() => {
//     axios
//       .get(
//         'https://api.flickr.com/services/rest/?method=flickr.photos.search&query=' +
//           query +
//           '&api_key=b5bb89a6a9bd5c7c7212a4d476d76b87&format=json&nojsoncallback=1&text=SEARCH_QUERY'
//         // 'https://api.unsplash.com/search/photos?page=1&query=' +
//         //   query +
//         //   '&client_id=GhOz3KAsEqeaQmQ39scsiwMLmN7wO2V98fj-B8ZsoRo'
//       )
//       .then((data) => {
//         console.log(data)
//         setState(data.data.photos.photo)
//       })
//   }, [query])
//   return state
// }

// export { LoadImg, SearchImg }
