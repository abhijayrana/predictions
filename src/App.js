import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Release from "./releasenotes";





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
            ], selectedTeam: '', };
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
            this.setState({selectedTeam: this.state.teamListNames[this.state.teamName]})
            
        }
        handleOtherSelect = (event) => {
            this.setState({teamTwo: event.target.value});
        }
        
        resetDropdown = () => {
            this.setState({teamName: "", teamTwo: "", screen: "0", selectedTeam: ''})
        }
        
        homePage = () => {
            this.setState({screen: "0", teamName: "", teamTwo: ""})
        }
        
        handleStandings = () => {
            this.setState({screen: "1", teamName: "1", teamTwo: ""})
        }
        handleMatches = () => {
            this.setState({screen: "2", teamName: "", teamTwo: ""})
        }
        handlePredictions = () => {
            this.setState({screen: "0", teamName: "", teamTwo: ""})
        }
        
        //all return functions
        returnTeam = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].team.name
                    }
        }
            }
            
    }
        returnTeamTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].team.name
                    }
        }
            }
            
    }
        returnPoints = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].points
                    }
        }
            }
            
    }
        returnPointsTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].points
                    }
        }
            }
            
    }
        returnWins = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].won
                    }
        }
            }
            
    }
        returnWinsTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].won
                    }
        }
            }
            
    } 
        returnLoss = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].lost
                    }
        }
            }
            
    }
        returnLossTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].lost
                    }
        }
            }
            
    }
        returnDraws = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].draw
                    }
        }
            }
            
    }
        returnDrawsTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].draw
                    }
        }
            }
            
    }
        returnPosition = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].position
                    }
        }
            }
            
    }
        returnPositionTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].position
                    }
        }
            }
            
    }
        returnPlayed = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].playedGames
                    }
        }
            }
            
    }
        returnPlayedTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].playedGames
                    }
        }
            }
            
    }
        returngd = () => {
            if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].goalDifference
                    }
        }
            }
            
    }
        returngdTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].goalDifference
                    }
        }
            }
            
    }
        algorithm = () => {
             if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].points + (this.state.teams[0].table[key2].won - this.state.teams[0].table[key2].lost)
                    }
        }
            }
            
    } 
        algorithmTwo = () => {
             if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        return this.state.teams[0].table[key2].points + (this.state.teams[0].table[key2].won - this.state.teams[0].table[key2].lost)
                    }
        }
            }
            
    } 
        percent = () => {
            if(this.state.teamName && this.state.teamTwo && this.state.screen == "0") {
                return (Math.floor((this.algorithm()/(this.algorithm() + this.algorithmTwo()))*10000))/100 + '%'
            } 
        }
        percentTwo = () => {
            if(this.state.teamName && this.state.teamTwo && this.state.screen == "0") {
                let number = (Math.floor((this.algorithm()/(this.algorithm() + this.algorithmTwo()))*10000))/100
                return  (Math.round(100*(100-number)))/100 + '%'
            } 
        }
        
        aboutPage = () => {
            this.setState({screen: "3"})
        }
        releaseNotes = () => {
            this.setState({screen: "4"})
        }
       

        
        
        
render(){  
    const resetStyle = {
        padding: "5px",
        color: "white",
        backgroundColor: "navy",
        border: "none",
    };
    const theCoolStyle = {
        padding: "5px",
        color: "black",
        backgroundColor: "white",
        border: "none",
    };
    const headerOne = {
        padding: "10px",
        fontSize: 15,
    };
    const divider = {
        color: "white"
    };
    const astyle = {
       display: "flex",
          justifyContent: "center",
          alignItems: "center"
    }
    const bodyStyle = {
        padding: "10px",
        fontSize: 20,
        display: "flex",
          justifyContent: "center",
          alignItems: "center"
    };
    const images = {
        height: 100,
        width: 100
    }
    const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
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
    
    let hello = 'Yo'
    let players = []
    if (this.state.teamName) {
    players = [
        {position: "1", name: this.state.teams[0].table[0].team.name, points: this.state.teams[0].table[0].points, wins: this.state.teams[0].table[0].won, losses: this.state.teams[0].table[0].lost, ties: this.state.teams[0].table[0].draw, gd: this.state.teams[0].table[0].goalDifference},
        {position: "2", name: this.state.teams[0].table[1].team.name, points: this.state.teams[0].table[1].points, wins: this.state.teams[0].table[1].won, losses: this.state.teams[0].table[1].lost, ties: this.state.teams[0].table[1].draw, gd: this.state.teams[0].table[1].goalDifference},
        {position: "3", name: this.state.teams[0].table[2].team.name, points: this.state.teams[0].table[2].points, wins: this.state.teams[0].table[2].won, losses: this.state.teams[0].table[2].lost, ties: this.state.teams[0].table[2].draw, gd: this.state.teams[0].table[2].goalDifference},
        {position: "4", name: this.state.teams[0].table[3].team.name, points: this.state.teams[0].table[3].points, wins: this.state.teams[0].table[3].won, losses: this.state.teams[0].table[3].lost, ties: this.state.teams[0].table[3].draw, gd: this.state.teams[0].table[3].goalDifference},
        {position: "5", name: this.state.teams[0].table[4].team.name, points: this.state.teams[0].table[4].points, wins: this.state.teams[0].table[4].won, losses: this.state.teams[0].table[4].lost, ties: this.state.teams[0].table[4].draw, gd: this.state.teams[0].table[4].goalDifference},
        {position: "6", name: this.state.teams[0].table[5].team.name, points: this.state.teams[0].table[5].points, wins: this.state.teams[0].table[5].won, losses: this.state.teams[0].table[5].lost, ties: this.state.teams[0].table[5].draw, gd: this.state.teams[0].table[5].goalDifference},
        {position: "7", name: this.state.teams[0].table[6].team.name, points: this.state.teams[0].table[6].points, wins: this.state.teams[0].table[6].won, losses: this.state.teams[0].table[6].lost, ties: this.state.teams[0].table[6].draw, gd: this.state.teams[0].table[6].goalDifference},
        {position: "8", name: this.state.teams[0].table[7].team.name, points: this.state.teams[0].table[7].points, wins: this.state.teams[0].table[7].won, losses: this.state.teams[0].table[7].lost, ties: this.state.teams[0].table[7].draw, gd: this.state.teams[0].table[7].goalDifference},
        {position: "9", name: this.state.teams[0].table[8].team.name, points: this.state.teams[0].table[8].points, wins: this.state.teams[0].table[8].won, losses: this.state.teams[0].table[8].lost, ties: this.state.teams[0].table[8].draw, gd: this.state.teams[0].table[8].goalDifference},
        {position: "10", name: this.state.teams[0].table[9].team.name, points: this.state.teams[0].table[9].points, wins: this.state.teams[0].table[9].won, losses: this.state.teams[0].table[9].lost, ties: this.state.teams[0].table[9].draw, gd: this.state.teams[0].table[9].goalDifference},
        {position: "11", name: this.state.teams[0].table[10].team.name, points: this.state.teams[0].table[10].points, wins: this.state.teams[0].table[10].won, losses: this.state.teams[0].table[10].lost, ties: this.state.teams[0].table[10].draw, gd: this.state.teams[0].table[10].goalDifference},
        {position: "12", name: this.state.teams[0].table[11].team.name, points: this.state.teams[0].table[11].points, wins: this.state.teams[0].table[11].won, losses: this.state.teams[0].table[11].lost, ties: this.state.teams[0].table[11].draw, gd: this.state.teams[0].table[11].goalDifference},
        {position: "13", name: this.state.teams[0].table[12].team.name, points: this.state.teams[0].table[12].points, wins: this.state.teams[0].table[12].won, losses: this.state.teams[0].table[12].lost, ties: this.state.teams[0].table[12].draw, gd: this.state.teams[0].table[12].goalDifference},
        {position: "14", name: this.state.teams[0].table[13].team.name, points: this.state.teams[0].table[13].points, wins: this.state.teams[0].table[13].won, losses: this.state.teams[0].table[13].lost, ties: this.state.teams[0].table[13].draw, gd: this.state.teams[0].table[13].goalDifference},
        {position: "15", name: this.state.teams[0].table[14].team.name, points: this.state.teams[0].table[14].points, wins: this.state.teams[0].table[14].won, losses: this.state.teams[0].table[14].lost, ties: this.state.teams[0].table[14].draw, gd: this.state.teams[0].table[14].goalDifference},
        {position: "16", name: this.state.teams[0].table[15].team.name, points: this.state.teams[0].table[15].points, wins: this.state.teams[0].table[15].won, losses: this.state.teams[0].table[15].lost, ties: this.state.teams[0].table[15].draw, gd: this.state.teams[0].table[15].goalDifference},
        {position: "17", name: this.state.teams[0].table[16].team.name, points: this.state.teams[0].table[16].points, wins: this.state.teams[0].table[16].won, losses: this.state.teams[0].table[16].lost, ties: this.state.teams[0].table[16].draw, gd: this.state.teams[0].table[16].goalDifference},
        {position: "18", name: this.state.teams[0].table[17].team.name, points: this.state.teams[0].table[17].points, wins: this.state.teams[0].table[17].won, losses: this.state.teams[0].table[17].lost, ties: this.state.teams[0].table[17].draw, gd: this.state.teams[0].table[17].goalDifference},
        {position: "19", name: this.state.teams[0].table[18].team.name, points: this.state.teams[0].table[18].points, wins: this.state.teams[0].table[18].won, losses: this.state.teams[0].table[18].lost, ties: this.state.teams[0].table[18].draw, gd: this.state.teams[0].table[18].goalDifference},
        {position: "20", name: this.state.teams[0].table[19].team.name, points: this.state.teams[0].table[19].points, wins: this.state.teams[0].table[19].won, losses: this.state.teams[0].table[19].lost, ties: this.state.teams[0].table[19].draw, gd: this.state.teams[0].table[19].goalDifference},

    ]}
    
    const renderPlayer = (player, index) => {
        return (
        <tr key={index}>
            <td>{player.name} </td>
            <td> {player.position}</td>
            <td>{player.wins} </td>
            <td>{player.losses}</td>
            <td>{player.ties} </td>
            <td>{player.gd} </td>
            <td>{player.points} </td>
        </tr>
        )
    }
    
    //texts - positionText, scoreText, etc.
    let positionText = ''
    if (this.state.screen == "0") {positionText = '- Position -'}
    let scoreText = ''
    if (this.state.screen == "0") {scoreText = '- Team Rating -'}
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
    
    //text code
    let text = ''
        if(this.algorithm() > this.algorithmTwo() && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0") {
            text= teamList[this.state.teamName] + ' has a team rating of ' + this.algorithm() + ' and ' + teamList[this.state.teamTwo] + ' has a team rating of ' + this.algorithmTwo() + ', so ' + teamList[this.state.teamName] + ' has a ' + this.percent() + ' chance of winning.'
        } 
        else if(this.algorithm() < this.algorithmTwo() && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0") {
            text= teamList[this.state.teamTwo] + ' has a team rating of ' + this.algorithmTwo() + ' and ' + teamList[this.state.teamName] + ' has a team rating of ' + this.algorithm() + ', so ' + teamList[this.state.teamTwo] + ' has a ' + this.percentTwo() + ' chance of winning.'
        } 
        else if(this.algorithm() == this.algorithmTwo() && teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0") {
            text= teamList[this.state.teamName] + ' and ' + teamList[this.state.teamTwo] + ' have equal team ratings, ' + this.algorithm() + ' and ' + this.algorithmTwo() + ', so they will tie.'
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
    
    let theHeader = ''
    if (this.state.screen == "0"){
        theHeader = 'Predictions, Predictions, Predictions.'
    } else if(this.state.screen == "1") {   
        theHeader = 'The Premier League Table.'
    } else if(this.state.screen == "2") {
        theHeader = 'Work in progress.'
    } else if(this.state.screen == "3") {
        theHeader = 'About';
    } else if(this.state.screen == "4"){
        theHeader = 'Release Notes'
    }
    
    let table = ''
    if (this.state.screen == "1") {
        table = <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Points</th>
      <th>Position</th>
      <th>Wins</th>
      <th>Losses</th>
      <th>Ties</th>
      <th> Goal Difference </th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    {players.map(renderPlayer)}
  </tbody>
</ReactBootStrap.Table>  
    }
    
    let aboutText = ''
    if (this.state.screen == "3"){
        aboutText = "This website predicts win-loss percentages between two teams based on live data. Other features include upcoming game predictions and a live table. Only premier league for now."
    }
    
    let releaseText = '   '
    if (this.state.screen == "4") {
        releaseText = <Release/>
    }
    

return (
    <div className="App" >
    <p/>
    <button onClick={this.homePage} style={theCoolStyle}> <h1> Predictions, Inc. </h1> </button>
    <p/>
    <button onClick={this.handleStandings}> Standings </button>
    <button onClick={this.handlePredictions}> Team Predictions </button>
    <button onClick={this.handleMatches}> Upcoming Matches </button>
    <p/>
    <h2> {theHeader} </h2>
    <p/>
    {table}
    {aboutText}
    {input}
    {releaseText}
    {inputTwo}
            <p/>
    <h2> {this.returnTeam()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.returnTeamTwo()}</h2>
    <img style={images} src={imageOne} alt=''/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style={images} src={imageTwo} alt=''/>
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
        <body style={bodyStyle}> <b>{this.percent()}</b> {percentText} <b>{this.percentTwo()}</b></body>
            <p/>
        {resetButton}
    <p/>
    <div style={phantom} />
            <div style={style}>
            <button onClick={this.aboutPage}> About </button>
            <button onClick={this.releaseNotes}> Release Notes </button>
            </div>
    </div>
  );
}

}
//app.js>

const RenderRow = (props) =>{
 
}
const container = document.createElement('div');
document.body.appendChild(container);
export default App;