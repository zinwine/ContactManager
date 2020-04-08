import React, { Component } from 'react'

class Test extends Component {

    state = {
        title: '',
        url: '' 
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos/7```')
        .then(response => response.json())
        .then(data => this.setState({
            title: data.title,
            url: data.url
        }))
    }

    render() {
        const { title, url } = this.state;
        return (
            <div>
                <h1>{ title }</h1>
                <img src={url} alt={url} />
            </div>
        )
    }
}

export default Test;