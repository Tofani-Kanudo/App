import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import $ from 'jquery'


class Photo extends Component {
  state={
    imgURL:''
  }
  handleChange=(e)=>{
    this.setState({
      imgURL:URL.createObjectURL(e.target.files[0])
    })
  }
  handleClick=(e)=>{
    document.getElementById('imageSelector').click()
  }
  render(){
  return (
    <div onClick={this.handleClick} className="avatar-container">
      <Avatar
        alt="Remy Sharp"
        src={this.state.imgURL}
        style={{width:'150px',height:'150px'}}
      />
      <AddAPhotoIcon className="camera-icon"/>  
      <input id="imageSelector" style={{display:'none'}} onChange={this.handleChange} type="file"/>   
    </div>
  )
}};

export default Photo;
