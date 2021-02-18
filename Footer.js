import React,{Component} from 'react';
import ReactDOM from 'react-dom'


class Footer extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const conteiner = {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            flexWrap:"wrap",
            backgroundColor:"#336699",
            height:"300px",

        }
        const conteiner_items ={

        }
        const liste ={
                    margin:"20px",
        }
        const liste_items={

            listStyle:"none",
          color:"white",
        }
                return (

                            <div>
                                        <div className="conteiner" style={conteiner}>
                                                    < div className="conteiner_items" style={conteiner_items}>

                                                                <ul className="liste" style={liste}>

                                                                                <li className="liste_items" style={liste_items}>

                                                                                        localisation
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Nous contacter
                                                                                </li>  
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                            A propos
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Suivez nous
                                                                                </li>    
                                                                </ul>
                                                    </div>
                                                      < div className="conteiner_items" style={conteiner_items}>

                                                                <ul className="liste" style={liste}>

                                                                                <li className="liste_items" style={liste_items}>

                                                                                        localisation
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Nous contacter
                                                                                </li>  
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                            A propos
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Suivez nous
                                                                                </li>    
                                                                </ul>
                                                    </div>
                                                      < div className="conteiner_items" style={conteiner_items}>

                                                                <ul className="liste" style={liste}>

                                                                                <li className="liste_items" style={liste_items}>

                                                                                        localisation
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Nous contacter
                                                                                </li>  
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                            A propos
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Suivez nous
                                                                                </li>    
                                                                </ul>
                                                    </div>
                                                      < div className="conteiner_items" style={conteiner_items}>

                                                                <ul className="liste" style={liste}>

                                                                                <li className="liste_items" style={liste_items}>

                                                                                        localisation
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Nous contacter
                                                                                </li>  
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                            A propos
                                                                                </li>   
                                                                                   <li className="liste_items" style={liste_items}>

                                                                                        Suivez nous
                                                                                </li>    
                                                                </ul>
                                                    </div>

                                        </div>


                            </div>
                )
    }
}
export default Footer;