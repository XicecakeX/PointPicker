import React from 'react';
import {Marker, Popup} from 'react-leaflet';

export default class Marker3 extends React.Component{
  render(){
    //Declaring fields
    var i = this.props.index;
    var points = this.props.points;
    var iconType = this.props.icon;
    var pos = this.props.pos;

    return(
      <Marker position = {pos} key = {i} icon = {iconType}>
        <Popup>
          <span>
            Latitude: {points[i].latitude} <br />
            Longitude: {points[i].longitude} <br />
            Time: {points[i].time} <br />
            <div className = "center">
              <input type = "button" value = "Start" onClick = {() => {this.props.handleMarker(points[i], i, "start")}}/>
              <input type = "button" disabled value = "End" onClick = {() => {this.props.handleMarker(points[i], i, "end")}}/>
            </div>
          </span>
        </Popup>
      </Marker>
    );
  }
}
