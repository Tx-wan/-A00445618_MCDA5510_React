import React, { Component } from 'react';
import bjimage from '../assets/bj.jpg';

import coldimage from '../assets/cold.png';
import mildimage from '../assets/mild.png';
import sunnyimage from '../assets/sunny.png';

class Mytown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: '',
            ctemp: ''
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=0f2ead793e063df08671b80c54988336")
            .then(response => {
                return response.json()
            })
            .then(response => {
                // console.log(response);
                this.setState({
                    temp: response.main.temp,
                    ctemp: Math.round(response.main.temp-273,1)
                })
        });

    }

    componentDidMount() {
        this.fetchData()
    }

    render(){
        
        return (
        <div>
            <img alt="Beijing Image" width={500} src={bjimage}/>
            <h1>I am living in Beijing</h1><br/>
            <p>Beijing is the capital city of China</p> 

            {this.state.ctemp <=10 ?
                <img alt="Cold Temp Image" width={125} src={coldimage}/>
                :
                    this.state.ctemp <=20 ?
                    <img alt="Mild Temp Image" width={125} src={mildimage}/>
                    :
                        <img alt="Sunny Temp Image" width={125} src={sunnyimage}/>
            }

            <div className="tempContainer">
                {this.state.isShowF ? 
                     <p>{Math.round(this.state.ctemp *9/5 + 32, 1)} ℉</p>: 
                     <p>{this.state.ctemp} ℃</p>
                    }
                
            </div>

            <button
                onClick = {() => this.setState({ isShowF: !this.state.isShowF })}
            >
                {this.state.isShowC ? "Change to ℃" : "Change to ℉"}
            </button>
        </div>

        )

    }

}


export default Mytown;