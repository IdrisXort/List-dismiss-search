import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import './index.css';
import './bootstrap.min.css';

let name='ido';
const list = 
[{"id":1,"first_name":"Bertrando","last_name":"Verduin","gender":"Male","email":"bverduin0@yahoo.com"},
{"id":2,"first_name":"Kailey","last_name":"Wellstood","gender":"Female","email":"kwellstood1@digg.com"},
{"id":3,"first_name":"Florence","last_name":"Fishe","gender":"Female","email":"ffishe2@redcross.org"},
{"id":4,"first_name":"Linnell","last_name":"Noden","gender":"Female","email":"lnoden3@over-blog.com"},
{"id":5,"first_name":"Shel","last_name":"Ciccoloi","gender":"Female","email":"sciccoloi4@cdc.gov"},
{"id":6,"first_name":"Carilyn","last_name":"Thumnel","gender":"Female","email":"cthumnel5@cloudflare.com"},
{"id":7,"first_name":"Dolorita","last_name":"Crosseland","gender":"Female","email":"dcrosseland6@tripadvisor.com"},
{"id":8,"first_name":"Barr","last_name":"Wilmore","gender":"Male","email":"bwilmore7@angelfire.com"},
{"id":9,"first_name":"Ellissa","last_name":"Lochhead","gender":"Female","email":"elochhead8@boston.com"},
{"id":10,"first_name":"Law","last_name":"Rigge","gender":"Male","email":"lrigge9@addthis.com"},
{"id":11,"first_name":"Bernard","last_name":"Beernaert","gender":"Male","email":"bbeernaerta@senate.gov"},
{"id":12,"first_name":"Olivette","last_name":"Vinnick","gender":"Female","email":"ovinnickb@usda.gov"},
{"id":13,"first_name":"Ferrell","last_name":"Cramer","gender":"Male","email":"fcramerc@mysql.com"},
{"id":14,"first_name":"Cathlene","last_name":"Caton","gender":"Female","email":"ccatond@un.org"},
{"id":15,"first_name":"Howie","last_name":"Rourke","gender":"Male","email":"hrourkee@imageshack.us"},
{"id":16,"first_name":"Di","last_name":"Arondel","gender":"Female","email":"darondelf@people.com.cn"},
{"id":17,"first_name":"Fidelia","last_name":"Bowditch","gender":"Female","email":"fbowditchg@marriott.com"},
{"id":18,"first_name":"Gilberto","last_name":"Spelwood","gender":"Male","email":"gspelwoodh@google.com.hk"},
{"id":19,"first_name":"Rob","last_name":"Passy","gender":"Male","email":"rpassyi@naver.com"},
{"id":20,"first_name":"Nichole","last_name":"Tomalin","gender":"Female","email":"ntomalinj@blogspot.com"}];
class App extends React.Component {
  constructor(props){

    super(props);
    this.firstName = React.createRef();
    this.lastname = React.createRef();
    this.mail = React.createRef();
    this.idInput = React.createRef();
    this.state={
      value:null,
      people:[]

    }
  }  


componentDidMount(){
        this.setState({people:list})
    }

    mijnFilter(){
      console.log(this.firstName.current.value, this.lastname.current.value, this.mail.current.value);
      const firstNameFilter = this.firstName.current.value.toUpperCase();
      const lastNameFilter = this.lastname.current.value.toUpperCase();
      const mailFilter = this.mail.current.value.toUpperCase();
      const idFilter =  this.idInput.current.value;


      const newList = list.filter(item => (item.first_name.toUpperCase().includes(firstNameFilter)))
        .filter(item => (item.last_name.toUpperCase().includes(lastNameFilter)))
        .filter(item => (item.email.toUpperCase().includes(mailFilter)))
        .filter(item => (item.id.toString().includes(idFilter)));
      
      this.setState({people:newList});
    }

  render() {
    return (
      <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Hello {name} Welcome to React</h1>
                </header>
               <div className="row">
                                
                                <div className='col-md-1'>  <input type="text" ref={this.idInput} id="myInputName" onChange={this.mijnFilter.bind(this)} placeholder="Search for names.." title="Type in a name"></input> </div>
                                <div className='col-md-3'>  <input type="text" ref={this.firstName} id="myInputName" onChange={this.mijnFilter.bind(this)} placeholder="Search for names.." title="Type in a name"></input> </div>
                                <div className='col-md-3'>  <input type="text" ref={this.lastname}  look='last_name' id="myInputLastName" onChange={this.mijnFilter.bind(this)} placeholder="Search for lastname.." title="Type in a name"></input> </div>
                                <div className='col-md-3'>  <input type="text" ref={this.mail}   look='email' id="myInputMail" onChange={this.mijnFilter.bind(this)} placeholder="Search for mail.." title="Type in a name"></input> </div>
            </div>
                <div className="row">
                                <div className='col-md-1'> Id :</div>
                                <div className='col-md-3'> Name :</div>
                                <div className='col-md-3'> Last Name :</div>
                                <div className='col-md-3'> E-mail :</div>
                                <div className='col-md-2'>  </div>
                               
                        </div> 
{this.state.people.map((person,index)=>{
                        return  (                            
                        <div> 
                              <ul className="list-group">
                                                  <Person 
                                                      key={index}
                                                      id={person.id}
                                                      name={person.first_name}
                                                      sname={person.last_name}
                                                      mail={person.email}
                                                  />
                              

                                </ul>
                          </div>            
                                )
                    })                              
                            
                }
     

        
      </div>
    );
  }
}

export default App;
