import React, { Component } from 'react'
import Army from "./withArm"; 
class Sonam extends Component {
    render() {
        return (
            <div>
                <h1>Camp: {this.props.camp}</h1>
              <h3 onMouseOver={this.props.hochandleGunshots}>
                  Sonam {this.props.hocgunname} Gunshots: 
                  {this.props.hocgunshots}</h3>  
            </div>
        );
    }
}
export default Army(Sonam,10);