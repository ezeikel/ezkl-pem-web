import React, { Component } from 'react';

import Header from './components/header/Header';
import TopNav from './components/top-nav/TopNav';
import Image from './components/image/Image';
import HeroCarousel from './components/hero-carousel/HeroCarousel';

import base from './base';

class App extends Component {
  constructor() {
    super();

    this.updateImages = this.updateImages.bind(this);

    // getinitialState
    this.state = {
      images: {},
      videos: {}
    };
  }

  componentWillMount() {
    this.ref = base.syncState('images', {
      context: this,
      state: 'images',
      asArray: true
    });
  }

  updateImages(url) {
    const images = {...this.state.images};
    images.image1 = {
      title: 'Bonkaz',
      photographer: 'EZKL PEM',
      src: url
    }
    this.setState({ images: images });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidMount() {
    const storage = base.initializedApp.firebase_.storage();
    const storageRef = storage.ref();
    const imagesRef = storageRef.child('images');
    const testImageRef = storageRef.child('images/bonkaz-camden-assembly.jpg');

    testImageRef.getDownloadURL().then(url => {
      this.updateImages(url);
      console.log(url);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <TopNav />
        <ul className="images">
          {
            Object
              .keys(this.state.images)
              .map(key => <Image key={key} details={this.state.images[key]} />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
