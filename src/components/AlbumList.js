import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'




class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            isLoading: true
        }
    }


    componentDidMount() {
        // alert('componentDidMount')
        // fetch('https://facebook.github.io/react-native/movies.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         alert('responseJson-------->', responseJson)
        //         this.setState({ data: responseJson })
        //     })
        //     .catch((error) => {
        //         alert(error);
        //     });

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data, isLoading: false }))
            .catch(error => {
                alert(error);
            })
            .finally(() => {
                console.log('Data fetched successfully!')
            })
    }

    renderAlbums() {
        return this.state.albums.map((album, key) => <AlbumDetail album={album} key={key} />)
    }

    render() {
        const { isLoading } = this.state;
        return (
            <ScrollView>
                {
                    isLoading ?
                        <ActivityIndicator  size='large' color='#000' /> :
                        this.renderAlbums()
                }

            </ScrollView>
        );
    }

}

export default AlbumList;