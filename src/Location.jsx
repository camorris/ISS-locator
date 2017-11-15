import React from 'react'
import Loading from './Loading'
import axios from 'axios'

class CurrentLocation extends React.Component {
    state = {
        loading: true,
        currentLocation: null
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
               {this.state.loading ? <Loading />: null}
                {this.state.currentLocation
                ? `${this.state.currentLocation.iss_position.latitude}, ${this.state.currentLocation.iss_position.longitude}`
                : null
                }

            </div>
        )
    }
}

export default CurrentLocation
 


