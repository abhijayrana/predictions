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
        this.state = {teamName: "", teamTwo: "", screen: "0", teams: [], apiteam: '', teamIndex: '', teamListNames: [
            "Arsenal FC", 
            "Aston Villa FC", 
            "AFC Bournemouth", 
            "Brighton & Hove Albion FC", 
            "Burnley FC", 
            "Chelsea FC", 
            "Crystal Palace FC", 
            "Everton FC", 
            "Leicester City FC", 
            "Liverpool FC", 
            "Manchester City FC", 
            "Manchester United FC", 
            "Newcastle United FC", 
            "Norwich City FC", 
            "Sheffield United FC", 
            "Southampton FC", 
            "Tottenham Hotspur FC", 
            "Watford FC", 
            "West Ham United FC", 
            "Wolverhampton Wanderers FC"
            ], selectedTeam: ''};
            this.handleSelect = this.handleSelect.bind(this);

    }
        componentDidMount = async () => {    
            fetch("http://api.football-data.org/v2/competitions/PL/standings", {
                method: 'GET',
                headers: {
                    'X-Auth-Token': '3163ef1e43724739b183eae4cc97ea95'
                    
                }
            })
            
            .then((response) => response.json())
            
            .then((responseText) => {
                console.log("Actual Resp ::");
                console.log(responseText);
                this.setState({teams: responseText.standings});
                
                console.log("Standings:: ")
                
                console.log(this.state.teams);
                
                let x = this.state.teamIndex;
                
                for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == x){
                        console.log("It worked." + key2)
                    }
        
                    
                    
                    console.log("Team Name: " + this.state.teams[0].table[key2].team.name
                            + ", position: " + this.state.teams[0].table[key2].position 
                            + ", won: " + this.state.teams[0].table[key2].won 
                            + ", lost: " + this.state.teams[0].table[key2].lost 
                               
                               )
                }
                
            })
        }

        handleSelect = (event) => {
            event.preventDefault();
            this.setState({teamName: event.target.value});
            //let key1 = this.state.selectedTeam
            this.setState({selectedTeam: this.state.teamListNames[this.state.teamName]})
            //this.setState({teamIndex: this.state.teams[0].table[key1].position})
            
        }
        handleOtherSelect = (event) => {
            this.setState({teamTwo: event.target.value});
        }
        resetDropdown = () => {
            this.setState({teamName: "20", teamTwo: "20", screen: "0", selectedTeam: ''})
        }
        handleStandings = () => {
            this.setState({screen: "1", teamName: "20", teamTwo: "20"})
        }
        handleMatches = () => {
            this.setState({screen: "2", teamName: "20", teamTwo: "20"})
        }
        handlePredictions = () => {
            this.setState({screen: "0", teamName: "20", teamTwo: "20"})
        }
        
        //all return functions
        returnTeam = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].team.name
                    }
        }
            }
            
    }
        returnTeamTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].team.name
                    }
        }
            }
            
    }
        returnPoints = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].points
                    }
        }
            }
            
    }
        returnPointsTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].points
                    }
        }
            }
            
    }
        returnWins = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].won
                    }
        }
            }
            
    }
        returnWinsTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].won
                    }
        }
            }
            
    } 
        returnLoss = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].lost
                    }
        }
            }
            
    }
        returnLossTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].lost
                    }
        }
            }
            
    }
        returnDraws = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].draw
                    }
        }
            }
            
    }
        returnDrawsTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].draw
                    }
        }
            }
            
    }
        returnPosition = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].position
                    }
        }
            }
            
    }
        returnPositionTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].position
                    }
        }
            }
            
    }
        returnPlayed = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].playedGames
                    }
        }
            }
            
    }
        returnPlayedTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].playedGames
                    }
        }
            }
            
    }
        returngd = () => {
            if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].goalDifference
                    }
        }
            }
            
    }
        returngdTwo = () => {
            if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].goalDifference
                    }
        }
            }
            
    }
        algorithm = () => {
             if(this.state.teamName) {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].won + this.state.teams[0].table[key2].lost
                    }
        }
            }
            
    } 
        algorithmTwo = () => {
             if(this.state.teamTwo) {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].won + this.state.teams[0].table[key2].lost
                    }
        }
            }
            
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
        43, 
        54, 
        43, 
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
        52
    ];
    let teamOneWin = scoreList[this.state.teamName]/(scoreList[this.state.teamName] + scoreList[this.state.teamTwo])
    let teamTwoWin = scoreList[this.state.teamTwo]/(scoreList[this.state.teamTwo] + scoreList[this.state.teamName])
    
    //texts - positionText, scoreText, etc.
    let positionText = ''
    if (this.state.screen == "0") {positionText = '- Position -'}
    let scoreText = ''
    if (this.state.screen == "0") {scoreText = '- Total Score -'}
    let pointText = ''
    if (this.state.screen == "0") {pointText = '- Points -'}
    let winText = ''
    if (this.state.screen == "0") {winText = '- Wins -'}
    let lossText = ''
    if (this.state.screen == "0") {lossText = '- Losses -'}
    let drawText = ''
    if (this.state.screen == "0") {drawText = '- Draws -'}
    let playedText = ''
    if (this.state.screen == "0") {playedText = '- Played -'}
    let gdText = ''
    if (this.state.screen == "0") {gdText = '- Goal Difference -'}
    let percentText = ''
    if (this.state.screen == "0") {percentText = '- Win Percentage -'}
    let resetButton = ''
    
    if (this.state.screen == "0") {
        resetButton = <button onClick={this.resetDropdown} style={resetStyle}> Reset</button>
    }
    
    let text = scoreList[this.state.teamTwo];
        if(scoreList[this.state.teamName] > scoreList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0") {
            text= teamList[this.state.teamName] + ' beat ' + teamList[this.state.teamTwo] + ' ' + scoreList[this.state.teamName] + ' to ' + scoreList[this.state.teamTwo] + ', so ' + teamList[this.state.teamName] + ' have a ' + (Math.floor(teamOneWin*10000))/100 + '% chance of winning.'
        } 
        else if(scoreList[this.state.teamName] < scoreList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0") {
           text= teamList[this.state.teamTwo] + ' beat ' + teamList[this.state.teamName] + ' ' + scoreList[this.state.teamTwo] + ' to ' + scoreList[this.state.teamName] + ', so ' + teamList[this.state.teamTwo] + ' have a ' + (Math.floor(teamTwoWin*10000))/100 + '% chance of winning.'
        } 
        else if(scoreList[this.state.teamName] == scoreList[this.state.teamTwo] && teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0") {
            text= teamList[this.state.teamName] + ' and ' + teamList[this.state.teamTwo] + ' will tie, ' + scoreList[this.state.teamName] + ' to ' + scoreList[this.state.teamTwo] + '.'
        } 
        else if(teamList[this.state.teamName] == teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0" && this.state.teamName != "") {
            text='Please choose two different teams!'
        } else {
            text=''
        }
    
    let teamOne = ''
        if(this.state.teamName<20 && this.state.screen == "0") {
            teamOne = teamList[this.state.teamName]
        }
    let teamTwo = ''
        if(this.state.teamTwo<20 && this.state.screen == "0") {
            teamTwo = teamList[this.state.teamTwo]
        }
    
    let divide = <text style={divider}> and </text>

    
    let scoreTeamOne = ''
        if(teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0"){
        scoreTeamOne=<text style={bodyStyle}> {scoreList[this.state.teamName]} </text>
        }
    let scoreTeamTwo = ''
        if(teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0"){
        scoreTeamTwo=<text style={bodyStyle}> {scoreList[this.state.teamTwo]} </text>
        }    
    let percentOne = ''
        if(teamList[this.state.teamName] == teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0"){
            percentOne=''
        }
        else if((Math.floor(teamOneWin*10000))/100 > 0 && this.state.screen == "0"){
            percentOne=(Math.floor(teamOneWin*10000))/100 + '%'
        } 
    let percentTwo = ''
        if(teamList[this.state.teamName] == teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0"){
            percentTwo=''
        }
        else if((Math.floor(teamTwoWin*10000))/100 > 0 && this.state.screen == "0"){
            percentTwo=(Math.floor(teamTwoWin*10000))/100 + '%'
        }
    
        
    let imageOne=''
    if(this.state.teamName=="0"&& this.state.screen == "0"){imageOne=require("./arsenal.jpeg")}
    if(this.state.teamName=="1"&& this.state.screen == "0"){imageOne=require("./villa.png")}
    if(this.state.teamName=="2"&& this.state.screen == "0"){imageOne=require("./bournemouth.png")}
    if(this.state.teamName=="3"&& this.state.screen == "0"){imageOne=require("./brighton.png")}
    if(this.state.teamName=="4"&& this.state.screen == "0"){imageOne=require("./burnley.jpeg")}
    if(this.state.teamName=="5"&& this.state.screen == "0"){imageOne=require("./chelsea.png")}
    if(this.state.teamName=="6"&& this.state.screen == "0"){imageOne=require("./palace.png")}
    if(this.state.teamName=="7"&& this.state.screen == "0"){imageOne=require("./everton.png")}
    if(this.state.teamName=="8"&& this.state.screen == "0"){imageOne=require("./leicester.png")}
    if(this.state.teamName=="9"&& this.state.screen == "0"){imageOne=require("./liverpool.jpeg")}
    if(this.state.teamName=="10"&& this.state.screen == "0"){imageOne=require("./city.png")}
    if(this.state.teamName=="11"&& this.state.screen == "0"){imageOne=require("./united.png")}
    if(this.state.teamName=="12"&& this.state.screen == "0"){imageOne=require("./newcastle.png")}
    if(this.state.teamName=="13"&& this.state.screen == "0"){imageOne=require("./norwich.png")}
    if(this.state.teamName=="14"&& this.state.screen == "0"){imageOne=require("./sheff.png")}
    if(this.state.teamName=="15"&& this.state.screen == "0"){imageOne=require("./southampton.png")}
    if(this.state.teamName=="16"&& this.state.screen == "0"){imageOne=require("./tottenham.jpeg")}
    if(this.state.teamName=="17"&& this.state.screen == "0"){imageOne=require("./watford.png")}
    if(this.state.teamName=="18"&& this.state.screen == "0"){imageOne=require("./westham.png")}
    if(this.state.teamName=="19"&& this.state.screen == "0"){imageOne=require("./wolves.png")}
    
    let imageTwo=''
    if(this.state.teamTwo=="0"&& this.state.screen == "0"){imageTwo=require("./arsenal.jpeg")}
    if(this.state.teamTwo=="1"&& this.state.screen == "0"){imageTwo=require("./villa.png")}
    if(this.state.teamTwo=="2"&& this.state.screen == "0"){imageTwo=require("./bournemouth.png")}
    if(this.state.teamTwo=="3"&& this.state.screen == "0"){imageTwo=require("./brighton.png")}
    if(this.state.teamTwo=="4"&& this.state.screen == "0"){imageTwo=require("./burnley.jpeg")}
    if(this.state.teamTwo=="5"&& this.state.screen == "0"){imageTwo=require("./chelsea.png")}
    if(this.state.teamTwo=="6"&& this.state.screen == "0"){imageTwo=require("./palace.png")}
    if(this.state.teamTwo=="7"&& this.state.screen == "0"){imageTwo=require("./everton.png")}
    if(this.state.teamTwo=="8"&& this.state.screen == "0"){imageTwo=require("./leicester.png")}
    if(this.state.teamTwo=="9"&& this.state.screen == "0"){imageTwo=require("./liverpool.jpeg")}
    if(this.state.teamTwo=="10"&& this.state.screen == "0"){imageTwo=require("./city.png")}
    if(this.state.teamTwo=="11"&& this.state.screen == "0"){imageTwo=require("./united.png")}
    if(this.state.teamTwo=="12"&& this.state.screen == "0"){imageTwo=require("./newcastle.png")}
    if(this.state.teamTwo=="13"&& this.state.screen == "0"){imageTwo=require("./norwich.png")}
    if(this.state.teamTwo=="14"&& this.state.screen == "0"){imageTwo=require("./sheff.png")}
    if(this.state.teamTwo=="15"&& this.state.screen == "0"){imageTwo=require("./southampton.png")}
    if(this.state.teamTwo=="16"&& this.state.screen == "0"){imageTwo=require("./tottenham.jpeg")}
    if(this.state.teamTwo=="17"&& this.state.screen == "0"){imageTwo=require("./watford.png")}
    if(this.state.teamTwo=="18"&& this.state.screen == "0"){imageTwo=require("./westham.png")}
    if(this.state.teamTwo=="19"&& this.state.screen == "0"){imageTwo=require("./wolves.png")}

    
    let input = ''
    if (this.state.screen == "0") {
        input = <label>
            Pick your team: 
                <select value={this.state.teamName} onChange={this.handleSelect}>
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
                    <option value="9"> Liverpool FC</option>
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
    }
     let inputTwo = ''
    if (this.state.screen == "0") {
        inputTwo = <label>
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
    }
    console.log(this.state.teamListNames[this.state.teamName])
    

return (
    <div className="App" >
    <p/>
    <button onClick={this.handleStandings}> Standings </button>
    <button onClick={this.handlePredictions}> Team Predictions </button>
    <button onClick={this.handleMatches}> Upcoming Matches </button>
    <p/>
    <h1> Predictions, Predictions, Predictions.</h1> 
    <p/>
    {divide}
    {input}
    {divide}
    {inputTwo}
            <p/>
    <h2> {this.returnTeam()} {divide} {divide} {divide} {divide} {divide} {this.returnTeamTwo()}</h2>
    <img style={images} src={imageOne} alt=''/> {divide} {divide}{divide} {divide}{divide} {divide}{divide} {divide}{divide} {divide}{divide} <img style={images} src={imageTwo} alt=''/>
            <p/>
            {text}
            <p/>
        <body style={bodyStyle}> <b>{this.returnPosition()}</b> {positionText} <b>{this.returnPositionTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnPoints()}</b> {pointText} <b>{this.returnPointsTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnPlayed()}</b> {playedText} <b>{this.returnPlayedTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnWins()}</b> {winText} <b>{this.returnWinsTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnLoss()}</b> {lossText} <b>{this.returnLossTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnDraws()}</b> {drawText} <b>{this.returnDrawsTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returngd()}</b> {gdText} <b>{this.returngdTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.algorithm()}</b> {scoreText} <b>{this.algorithmTwo()}</b></body>
        <body style={bodyStyle}> <b>{percentOne}</b> {percentText} <b>{percentTwo}</b></body>
            <p/>
        {resetButton}
    
    </div>
  );
}

}
//app.js>


const container = document.createElement('div');
document.body.appendChild(container);
export default App;