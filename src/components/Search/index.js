import { Component } from 'react';
import { FaSearch } from "react-icons/fa";

class AlbumSearch extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     albums: [],
  //     artist: '',
  //     intro: 'Search Albums by Artist',
  //     showLoader: false
  //   }
  // }

  // lookUp() {
  //   if (this.state.artist === '') {
  //     alert('You must fill out artist silly!')
  //   } else {
  //     this.setState({ showLoader: true });
  //     fetch(`https://itunes.apple.com/search?term=${this.state.artist}&media=music&entity=album&attribute=artistTerm&limit=200`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         albums: res.results,
  //         intro: `${res.results.length} results for ${this.state.artist}`,
  //         showLoader: false
  //       })
  //     });
  //   }
  // }

  // searchLookUp(e) {
  //   this.setState({ artist: e.target.value });
  //   if (e.keyCode === 13) {
  //     this.lookUp();
  //   }
  // }

  render() {
    return(
      <div className='album-search'>
        <nav className='search'>
          <input placeholder='Who are you looking for?' id='search-input' type='search' />
          <button id='search-icon'>
            <FaSearch />
          </button>
        </nav>
      </div>
    )
  }
}

export default AlbumSearch;
