import React from 'react'
import axios from 'axios'

class CurrentLocation extends React.Component {
    state = {
        currentLocation: null,
        satPosition: false
    }


    componentDidMount() {
        this.getLocation()
        this.interval = setInterval(() => {
            this.getLocation()
           
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        
    }
    
    getLocation() {
        axios({method:'get', url:'http://api.open-notify.org/iss-now.json'})
        .then(res => this.setState({currentLocation: {
            iss_position: {
                latitude: res.data.iss_position.latitude,
                longitude: res.data.iss_position.longitude
            }
        }}))
    }

    
    
    render() {
        return (
            <div className="CurrentLocation">
                <h1>Current Location</h1>
                <h1>{this.state.currentLocation
                ? `${this.state.currentLocation.iss_position.latitude}, ${this.state.currentLocation.iss_position.longitude}`
                : null
                }</h1>
                
                    <img   className='satImage' src="http://www.washingtonpost.com/wp-srv/special/national/nasa-iss/img/ISS-2011.png" alt="international space station" height="500px" width="500px"/>
                
            </div>
        )
    }
}

export default CurrentLocation
 



// export default () => {
//   return(
//     <div className="Home">
//       <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/ocs_iss_0.jpg" alt="international space station" height="500px" width="500px"/>
//       </div>  )
// }