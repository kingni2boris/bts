import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import React, {Comp} from 'react';
import logo from'./assets/images/logo.png';
import checked from './assets/images/checked.png';
import see from './assets/images/see.png';
import Header from './Header';
import Validation from './Validation';
// import {afficheTaf} from './Eventapp';


class Module extends Component {
    constructor(pros) {
        super();
        this.state ={
            showMe:false,
            shoMe2:false,
            showMe3:false,
            showMe4:false,
            showMe5:false
        }
        this.state = {
               height:0,
        }
        this.state={
            isVisible:true,
            visibility:true,
            visibility2:true,
            visibility3:true,
            visibility4:true,
            
        }
      
    }
    afficherTaf()
    {
         this.setState({
                    showMe:!this.state.showMe,

         })
         this.setState({
            isVisible:!this.state.isVisible,
        })
        
    }
    afficherTaf2()
    {
         this.setState({
                    showMe2:!this.state.showMe2,
         })
         this.setState({visibility:!this.state.visibility,})
    }
    afficherTaf3()
    {
         this.setState({
                    showMe3:!this.state.showMe3
         })
         this.setState({visibility2:!this.state.visibility2})
    }
    afficherTaf4()
    {
         this.setState({
                    showMe4:!this.state.showMe4
         })
         this.setState({visibility3:!this.state.visibility3})
    }
    afficherTaf5()
    {
         this.setState({
                    showMe5:!this.state.showMe5
         })
         this.setState({visibility4:!this.state.visibility4})
    }
    render() {

        
         const modules ={
             height:"330px",
             backgroundColor:"#336699",
         }
         const module1={
                    display:"flex",
                    justifyContent:"space-between",
                    marginLeft:"25px",
                    marginRight:"25px",
                    padding:"5px"
         }
         const numero_module={
                   
         }
         const nom_module={

         }
          const statut_module={

          }
          const taf ={
              display:"flex",
              justifyContent:"space-between",
              marginLeft:"25px",
              marginRight:"25px",
          }
          const contain_taf ={
            visibility:"",
          }
           const para_taf ={
                    color:"white",
           }
           const taf_item ={
               color:"red",
           }
           const boutton_active_taf = {
               outline:"none",
           }

           const juste ={
                  
           }

       

        return ( 
       
            <div className="container">

                                                       
                                                 <div className="modules" style={modules}>
                                                     {
                                                         this.state.visibility?
                                                         this.state.visibility2?
                                                         this.state.visibility3?
                                                         this.state.visibility4?

                                                                    <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 1</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Les calques</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}> <img className="juste_item"src={checked} width="20px"></img> <img src={see} width="20px"id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf()} ></img></p>
                                                                                        </div>
                                                                    </div>
                                                                    :null 
                                                                    :null
                                                                    :null
                                                                    :null
                                                     }
                                                   {
                                                       this.state.showMe?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Creation de qualque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Renommer un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Sauvegarder un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Supprimer un calque</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   {
                                                       this.state.isVisible?
                                                       this.state.visibility2?
                                                       this.state.visibility3?
                                                       this.state.visibility4?
                                                         <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 2</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}><img className="juste_item"src={checked} width="20px"></img> <img src={see} width="20px"  id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf2()} ></img></p>
                                                                                        </div>
                                                                    </div>
                                                            :null
                                                            :null
                                                            :null
                                                            :null
                                                     }
                                                   {
                                                       this.state.showMe2?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   {
                                                       
                                                       this.state.isVisible?
                                                       this.state.visibility?
                                                       this.state.visibility3?
                                                       this.state.visibility4?
                                                       
                                                   <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 3</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}><img className="juste_item"src={checked} width="20px"></img> <img src={see} width="20px" id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf3()} ></img></p>
                                                                                        </div>
                                                                    </div>
                                                            :null
                                                            :null
                                                            :null
                                                            :null
                                                   }
                                                   {
                                                       this.state.showMe3?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   {
                                                       this.state.isVisible?
                                                       this.state.visibility?
                                                       this.state.visibility2?
                                                       this.state.visibility4?
                                                   <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 4</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}><img className="juste_item"src={checked} width="20px"></img> <img src={see} width="20px"  id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf4()} ></img></p>
                                                                                        </div>
                                                                    </div>
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    }
                                                   {
                                                       this.state.showMe4?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   
                                                   {
                                                       this.state.isVisible?
                                                       this.state.visibility?
                                                       this.state.visibility2?
                                                       this.state.visibility3?
                                                   <div className="module1" style={module1}>
                                                                                        <div className="numero_module" style={numero_module}>
                                                                                                        <p className="para_taf" style={para_taf}> Module 5</p>
                                                                                        </div>
                                                                                        < div className="numero_module" style={numero_module}>
                                                                                                       <p className="para_taf" style={para_taf}>Le montage photo</p>
                                                                                         </div>
                                                                                          <div className="numero_module" style={numero_module}>
                                                                                                            <p className="para_taf" style={para_taf}><img className="juste_item"src={checked} width="20px"></img>  <img src={see} width="20px"  id ="boutton_active_taf" className="boutton_affiche_taf" style={boutton_active_taf} onClick={()=>this.afficherTaf5()} ></img></p>
                                                                                        </div>
                                                                    </div>
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    :null
                                                                    }
                                                   {
                                                       this.state.showMe5?
                                                       <div  className="contain_taf" style={contain_taf}>
                                                       <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                               <p className="taf_item" style={taf_item}> </p>
                                                                    <p > Taf 1</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Rogner une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 2</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Modifier l'opacite</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 3</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Retirer l'arrier plan </p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 4</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Coller une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                              </div>
                                                              <div className="taf"style={taf}>
                                                               <div className="numero_module" style={numero_module}>
                                                                    <p> Taf 5</p>
                                                              </div>
                                                              < div className="numero_module" style={numero_module}>
                                                                     <p>Inverser une photo</p>
                                                              </div>
                                                              <div className="numero_module" style={numero_module}>
                                                                            <p>valide </p>
                                                              </div>
                                                         </div>
                                                  </div>
                                                  : null
                                                   }
                                                   
                                                   
                                                      

                                                                            
                                                 </div>
                                                
                                            
                               
             </div>

                   
                    
                    
                    
                     
                         
        );
    }
}

export default Module;