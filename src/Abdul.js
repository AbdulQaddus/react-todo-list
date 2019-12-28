import React, { Component } from 'react'
import Army from "./withArm"; 
class Abdul extends Component {
 
    render() {
        return (
            <div>
    <         h1>Camp: {this.props.camp}</h1>
              <h3 onMouseOver={this.props.hochandleGunshots}>
                  Abdul {this.props.hocgunname} Gunshots:
                   {this.props.hocgunshots}</h3>  
            </div>
        );
    }
}
export default Army(Abdul,10);