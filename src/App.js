import React, { Component } from 'react';

import Header from './components/header/Header';
import TopNav from './components/top-nav/TopNav';
import Image from './components/image/Image';

import base from './base';

class App extends Component {
  constructor() {
    super();

    this.getImageUrls = this.getImageUrls.bind(this);

    // getinitialState
    this.state = {
      images: {},
      videos: {}
    };
  }

  getImageUrls(collection) {
    console.log('getting image urls...');
    let images = {...this.state.images};
    const storage = base.initializedApp.firebase_.storage();
    const storageRef = storage.ref();

    console.log({collection});

    for (let row in collection) {
      const obj = collection[row];
      const imageRef = storageRef.child(`images/${obj.src}.jpg`);

      imageRef.getDownloadURL().then(url => {
        obj.url = url;
        images = collection;
        this.setState({ images });
      });
    }
  }

  componentWillMount() {
    this.ref = base.syncState('images', {
      context: this,
      state: 'images'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidMount() {
    base.fetch('images', {
      context: this,
      isArray: true
    }).then(data => {
      this.getImageUrls(data);
    }).catch(error => {
      // handle error
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
