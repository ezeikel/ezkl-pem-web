import React, { Component } from 'react';
import Image from './Image/Image';
import Upload from '../Upload/Upload';

import base from '../../base';

class Images extends Component {
    state = {
        images: [],
        ref: ''
    };

    addLike = (key) => {
        const images = { ...this.state.images };
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

        this.setState({images: data});
    }

    render() {
        return (
            <div>
                <ul className='images'>
                    {
                        Object
                            .keys(this.state.images)
                            .map(key => <Image key={key} index={key} addLike={this.addLike} details={this.state.images[key]} />)
                    }
                </ul>
                <Upload />
            </div>
        )        
    }
};

export default Images;