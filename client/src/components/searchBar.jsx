import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {'search':''}
    }
    onChange = (e) => {
        console.log()
        this.setState({[e.target.name]: e.target.value});
        this.props.onSearch(e.target.value,this.props.fillter);
    }
    render() {
    return (
        <form className='col-3'>
            <h5 className="text-defult w-100 mx-auto my-2">Search by name</h5>
            <input type="text" name="search" className="w-100 mx-auto mb-5 search-bar py-2 px-1" id="search" value={this.state.name} onChange={this.onChange} placeholder={`Search here by ${this.props.fillter}`} />
        </form>
    )
  }
}

