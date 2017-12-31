import React, { Component } from 'react';

import Header from './containers/Header/Header';
import TopNav from './containers/TopNav/TopNav';
import Images from './containers/Images/Images';

import base from './base';

class App extends Component {
    state = {
      images: {},
      videos: {},
      ref: ''
    };

  getImageUrls = async (collection) => {
    let images = {...this.state.images};
    const storage = base.initializedApp.firebase_.storage();
    const storageRef = storage.ref();

    for (let row in collection) {
      const obj = collection[row];
      const imageRef = storageRef.child(`images/${obj.src}.jpg`);

      const url = await imageRef.getDownloadURL();
      obj.url = url;
      images = collection;
      this.setState({ images });
    }
  }

  addLike = (key) => {
    const images = {...this.state.images};
    images[key].likes = images[key].likes + 1;
    this.setState({ images });
  }

  componentWillMount() {
    const ref = base.syncState('images', {
      context: this,
      state: 'images'
    });
    this.setState({ ref });
  }

  componentWillUnmount() {
    base.removeBinding(this.state.ref);
  }

  async componentDidMount() {
    const data = await base.fetch('images', {
      context: this,
      isArray: true
    });

    this.getImageUrls(data);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <TopNav />
        <Images images={this.state.images} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;
