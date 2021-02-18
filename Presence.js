import React,{Component} from  'react';
import ReactDOM from 'react-dom';
class Presence extends Component {
    constructor(pros){
        super(pros)
    }
    render(){
        const validation_items3 ={
            color:"#336699",
            fontSize:"25px",
            marginLeft:"25px",
        }
        const date_session3 ={
           color:"#336699",
           marginLeft:"25px",
        }
        const name_formation3 ={
           color:"#336699",
           marginLeft:"25px",
           fontSize:"25px",
        }

            return (

                        <div>
                                              <div className="validation">
                                                            <h2 className="validation_items3" style={validation_items3}>Suivie de la présence</h2>
                                                            <p className="date_session3" style={date_session3}> 15juin-18decembre 2020</p>
                                                            <p className="name_formation3" style={name_formation3}>Photoshop</p>
                                                 </div>
                        </div>
            )
    }
}
export default Presence;