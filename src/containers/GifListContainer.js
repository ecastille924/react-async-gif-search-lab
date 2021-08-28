import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    
    state = {
        gifs: []
    }

    componentDidMount(){
        this.fetchGifs()
    }
    
    fetchGifs =  (query = "cat") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=GFNIARO2RR6HPO53JFvjLxcXIBYp0MBN&rating=g&limit=6`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({url: gif.images.original.url }))})
        })
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}

export default GifListContainer

// API key = GFNIARO2RR6HPO53JFvjLxcXIBYp0MBN
