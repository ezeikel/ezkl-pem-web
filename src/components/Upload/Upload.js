import React, { Component } from 'react';

import base from '../../base';

class Upload extends Component {
    state = {
        uploading: false
    }

    componentDidMount() {
        // firebase database
        const storage = base.initializedApp.firebase_.storage();

        const uploader = document.querySelector('.uploader');
        const fileBtn = document.querySelector('.file-button');

        fileBtn.addEventListener('change', (e) => {
            // get file
            const file = e.target.files[0];

            // create a storage ref
            const storageRef = storage.ref(`images/${file.name}`);

            // upload file
            const task = storageRef.put(file);

            // update progress bar
            task.on('state_changed',
                (snapshot) => {
                    this.setState({uploading: true});
                    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.value = percentage;
                },
                (err) => console.error(err),
                () => {
                    this.setState({uploading: false});
                }
            );
        });
    }

    componentDidUpdate() {
        const uploader = document.querySelector('.uploader');

        if (!this.state.uploading) uploader.value = 0;
    }

    render() {
        return (
            <div>
                <progress value="0" max="100" className="uploader">0%</progress>
                <input type="file" name="upload" className="file-button" />
            </div>
        )
    }
};

export default Upload;