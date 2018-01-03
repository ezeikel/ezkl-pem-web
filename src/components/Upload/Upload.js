import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import base from '../../base';

class Upload extends Component {
    state = {
        uploading: false,
        file: {
            title: '',
            caption: '',
            tags: '',
            likes: 0
        }
    }

    handleFormInputChange = (e) => {
        const property = e.target.name
        this.setState({
            file: {
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        // firebase database
        const storage = base.initializedApp.firebase_.storage();

        const uploader = document.querySelector('.uploader');
        const fileBtn = document.querySelector('.file-button');

        fileBtn.addEventListener('change', async (e) => {
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
                async () => {
                    const url = await storageRef.getDownloadURL();
                    const id = uuidv4();
                    await base.post(`images/${id}`, {
                        data: {
                            ...this.state.file,
                            filename: file.name,
                            url
                        }
                    });

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
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="upload" className="file-button" />
                    <label htmlFor="name">Title:</label>
                    <input type="text" name="title" value={this.state.file.title} onChange={this.handleFormInputChange} />
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" value={this.state.file.caption} onChange={this.handleFormInputChange} />
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags" value={this.state.file.tags} onChange={this.handleFormInputChange} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }
};

export default Upload;