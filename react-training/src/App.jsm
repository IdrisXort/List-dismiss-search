import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

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
    this.state={
      value:null

    }
  }
  myFunction(){
    var input, filter;var arr=[];
    input = document.getElementById("myInput");
    filter = input.value;    
    for (var i = 0; i < list.length; i++) {    
       var a = list[i].first_name;
       if(a.includes(filter)){
         
             arr.push(a)    
         
        }console.log(arr)

    }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello {name} Welcome to React</h1>
        </header>
        <input type="text" id="myInput" onChange={this.myFunction} placeholder="Search for names.." title="Type in a name"></input>
      
{()=>{var input, filter;var arr=[];
    input = document.getElementById("myInput");
    filter = input.value;    
    for (var i = 0; i < list.length; i++) {    
       var a = list[i];
       if(a.first_name.includes(filter)){
         
             arr.push(a)    
         
        console.log(arr)
        arr.map(function(person,index){
          return(
              <div>    

                <Person 
                key={index}
               
                name={person.first_name}
                surname={person.last_name}
                mail={person.email} 
                />
              </div>
        )})} 
      }
    }
  
         }{list.map(function(person,index){
          return(
              <div>    

                <Person 
                key={index}               
                name={person.first_name}
                surname={person.last_name}
                mail={person.email} 
                />
              </div>
         )})}   
                    

        
      </div>
    );
  }
}

export default App;
