import React, { Component } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import Loader from './Loader'
import NavBar from './NavBar'

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  700: 3,
  500: 2
};

export class Images extends Component {

  state = {
    images: [],
    count: 15,
    start: 1
  };

  componentDidMount() {
    this.fetchImage();
  }

  fetchImage = () => {
    const { count, start } = this.state;
    this.setState({start: this.state.start + count});
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: this.state.images.concat(res.data) }));
  }

  render() {
    return (
      <div>
      <NavBar />
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImage}
          hasMore={true}
          loader={<Loader />}
        >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
          {this.state.images.map(image => (
              <div key={image.id}>
                <a href={image.urls.regular} data-fancybox="gallery" data-caption={image.alt_description} >
                  <img src={image.urls.small} alt=""/>
                </a>
              </div>
          ))}
            </Masonry>
        </InfiniteScroll>
      </div>
    )
  }
}

export default Images
