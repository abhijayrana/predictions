import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import liverpool from './liverpool.jpeg';
import arsenal from './arsenal.jpeg';
import brighton from './brighton.png';
import villa from './villa.png';
import bournemouth from './bournemouth.png';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {teamName: "20", teamTwo: "20"}
            this.handleSelect = this.handleSelect.bind(this);

    }

        handleSelect = (event) => {
            this.setState({teamName: event.target.value});
        }
        handleOtherSelect = (event) => {
            this.setState({teamTwo: event.target.value});
        }
        resetDropdown = () => {
            this.setState({teamName: "20", teamTwo: "20"})
        }
        
        
render(){  
    const resetStyle = {
        padding: "5px",
        color: "white",
        backgroundColor: "navy"
    };
    const headerOne = {
        padding: "10px",
        fontSize: 15,
    };
    const divider = {
        color: "lightblue"
    };
    const bodyStyle = {
        padding: "10px",
        fontSize: 20
    };
    const images = {
        height: 100,
        width: 100
    }
    
    const teamList = [
        'Arsenal', 
        'Aston Villa', 
        'AFC Bournemouth',
        'Brighton and Hove Albion', 
        'Burnley',
        'Chelsea',
        'Crystal', 
        'Everton', 
        'Leicester City', 
        'Liverpool', 
        'Manchester City',
        'Manchester United', 
        'Newcastle', 
        'Norwich City',
        'Sheffield', 
        'Southampton', 
        'Tottenham Hotspur',
        'Watford', 
        'West Ham United', 
        'Wolverhampton Wanderers', 
        'Select a team.', 
        'Select another team.'
    ];
    const scoreList = [
        43, 
        27,
        27, 
        33, 
        42, 
        54, 
        42, 
        41,
        55, 
        90, 
        63, 
        49, 
        39, 
        21, 
        44,
        40,
        45,
        28, 
        27, 
        28
    ];
    let teamOneWin = scoreList[this.state.teamName]/(scoreList[this.state.teamName] + scoreList[this.state.teamTwo])
    let teamTwoWin = scoreList[this.state.teamTwo]/(scoreList[this.state.teamTwo] + scoreList[this.state.teamName])
    
    let text = scoreList[this.state.teamTwo];
        if(scoreList[this.state.teamName] > scoreList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.') {
            text= teamList[this.state.teamName] + ' beat ' + teamList[this.state.teamTwo] + ' ' + scoreList[this.state.teamName] + ' to ' + scoreList[this.state.teamTwo] + ', so ' + teamList[this.state.teamName] + ' have a ' + (Math.floor(teamOneWin*10000))/100 + '% chance of winning.'
        } 
        else if(scoreList[this.state.teamName] < scoreList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.') {
           text= teamList[this.state.teamTwo] + ' beat ' + teamList[this.state.teamName] + ' ' + scoreList[this.state.teamTwo] + ' to ' + scoreList[this.state.teamName] + ', so ' + teamList[this.state.teamTwo] + ' have a ' + (Math.floor(teamTwoWin*10000))/100 + '% chance of winning.'
        } 
        else if(scoreList[this.state.teamName] == scoreList[this.state.teamTwo] && teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.') {
            text= teamList[this.state.teamName] + ' and ' + teamList[this.state.teamTwo] + ' will tie, ' + scoreList[this.state.teamName] + ' to ' + scoreList[this.state.teamTwo] + '.'
        } 
        else if(teamList[this.state.teamName] == teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.') {
            text='Please choose two different teams!'
        }
        else {
            text=''
        }
    let teamOne = ''
        if(this.state.teamName<20) {
            teamOne = teamList[this.state.teamName]
        }
    let teamTwo = ''
        if(this.state.teamTwo<20) {
            teamTwo = teamList[this.state.teamTwo]
        }
    
    let divide = <text style={divider}> and </text>
    
    let scoreTeamOne = ''
        if(teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.'){
        scoreTeamOne=<text style={bodyStyle}> {scoreList[this.state.teamName]} </text>
        }
    let scoreTeamTwo = ''
        if(teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.'){
        scoreTeamTwo=<text style={bodyStyle}> {scoreList[this.state.teamTwo]} </text>
        }    
    let percentOne = ''
        if(teamList[this.state.teamName] == teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.'){
            percentOne=''
        }
        else if((Math.floor(teamOneWin*10000))/100 > 0){
            percentOne=(Math.floor(teamOneWin*10000))/100 + '%'
        } 
    let percentTwo = ''
        if(teamList[this.state.teamName] == teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.'){
            percentTwo=''
        }
        else if((Math.floor(teamTwoWin*10000))/100 > 0){
            percentTwo=(Math.floor(teamTwoWin*10000))/100 + '%'
        } 
    let imageOne=''
    if(this.state.teamName=="0"){imageOne=require("./arsenal.jpeg")}
    if(this.state.teamName=="1"){imageOne=require("./villa.png")}
    if(this.state.teamName=="2"){imageOne=require("./bournemouth.png")}
    if(this.state.teamName=="3"){imageOne=require("./brighton.png")}
    if(this.state.teamName=="4"){imageOne=require("./burnley.jpeg")}
    if(this.state.teamName=="5"){imageOne=require("./chelsea.png")}
    if(this.state.teamName=="6"){imageOne=require("./palace.png")}
    if(this.state.teamName=="7"){imageOne=require("./everton.png")}
    if(this.state.teamName=="8"){imageOne=require("./leicester.png")}
    if(this.state.teamName=="9"){imageOne=require("./liverpool.jpeg")}
    if(this.state.teamName=="10"){imageOne=require("./city.png")}
    if(this.state.teamName=="11"){imageOne=require("./united.png")}
    if(this.state.teamName=="12"){imageOne=require("./newcastle.png")}
    if(this.state.teamName=="13"){imageOne=require("./norwich.png")}
    if(this.state.teamName=="14"){imageOne=require("./sheff.png")}
    if(this.state.teamName=="15"){imageOne=require("./southampton.png")}
    if(this.state.teamName=="16"){imageOne=require("./tottenham.jpeg")}
    if(this.state.teamName=="17"){imageOne=require("./watford.png")}
    if(this.state.teamName=="18"){imageOne=require("./westham.png")}
    if(this.state.teamName=="19"){imageOne=require("./wolves.png")}
    
    let imageTwo=''
    if(this.state.teamTwo=="0"){imageTwo=require("./arsenal.jpeg")}
    if(this.state.teamTwo=="1"){imageTwo=require("./villa.png")}
    if(this.state.teamTwo=="2"){imageTwo=require("./bournemouth.png")}
    if(this.state.teamTwo=="3"){imageTwo=require("./brighton.png")}
    if(this.state.teamTwo=="4"){imageTwo=require("./burnley.jpeg")}
    if(this.state.teamTwo=="5"){imageTwo=require("./chelsea.png")}
    if(this.state.teamTwo=="6"){imageTwo=require("./palace.png")}
    if(this.state.teamTwo=="7"){imageTwo=require("./everton.png")}
    if(this.state.teamTwo=="8"){imageTwo=require("./leicester.png")}
    if(this.state.teamTwo=="9"){imageTwo=require("./liverpool.jpeg")}
    if(this.state.teamTwo=="10"){imageTwo=require("./city.png")}
    if(this.state.teamTwo=="11"){imageTwo=require("./united.png")}
    if(this.state.teamTwo=="12"){imageTwo=require("./newcastle.png")}
    if(this.state.teamTwo=="13"){imageTwo=require("./norwich.png")}
    if(this.state.teamTwo=="14"){imageTwo=require("./sheff.png")}
    if(this.state.teamTwo=="15"){imageTwo=require("./southampton.png")}
    if(this.state.teamTwo=="16"){imageTwo=require("./tottenham.jpeg")}
    if(this.state.teamTwo=="17"){imageTwo=require("./watford.png")}
    if(this.state.teamTwo=="18"){imageTwo=require("./westham.png")}
    if(this.state.teamTwo=="19"){imageTwo=require("./wolves.png")}




return (
    <div className="App" >
    <p/>
    <h1> Predictions, Predictions, Predictions.</h1> 
    <p/>
    {divide}
        <label>
            Pick your team: 
                <select onChange={this.handleSelect} value={this.state.teamName}>
                    <option value="20"> Select a team </option>
                    <option value="0"> Arsenal </option>
                    <option value="1"> Aston Villa </option>
                    <option value="2"> AFC Bournemouth </option>
                    <option value="3"> Brighton and Hove Albion </option>
                    <option value="4"> Burnley </option>
                    <option value="5"> Chelsea </option>
                    <option value="6"> Crystal Palace </option>
                    <option value="7"> Everton </option>
                    <option value="8"> Leicester City </option>
                    <option value="9">  Liverpool </option>
                    <option value="10"> Manchester City </option>
                    <option value="11"> Manchester United </option>
                    <option value="12"> Newcastle United  </option>
                    <option value="13"> Norwich City </option>
                    <option value="14"> Sheffield United </option>
                    <option value="15"> Southampton </option>
                    <option value="16"> Tottenham Hotspur </option>
                    <option value="17"> Watford </option>
                    <option value="18"> West Ham United </option>
                    <option value="19"> Wolverhampton Wanderers </option>
                </select>
        </label>
    {divide}
      <label>
            Pick the other team: 
                <select onChange={this.handleOtherSelect} value={this.state.teamTwo}>                    
                    <option value="20"> Select another team </option>
                    <option value="0"> Arsenal </option>
                    <option value="1"> Aston Villa </option>
                    <option value="2"> AFC Bournemouth </option>
                    <option value="3"> Brighton and Hove Albion </option>
                    <option value="4"> Burnley </option>
                    <option value="5"> Chelsea </option>
                    <option value="6"> Crystal Palace </option>
                    <option value="7"> Everton </option>
                    <option value="8"> Leicester City </option>
                    <option value="9">  Liverpool </option>
                    <option value="10"> Manchester City </option>
                    <option value="11"> Manchester United </option>
                    <option value="12"> Newcastle United  </option>
                    <option value="13"> Norwich City </option>
                    <option value="14"> Sheffield United </option>
                    <option value="15"> Southampton </option>
                    <option value="16"> Tottenham Hotspur </option>
                    <option value="17"> Watford </option>
                    <option value="18"> West Ham United </option>
                    <option value="19"> Wolverhampton Wanderers </option>
                </select>
        </label>
            <p/>
    <h2> {teamOne} {divide} {divide} {divide} {divide} {divide} {teamTwo}</h2>
    <img style={images} src={imageOne} alt=''/> {divide} {divide}{divide} {divide}{divide} {divide}{divide} {divide}{divide} {divide}{divide} <img style={images} src={imageTwo} alt=''/>
            <p/>
            {text}
            <p/>
        <body style={bodyStyle}> <b>{scoreTeamOne}</b> - Score - <b>{scoreTeamTwo}</b></body>
        <body style={bodyStyle}> <b>{percentOne}</b> - Win Percentage - <b>{percentTwo}</b></body>
            <p/>
        <button onClick={this.resetDropdown} style={resetStyle}> Reset</button>
    </div>
  );
}
}



const container = document.createElement('div');
document.body.appendChild(container);
export default App;