import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Release from "./releasenotes";
import ReactPlayer from 'react-player'







class App extends Component{
        constructor(props){
        super(props)
        this.state = {teamName: "", teamTwo: "", screen: "0", teams: [], apiteam: '', teamIndex: '', teamListNames: 
        [
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
            ], selectedTeam: '', games: [], today: '', saData: [], leagueTeams: [], tableData: []};
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
                
                this.setState({leagueTeams: 
                    [{id: '', value: '', teamName: 'Select a Team', win: '', loss: '', draw: '', points: '', gd: '', played: '', position: ''}]
                })
                
                let teamIndex = 0;


                
                let tempdata = this.state.teams[0].table
                
                for(var key2 in tempdata.sort((a, b) => a.team.name > b.team.name ? 1 : -1)) {
                    
                    teamIndex = parseInt(key2) + 1;
                    
                  this.setState({
                          leagueTeams: this.state.leagueTeams.concat({
                          id: tempdata[key2].team.id,
                          value: teamIndex,
                          teamName: tempdata[key2].team.name,
                          win: tempdata[key2].won,
                          loss: tempdata[key2].lost,
                          draw: tempdata[key2].draw,
                          points: tempdata[key2].points,
                          gd: tempdata[key2].goalDifference,
                          played: tempdata[key2].playedGames,
                          url: tempdata[key2].team.crestUrl,
                          position: tempdata[key2].position
                      })
                  })
                }
                console.log("LEAGUETEAMS")
                console.log(this.state.leagueTeams)
                console.log(this.state.leagueTeams[1])
                
            })
            
            //other fetch ${this.state.today}
            //date stuff 
            var date = ''
            if (new Date().getDate() < 10) {
                date = '0' + new Date().getDate(); //Current Date
            } else if (new Date().getDate() >= 10) {
                date = new Date().getDate()
            }
            var month = ''
            if (new Date().getMonth() < 10) {
                month = '0' + (new Date().getMonth() + 1); 
            } else if (new Date().getMonth() >= 10) {
                month = new Date().getMonth() + 1
            }
            var year = new Date().getFullYear()
           
            this.setState({today: year+'-'+month+'-'+date})
            
            let variableSeven = this.state.today
             fetch(`http://api.football-data.org/v2/competitions/PL/matches/?dateFrom=2020-07-20&dateTo=2020-08-07`, {
                method: 'GET',
                headers: {
                    'X-Auth-Token': '3163ef1e43724739b183eae4cc97ea95'
                    
                }
            })
            
            .then((response) => response.json())
            
            .then((responseText) => {
                console.log("Actual Resp from second api::");
                console.log(responseText);
                this.setState({games: responseText.matches});
    
                
            })
            //thirdfetch
            fetch("http://api.football-data.org/v2/competitions/SA/standings", {
                method: 'GET',
                headers: {
                    'X-Auth-Token': '3163ef1e43724739b183eae4cc97ea95'
                    
                }
            })
            
            .then((response) => response.json())
            
            .then((responseText) => {
                console.log("Actual Resp from third api::");
                console.log(responseText);
                this.setState({saData: responseText.standings});
    
                
            })
        }
        
        

        handleSelect = (event) => {
            event.preventDefault();
            this.setState({teamName: event.target.value});
            console.log(this.state.teamName)
//            console.log(this.state.leagueTeams[this.state.teamName].teamName)
            this.setState({selectedTeam: this.state.teamListNames[this.state.teamName]})

        }
        handleOtherSelect = (event) => {
            this.setState({teamTwo: event.target.value});
        }
        
        handleRoll = () => {
            this.setState({isPlaying: "true"})
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
            return this.state.leagueTeams[this.state.teamName].teamName
            }
            
    }
        returnTeamTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            return this.state.leagueTeams[this.state.teamTwo].teamName
            }
            
    }
        returnPoints = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamName].points
            }
            
    }
        returnPointsTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamTwo].points
            }
            
    }
        returnWins = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamName].win
            }
            
    }
        returnWinsTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamTwo].win
            }
            
    } 
        returnLoss = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamName].loss
            }
            
    }
        returnLossTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamTwo].loss
            }
            
    }
        returnDraws = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamName].draw
            }
            
    }
        returnDrawsTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamTwo].draw
            }
            
    }
        returnPosition = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamName].position
            }
            
    }
        returnPositionTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamTwo].position
            }
            
    }
        returnPlayed = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamName].played
            }
            
    }
        returnPlayedTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamTwo].played
            }
            
    }
        returngd = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamName].gd
            }
            
    }
        returngdTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
                return this.state.leagueTeams[this.state.teamTwo].gd
            }
            
    }
        algorithm = () => {
             if(this.state.teamName && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamName]
            let pointCount = ''
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                        if(this.state.teams[1].table[key2].won>this.state.teams[1].table[key2].lost+this.state.teams[1].table[key2].draw){
                        pointCount = this.state.teams[0].table[key2].points + (Math.round((this.state.teams[0].table[key2].won - this.state.saData[0].table[key2].lost + this.state.saData[0].table[key2].draw))/5) + 7
                        }
                        else if(this.state.teams[1].table[key2].won<this.state.teams[1].table[key2].lost+this.state.teams[1].table[key2].draw){
                        pointCount = this.state.teams[0].table[key2].points + (Math.round((this.state.teams[0].table[key2].won - this.state.saData[0].table[key2].lost + this.state.saData[0].table[key2].draw))/5) - 7
                        } else if(this.state.teams[1].table[key2].won==this.state.teams[1].table[key2].lost+this.state.teams[1].table[key2].draw){
                        pointCount = this.state.teams[0].table[key2].points + (Math.round((this.state.teams[0].table[key2].won - this.state.saData[0].table[key2].lost + this.state.saData[0].table[key2].draw))/5)
                        }
                    }
        }
                 return Math.round(pointCount)
            }
            
    } 
        algorithmTwo = () => {
             if(this.state.teamTwo && this.state.screen == "0") {
            let selectedTeamName = this.state.teamListNames[this.state.teamTwo]
            let otherPointCount = ''
            for(var key2 in this.state.teams[0].table) {
                    if(this.state.teams[0].table[key2].team.name == selectedTeamName){
                       if(this.state.teams[2].table[key2].won>this.state.teams[2].table[key2].lost+this.state.teams[2].table[key2].draw){
                        otherPointCount = this.state.teams[0].table[key2].points + (Math.round((this.state.teams[0].table[key2].won - this.state.saData[0].table[key2].lost + this.state.saData[0].table[key2].draw))/5) + 7
                        }
                        else if(this.state.teams[2].table[key2].won<this.state.teams[2].table[key2].lost+this.state.teams[2].table[key2].draw){
                        otherPointCount = this.state.teams[0].table[key2].points + (Math.round((this.state.teams[0].table[key2].won - this.state.saData[0].table[key2].lost + this.state.saData[0].table[key2].draw))/5) - 7
                        } else if(this.state.teams[2].table[key2].won==this.state.teams[2].table[key2].lost+this.state.teams[2].table[key2].draw){
                        otherPointCount = this.state.teams[0].table[key2].points + (Math.round((this.state.teams[0].table[key2].won - this.state.saData[0].table[key2].lost + this.state.saData[0].table[key2].draw))/5)
                        }
                    }
        }
                 
                 return Math.round(otherPointCount)
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
        returnImage = () => {
            if(this.state.teamName && this.state.screen == "0") {
                return <img 
                style={{height: 100}}
                src={this.state.leagueTeams[this.state.teamName].url}
                alt=""
                />
                    }
        }
            
        returnImageTwo = () => {
            if(this.state.teamTwo && this.state.screen == "0") {
            return <img 
                style={{height: 100}}
                src={this.state.leagueTeams[this.state.teamTwo].url}
                alt=""
                />
            }
            
    }
        
        aboutPage = () => {
            this.setState({screen: "3"})
        }
        releaseNotes = () => {
            this.setState({screen: "4"})
        }
       
        upcomingGames = () => {
            if (this.state.screen == "2") {return this.state.games[0].homeTeam.name
                }
        } 
        
        displayMatch = () => {
            let tempGames = ''
            let datevar = ''
            let isScoreOne = ''
            let isScoreTwo = ''
            let completed = ''
            let vs = 'vs.'
            let home = ''
            let away = ''
            let line = <hr/>;
            if(this.state.screen == "2") {
            for (var key2 in this.state.games){
                
                
                
                if(this.state.games[key2].status == "FINISHED"){
                    isScoreOne = this.state.games[key2].score.fullTime.homeTeam;
                    isScoreTwo = this.state.games[key2].score.fullTime.awayTeam;
                    completed = 'Finished - ';
                   vs = '-';
                } 
                else{
                    isScoreOne = ''
                    isScoreTwo = ''
                    completed = ''
                    vs = 'vs.'
                }
                
                if(this.state.games[key2].score.winner == "HOME_TEAM"){
                    home = <text style={{color: "#008000"}}> {this.state.games[key2].homeTeam.name} </text>;
                    away = <text style={{color: "#8B0000"}}> {this.state.games[key2].awayTeam.name} </text>
                } else if(this.state.games[key2].score.winner == "AWAY_TEAM"){
                    home = <text style={{color: "#8B0000"}}> {this.state.games[key2].homeTeam.name} </text>;
                    away = <text style={{color: "#008000"}}> {this.state.games[key2].awayTeam.name} </text>
                } else {
                    home = this.state.games[key2].homeTeam.name
                    away = this.state.games[key2].awayTeam.name
                } 
    
                let saTeam = ''
                

                for(var key3 in this.state.saData[0].table) {
                    if(this.state.saData[0].table[key3].team.name == this.state.games[key2].homeTeam.name){
                        if(this.state.saData[1].table[key3].won>this.state.saData[1].table[key3].lost+this.state.saData[1].table[key3].draw){
                        saTeam = this.state.saData[0].table[key3].points + (Math.round((this.state.saData[0].table[key3].won - this.state.saData[0].table[key3].lost + this.state.saData[0].table[key3].draw))/5) + 7
                        }
                        else if(this.state.saData[1].table[key3].won<this.state.saData[1].table[key3].lost+this.state.saData[1].table[key3].draw){
                        saTeam = this.state.saData[0].table[key3].points + (Math.round((this.state.saData[0].table[key3].won - this.state.saData[0].table[key3].lost + this.state.saData[0].table[key3].draw))/5) - 7
                        } else if(this.state.saData[1].table[key3].won==this.state.saData[1].table[key3].lost+this.state.saData[1].table[key3].draw){
                        saTeam = this.state.saData[0].table[key3].points + (Math.round((this.state.saData[0].table[key3].won - this.state.saData[0].table[key3].lost + this.state.saData[0].table[key3].draw))/5)
                        }
                    }
            }   
            saTeam = (Math.round(saTeam *10)/10)

                let othersaTeam = 0
                for(var key3 in this.state.saData[0].table) {
                    if(this.state.saData[0].table[key3].team.name == this.state.games[key2].awayTeam.name){
                        if(this.state.saData[2].table[key3].won>this.state.saData[2].table[key3].lost+this.state.saData[2].table[key3].draw){
                        othersaTeam = this.state.saData[0].table[key3].points + (Math.round((this.state.saData[0].table[key3].won - this.state.saData[0].table[key3].lost + this.state.saData[0].table[key3].draw))/5) + 7
                        }
                        else if(this.state.saData[2].table[key3].won<this.state.saData[2].table[key3].lost+this.state.saData[2].table[key3].draw){
                        othersaTeam = this.state.saData[0].table[key3].points + (Math.round((this.state.saData[0].table[key3].won - this.state.saData[0].table[key3].lost + this.state.saData[0].table[key3].draw))/5) - 7
                        } else if(this.state.saData[2].table[key3].won==this.state.saData[2].table[key3].lost+this.state.saData[2].table[key3].draw){
                        othersaTeam = this.state.saData[0].table[key3].points + (Math.round((this.state.saData[0].table[key3].won - this.state.saData[0].table[key3].lost + this.state.saData[0].table[key3].draw))/5)
                        }
                    }
            }
            othersaTeam = (Math.round(othersaTeam *10)/10)

                let percentUno = (Math.floor((saTeam/(saTeam + othersaTeam))*10000))/100 + '%'
                let number = (Math.floor((saTeam/(saTeam + othersaTeam))*10000))/100
                let percentDos = (Math.round(100*(100-number)))/100 + '%'
                    
                datevar = this.state.games[key2].utcDate.split("T")[0]
                
               tempGames = <body style={{textAlign: "center",}}> {tempGames}{line}<b>{home} </b>  {isScoreOne} {vs} {isScoreTwo}<b> {away} </b> <p/>
                   {saTeam} : Team Score : {othersaTeam} <p/>
                   <b>{percentUno}</b> : Win Percentage <b>{percentDos}</b>

                <p/>
                   {completed} &nbsp;
                {datevar.split("-")[1] + "-" + datevar.split("-")[2] + "-" + datevar.split("-")[0]}
                <p/>
                   </body>

                
            }
            return tempGames
        }
    }
    
        yeet = () => {
            if(this.state.teamName){
            console.log(this.state.leagueTeams[this.state.teamName].teamName)
            }
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
backgroundColor: "white"
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
    
    //table - standings
    let players = []
    if (this.state.teamName) {
    players = [
        {position: "1 - Winner", name: this.state.teams[0].table[0].team.name, points: this.state.teams[0].table[0].points, wins: this.state.teams[0].table[0].won, losses: this.state.teams[0].table[0].lost, ties: this.state.teams[0].table[0].draw, gd: this.state.teams[0].table[0].goalDifference},
        {position: "2 - Champions League", name: this.state.teams[0].table[1].team.name, points: this.state.teams[0].table[1].points, wins: this.state.teams[0].table[1].won, losses: this.state.teams[0].table[1].lost, ties: this.state.teams[0].table[1].draw, gd: this.state.teams[0].table[1].goalDifference},
        {position: "3 - Champions League", name: this.state.teams[0].table[2].team.name, points: this.state.teams[0].table[2].points, wins: this.state.teams[0].table[2].won, losses: this.state.teams[0].table[2].lost, ties: this.state.teams[0].table[2].draw, gd: this.state.teams[0].table[2].goalDifference},
        {position: "4 - Champions League", name: this.state.teams[0].table[3].team.name, points: this.state.teams[0].table[3].points, wins: this.state.teams[0].table[3].won, losses: this.state.teams[0].table[3].lost, ties: this.state.teams[0].table[3].draw, gd: this.state.teams[0].table[3].goalDifference},
        {position: "5 - Europa League", name: this.state.teams[0].table[4].team.name, points: this.state.teams[0].table[4].points, wins: this.state.teams[0].table[4].won, losses: this.state.teams[0].table[4].lost, ties: this.state.teams[0].table[4].draw, gd: this.state.teams[0].table[4].goalDifference},
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
        {position: "18 - Relegation", name: this.state.teams[0].table[17].team.name, points: this.state.teams[0].table[17].points, wins: this.state.teams[0].table[17].won, losses: this.state.teams[0].table[17].lost, ties: this.state.teams[0].table[17].draw, gd: this.state.teams[0].table[17].goalDifference},
        {position: "19  -Relegation", name: this.state.teams[0].table[18].team.name, points: this.state.teams[0].table[18].points, wins: this.state.teams[0].table[18].won, losses: this.state.teams[0].table[18].lost, ties: this.state.teams[0].table[18].draw, gd: this.state.teams[0].table[18].goalDifference},
        {position: "20 - Relegation", name: this.state.teams[0].table[19].team.name, points: this.state.teams[0].table[19].points, wins: this.state.teams[0].table[19].won, losses: this.state.teams[0].table[19].lost, ties: this.state.teams[0].table[19].draw, gd: this.state.teams[0].table[19].goalDifference},

    ]}
    const renderPlayer = (player, index) => {
        return (
        <tr key={index}>
            <td>{player.position} </td>
            <td> {player.name}</td>
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
    if (this.state.screen == "0") {positionText = ' : Position : '}
    let scoreText = ''
    if (this.state.screen == "0") {scoreText = ' : Team Rating : '}
    let pointText = ''
    if (this.state.screen == "0") {pointText = ': Points : '}
    let winText = ''
    if (this.state.screen == "0") {winText = ' : Wins : '}
    let lossText = ''
    if (this.state.screen == "0") {lossText = ' : Losses : '}
    let drawText = ''
    if (this.state.screen == "0") {drawText = ' : Draws : '}
    let playedText = ''
    if (this.state.screen == "0") {playedText = ' : Played : '}
    let gdText = ''
    if (this.state.screen == "0") {gdText = ' : Goal Difference : '}
    let percentText = ''
    if (this.state.screen == "0") {percentText = ' : Win Percentage : '}
    let resetButton = ''
    
    if (this.state.screen == "0") {
        resetButton = <button onClick={this.resetDropdown} style={resetStyle}> Reset</button>
    }
    
    //text code
    let text = ''
        if(this.algorithm() > this.algorithmTwo() && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0" && this.state.teamName != this.state.teamTwo) {
            text= teamList[this.state.teamName] + ' has a team rating of ' + this.algorithm() + ' and ' + teamList[this.state.teamTwo] + ' has a team rating of ' + this.algorithmTwo() + ', so ' + teamList[this.state.teamName] + ' has a ' + this.percent() + ' chance of winning.'
        } 
        else if(this.algorithm() < this.algorithmTwo() && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0" && this.state.teamName != this.state.teamTwo) {
            text= teamList[this.state.teamTwo] + ' has a team rating of ' + this.algorithmTwo() + ' and ' + teamList[this.state.teamName] + ' has a team rating of ' + this.algorithm() + ', so ' + teamList[this.state.teamTwo] + ' has a ' + this.percentTwo() + ' chance of winning.'
        } 
        else if(this.algorithm() == this.algorithmTwo() && teamList[this.state.teamName] != teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0" && this.state.teamName != this.state.teamTwo) {
            text= teamList[this.state.teamName] + ' and ' + teamList[this.state.teamTwo] + ' have equal team ratings, ' + this.algorithm() + ' and ' + this.algorithmTwo() + ', so they will tie.'
        } 
        else if(teamList[this.state.teamName] == teamList[this.state.teamTwo] && teamList[this.state.teamName] != 'Select a team.' && teamList[this.state.teamTwo] != 'Select another team.' && this.state.screen == "0" && this.state.teamName != "" ) {
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
    


    
    let input = ''
    if (this.state.screen == "0") {
        input = <label>
            Choose the home team: 
                <select value={this.state.teamName} onChange={this.handleSelect}>
                    {this.state.leagueTeams.map((team) => <option key={team.value} value={team.value}> {team.teamName} </option>)}
                </select>
        </label>
    }
     let inputTwo = ''
    if (this.state.screen == "0") {
        inputTwo = <label>
            Choose the home team: 
                <select value={this.state.teamTwo} onChange={this.handleOtherSelect}>
                    {this.state.leagueTeams.map((team) => <option key={team.value} value={team.value}> {team.teamName} </option>)}
                </select>
        </label>
    }
   
    
    
    let theHeader = ''
    if (this.state.screen == "0"){
        theHeader = 'Predictions, Predictions, Predictions.'
    } 
    else if(this.state.screen == "1") {   
        theHeader = 'The Premier League Table.'
    } 
    else if(this.state.screen == "2") {
        theHeader = <h1>Serie A. <body style={{textAlign: "center"}}> <p/> Home -         Away </body> </h1>
    } 
    else if(this.state.screen == "3") {
        theHeader = 'About'
    } 
    else if(this.state.screen == "4"){
        theHeader = 'Release Notes'
    }
    
    let table = ''
    if (this.state.screen == "1") {
        table = <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Position</th>
      <th>Team</th>
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
        aboutText = "This website predicts win-loss percentages between two teams based on live data. Other features include upcoming game predictions and a live table. Only Premier League for now and Serie A for upcoming games for easy testing."
    }
    
    let releaseText = '   '
    if (this.state.screen == "4") {
        releaseText = <Release/>
    }
    
    let randomText = this.upcomingGames()

    
    


return (
    <div className="App" >
    <p/>
    <button onClick={this.homePage} style={theCoolStyle}><img style={{height: 100}}
      src="https://12r9bkcquoz2cfikc47m7moj-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/X-Digital-Marketing-Experts-Share-Their-Marketing-Home-Run-of-2019.png"
      alt=""
      /></button>
    <p/>
    <button onClick={this.handleStandings}> Standings </button>
    <button onClick={this.handlePredictions}> Team Predictions </button>
    <button onClick={this.handleMatches}> Matches </button>
    <p/>   
    <h2> {theHeader} </h2>
    
    {this.displayMatch()}
    <p/>
    {table}
    {aboutText}
    {input}
    {releaseText}
    {inputTwo}
    {this.yeet()}
            <p/>
    <h3> {this.returnTeam()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.returnTeamTwo()}</h3>
    {this.returnImage()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.returnImageTwo()}
            <p/>
            {text}
            <p/>
                <body style={bodyStyle}> <b>{this.percent()}</b> {percentText} <b>{this.percentTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnPosition()}</b> {positionText} <b>{this.returnPositionTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnPoints()}</b> {pointText} <b>{this.returnPointsTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnPlayed()}</b> {playedText} <b>{this.returnPlayedTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnWins()}</b> {winText} <b>{this.returnWinsTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnLoss()}</b> {lossText} <b>{this.returnLossTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returnDraws()}</b> {drawText} <b>{this.returnDrawsTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.returngd()}</b> {gdText} <b>{this.returngdTwo()}</b></body>
        <body style={bodyStyle}> <b>{this.algorithm()}</b> {scoreText} <b>{this.algorithmTwo()}</b></body>
        
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

const container = document.createElement('div');
document.body.appendChild(container);
export default App;