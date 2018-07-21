import React from 'react';


class Person extends React.Component{
   constructor(props){
       super(props)
       this.state={
           ishidden:false,
           
           
       }
   }
   Dismiss(){
       this.setState({ishidden:true});
   }
   render(){
   return(
       <div>
            
                            <div className="divTable">
                                <div className="divTableBody">
                                    {!this.state.ishidden && <div className="divTableRow">
                                        <div className="divTableCell">{this.props.id}  {this.props.name}  {this.props.sname} {this.props.mail} <button onClick={this.Dismiss.bind(this)}>Dismiss </button></div>                                       
                                         <div className="divTableCell"></div>                                   
                                    </div>} 
                                </div>
                            </div>
         </div>
           
        
     )}
}

export default Person;