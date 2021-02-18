import React ,{Component} from 'react';
import logo from'./assets/images/logo.png';
import Header from './Header';
import Presence  from './Presence';
import Footer from './Footer';
 class Present extends Component {

            constructor(props){
                super()
                this.state ={
                    name :"Entrer votre méssage",
                }
            }
            render(){
                            const parent = {
                                height:"330px",
                                backgroundColor:"#336699",
                            }
                            const conteiner = {
                               
                                display:"flex",
                                flexDirection:"row",
                       
                                justifyContent:"space-between",
                               
                                
                                
                            }
                            const container_items= {
                                marginRight:"25px",
                                marginLeft:"25px",
                                borderBottom:"2px white",

                            }
                            const title_items ={
                                        color:"white",
                                        fontSize:"20px",
                            }
                            const container_status={
                                display:"flex",
                                flexDirection:"row",
                                
                                justifyContent:"space-between",
                               
                            }
                            const seance1={
                                marginRight:"25px",
                                marginLeft:"25px",
                                borderBottom:"2px white",
                            }
                            const seance_number={
                                    color:"white",
                            }
                            const error = {

                            }
                          const error_items ={
                              textAlign:"center",
                              color:"#336699",
                        
                          }
                          const formulaire={

                          }
                          const container_form ={
                                display:"flex",
                                justifyContent:"center",
                          }
                          const container_input ={
                              margin:"30px",
                          }
                          const text ={
                              height:"100px",
                              width:"300px",
                              outline:"none"
                          }
                          const boutton = {
                            backgroundColor:"#336699",
                            border:"1px solid #336699",
                            color:"white",
                            height:"35px",
                            width:"150px",
                            borderRadius:"3px",
                            textTransform:"uppercase",
                           outline:"none",
                           marginLeft:"80px",
                          }
 
                    

                return(

                    <div>
                                 
                            <div>
                                        
                                 < Header/>  
                                 <Presence/>
                                        <div className="parent" style = {parent}>

                                                    <div className="conteiner" style={conteiner}>
                                                            <div className="container_items" style={container_items}>
                                                                        <h1 className="title_items" style={title_items}>Séance</h1>
                                                            </div>
                                                            <div className="container_items" style={container_items}>
                                                                        <h1 className="title_items" style={title_items}>Date</h1>
                                                            </div>
                                                            <div className="container_items" style={container_items}>
                                                                        <h1 className="title_items" style={title_items}>Status</h1>
                                                            </div>
                                                            
                                                    </div>
                                                    < div className="container_status" style ={container_status}>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>1ére séance </p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>20 juin 2020</p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>Présent</p>
                                                                </div>

                                                    </div>
                                                    < div className="container_status" style ={container_status}>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>2éme séance </p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>24 juin 2020</p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>Absent</p>
                                                                </div>

                                                    </div>
                                                    < div className="container_status" style ={container_status}>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>3éme séance </p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>02 juillet 2020</p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>Présent</p>
                                                                </div>

                                                    </div>
                                                    < div className="container_status" style ={container_status}>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>4éme séance </p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>10 juillet 2020</p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>Absent</p>
                                                                </div>

                                                    </div>
                                                      < div className="container_status" style ={container_status}>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>5éme séance </p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>15 juillet 2020</p>
                                                                </div>
                                                                < div className ="seance1" style={seance1}>
                                                                            <p className="seance_number" style={seance_number}>Présent</p>
                                                                </div>

                                                    </div>
                                        </div>

                            
                               
                            </div> 

                            < div className ="error" style={error}>
                                            <h3 className="error_items" style={error_items}>Une erreur envoyez vos commentaires</h3>
                                
                                </div> 


                                < div className="formulaire" style={formulaire}>
                                   <form>
                                            
                                      <div className="container_form" style={container_form}>
                                            < div >

                                                    < div className="container_input" style={container_input}>
                             
                                                        <textarea className="text" style ={text} name="textarea" value={this.props.name}></textarea>
                                                    </div>
                                                
                                                    <div className="container_input" style={container_input}>
                                                      
                                                    <input className= "boutton" style= {boutton}type="Submit" name="name" value="Envoyer" />


                                                    </div>
                                            </div>
                                      </div>

                                    </form>

                                </div>

                      <Footer/>
                          

                    </div>
                )
            }
 }
 export default Present;