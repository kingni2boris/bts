 import React, {Component} from 'react';
 import logo from'./assets/images/logo.png';
 class  Header extends Component{

            constructor(props){
                super(props)
            }
            render(){

                const contain = {
                    display:"flex",
                }
                const items ={
        
                width:"100vw",
                display:"flex",
                justifyContent:"flex-end",
                flexWrap:"wrap",
                marginRight:"25px",
                marginTop:"10px",
                
                }
                const base ={
                    margin:"5px",
                   
                }
                const boutton ={
                                backgroundColor:"#336699",
                                border:"1px solid #336699",
                                color:"white",
                                height:"35px",
                                width:"150px",
                                borderRadius:"3px",
                                textTransform:"uppercase",
                               outline:"none#336699",
                }
                 const avatar ={
                        marginLeft:"25px",
                        marginTop:"10px",
                 }
                 const container_header_items ={
                            height:"200px",
                            backgroundColor:"#336699",
                            marginTop:"20px",
                            position:"relative",
                 }
                 const date ={
        
                 }
                 const date_item ={
                     color:"white",
                     marginLeft:"25px",
                     marginTop:"30px",
                 
                 }
                 const nom ={
                     color:"white",
                     fontSize:"25px",
                     marginLeft:"25px",
                 }
                 const boar ={
                     display:"flex",
                     marginLeft:"25px",
                     marginTop:"60px",
                     
                 }
                 const boar_items ={
                     margin:"8px",
                     color:"white",
                 }
                 const tableau ={
                                borderBottom:"2px solid white",   
                 }
                 const validation_items ={
                     color:"#336699",
                     fontSize:"25px",
                     marginLeft:"25px",
                 }
                 const date_session ={
                    color:"#336699",
                    marginLeft:"25px",
                 }
                 const name_formation ={
                    color:"#336699",
                    marginLeft:"25px",
                    fontSize:"25px",
                 }
                return(
                    <div>

                                                    
                                    <div className="container_header">
                                                <div className ="contain" style={contain}>


                                                        <div className="avatar" style={avatar}>
                                                            <img  className="logo_item"src={logo} width="90px"></img>
                                                        </div> 
                        
                                                    
                                                                <div className="items" style={items}>
                                                                                <div className="base" style={{...base, marginTop:"15px"}}>
                                                                                        image
                                                                                </div>
                                                                                <div className="base "style ={{...base, marginTop:"15px"}}>
                                                                                    CATEGORIES
                                                                                </div>
                                                                                <div className="base" style={base}>
                                                                                    <button className="boutton" style={boutton}> Nous contacter</button>
                                                                                </div>

                                                                </div>
                                                    
                                                </div>
                                         
                                                

                                    </div>
                                                    <div className="container_header_items" style={container_header_items}>
                                                        <h1 className="nom" style={nom}>Kingni boris</h1>
                       
                                                      <p className="date_item" style={date_item}>  Date d'inscription  08 sept 2020 -Dernier connexion il y'a 7 min</p>


                                                        <div className ="boar" style={boar}>
                                                                        <div id="boad1" className ="boad_items" style={boar_items}>
                                                                                    <p  id="boad1"className="tableau" style={tableau}>TABLEAU DE BORD</p>
                                                                        </div>
                                                                        <div  id ="boad2"className ="boad_items"style={boar_items}>
                                                                                   <p id="boad2"> PARAMETRES</p>
                                                                        </div>
                                                        </div>
                                                                
                                                   </div>

                                               


                    </div>
                )
            }
 }
 export default Header;