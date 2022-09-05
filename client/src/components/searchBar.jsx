import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {'search':''}
    }
    onChange = (e) => {
        console.log()
        this.setState({[e.target.name]: e.target.value});
        this.props.onSearch(e.target.value);
    }
    render() {
    return (
        <form>
            <h5 className='text-defult mx-auto my-2 w-75'>Search:</h5>
            <input type="text" name="search" className="w-75 mx-auto mb-5 search-bar py-2 px-1" id="search" value={this.state.name} onChange={this.onChange} placeholder="Search here"/>
        </form>
    )
  }
}

