import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import base from '../../base';

class Upload extends Component {
    state = {
        uploading: false,
        upload: {
            filename: '',
            title: '',
            caption: '',
            tags: '',
            likes: 0
        },
        file: {}
    }

    handleFormInputChange = (e) => {
        this.setState({
            upload: {
                ...this.state.upload,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const uploader = document.querySelector('.uploader');

        // firebase database
        const storage = base.initializedApp.firebase_.storage();

        // create a storage ref
        const storageRef = storage.ref(`images/${this.state.file.name}`);

        // upload file
        const task = storageRef.put(this.state.file);

        // update progress bar
        task.on('state_changed',
            (snapshot) => {
                this.setState({
                    uploading: true
                });
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },
            (err) => console.error(err),
            async() => {
                const url = await storageRef.getDownloadURL();
                const id = uuidv4();

                await base.post(`images/${id}`, {
                    data: {
                        ...this.state.upload,
                        url
                    }
                });

                this.setState({
                    uploading: false
                });
            }
        );
    }

    onFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            upload: {
                ...this.state.upload,
                filename: e.target.files[0].name
            }
        });
    }

    componentDidMount() {
        const fileBtn = document.querySelector('.file-button');

        // get file
        fileBtn.addEventListener('change', this.onFileChange);
    }

    componentWillUnmount() {
        const fileBtn = document.querySelector('.file-button');

        fileBtn.removeEventListener('change', this.onFileChange, true);
    }

    componentDidUpdate() {
        const uploader = document.querySelector('.uploader');

        if (!this.state.uploading) uploader.value = 0;
    }

    render() {
        return (
            <div>
                <progress value="0" max="100" className="uploader">0%</progress>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="upload" className="file-button" />
                    <label htmlFor="name">Title:</label>
                    <input type="text" name="title" value={this.state.upload.title} onChange={this.handleFormInputChange} />
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" value={this.state.upload.caption} onChange={this.handleFormInputChange} />
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags" value={this.state.upload.tags} onChange={this.handleFormInputChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
};

export default Upload;