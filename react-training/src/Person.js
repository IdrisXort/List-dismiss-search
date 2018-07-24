import React from 'react';


class Person extends React.Component{
   constructor(){
       super()
       this.state={
           ishidden:false
       }
   }
   Dismiss(){
       this.setState({ishidden:true});
   }
   render(){
   return(
       
       <div>
          
                     
                  
             {!this.state.ishidden &&
                <ul className="list-group">
                         <li className="list-group-item">
                            
                                <div className="row">
                                        <div className='col-md-1' > {this.props.id} </div>
                                        <div className='col-md-3'> {this.props.name} </div>
                                        <div className='col-md-3'> {this.props.sname} </div>
                                        <div className='col-md-3'> {this.props.mail} </div>
                                        <div className='col-md-2'> <button onClick={this.Dismiss.bind(this)}>Dismiss </button> </div>

                                </div>      
                          </li>
                          </ul>
                         }                  
          
                  
       </div>
     )}
}

export default Person;