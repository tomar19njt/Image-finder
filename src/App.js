import { useState, useEffect } from 'react'
import { LoadImg, SearchImg } from './component/api'
import './App.css'
import Image from './component/image'

function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImg()
  console.log(query)
  const search = () => {
    setSearch(query)
  }
  const searchData = SearchImg(searchQ)
  console.log(searchData)
  return (
    <div className="App">
      <div className="searchField">
        {/* <h2>Search Image</h2> */}
        <input type="text" placeholder='Search Image' onChange={(event) => setQuery(event.target.value)} />
        <button onClick={search}>search</button>
      </div>
      <div className="contain">
        {searchData.length > 0
          ? searchData.map((img, key) => (
              <Image
                src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                key={key.id}
              />
            ))
          : data.map((img, key) => (
              <Image
                src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                key={key.id}
              />
            ))}
      </div>

      {/* <div className="contain">
          {searchQ
            ? searchData.map((img, key) => (
                <Image src={img.urls.thumb} key={key} />
              ))
            : data.map((img, key) => <Image src={img.urls.thumb} key={key} />)}
        </div> */}
    </div>
  )
}

export default App
