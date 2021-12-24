import React from 'react'
import '../components/form.css'
import axios from 'axios';
//import Post from './Post';
class form extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {title: '',author:'',content:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleUp = this.handleUp.bind(this);
      }

      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Refresh to see the new Post!!');
        event.preventDefault();
        axios.post("https://optimistic-raman-85f69e.netlify.app/newpost",this.state)
        .then((res)=>{
            console.log(this.state + " Sent!!")
        })
      }
    render(){
    return (
        <div className="inner-block" >
            <form onSubmit={this.handleSubmit}>
                <h3>Create Post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name='title'
                    />
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.author}
                        onChange={this.handleChange}
                        name='author'
                    />
                </div>
                <div className="form-group">
                    <label>content</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                       style={{height:'50px',width:'80%'}}
                       value={this.state.content}
                        onChange={this.handleChange}
                        name='content'
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    style={{width:'150px'}}
                    value="Submit"
                    id='sub12'
                >
                    Submit Post
                </button>
            </form>
        </div>
    )
}
}

export default form
