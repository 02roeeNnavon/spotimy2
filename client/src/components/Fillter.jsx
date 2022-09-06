import React, { Component } from 'react'
import { genres } from '../Services/songService';

export default class Fillter extends Component {
    constructor(props){
        super(props);
        this.state = {genres:[],'fillter':''}
    }
    async componentDidMount(){
        this.setState({genres: await genres()})
    }
    onChange = (e) => {
        console.log()
        this.setState({[e.target.name]: e.target.value});
        this.props.onFillter(e.target.value);
    }
    render() {
    return (
      <div className='col-3'>
      <h5 className="text-defult w-100 mx-auto my-2">Search by genre</h5>
      <select className="w-100 mx-auto mb-5 search-bar py-2 px-1" name="fillter" id="fillter" onChange={this.onChange} value={this.state.fillter}>
        <option value="">All</option>
        {this.state.genres.map((element) => {
            return <option key={element.genre} value={element.genre}>{element.genre}</option>
        })}
      </select>
      </div>
    )
  }
}
