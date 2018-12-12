import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const styles = {
	reactTable : {
	   width: '100%',
     padding: '16px',
     border: '1px solid #e9e7e7',
     borderRadius: '4px',
     background: '#fff',
     marginBottom: '20px'
	}
}

class App extends Component {
  render() {

   const data2 =  [
      {
        league: "NBA",
        result: "win",
        title: "NBA Bro Nets - Ind Pacers",
        handicap: "0",
        gametime: "2017-12-17T23:00:00",
        odds: 1.67,
        type: "moneyline",
        posted_at: "2017-12-17T22:17:09",
        choice: "Indiana Pacers"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA_ \"IND PACERS - BOS CELTICS\"",
        handicap: "0",
        gametime: "2017-12-19T00:00:00",
        odds: 1.71,
        type: "moneyline",
        posted_at: "2017-12-18T15:24:18",
        choice: "Boston Celtics"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA _ (Milwaukee Bucks - Cleveland Cavaliers)",
        handicap: "0",
        gametime: "2017-12-20T01:00:00",
        odds: 1.83,
        type: "moneyline",
        posted_at: "2017-12-19T18:59:45",
        choice: "Cleveland Cavaliers"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA (Toronto Raptors_Charlotte Hornets)",
        handicap: "0",
        gametime: "2017-12-21T00:00:00",
        odds: 1.78,
        type: "moneyline",
        posted_at: "2017-12-20T14:10:42",
        choice: "Toronto Raptors"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA _ (Indiana Pacers_Atlanta Hawks)",
        handicap: "0",
        gametime: "2017-12-21T00:30:00",
        odds: 1.588235,
        type: "moneyline",
        posted_at: "2017-12-20T17:45:18",
        choice: "Indiana Pacers"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA _ (Boston Celtics vs. Miami Heat)",
        handicap: "0",
        gametime: "2017-12-21T00:30:00",
        odds: 1.25,
        type: "moneyline",
        posted_at: "2017-12-20T17:55:06",
        choice: "Boston Celtics"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA _ (Brooklyn Nets_Sacramento Kings)",
        handicap: "0",
        gametime: "2017-12-21T00:30:00",
        odds: 2.75,
        type: "moneyline",
        posted_at: "2017-12-20T18:10:57",
        choice: "Sacramento Kings"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA _ Chicago Bulls vs. Orlando Magic",
        handicap: "0",
        gametime: "2017-12-21T01:00:00",
        odds: 1.49,
        type: "moneyline",
        posted_at: "2017-12-20T18:22:36",
        choice: "Chicago Bulls"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA _ Houston Rockets vs. Los Angeles Lakers",
        handicap: "0",
        gametime: "2017-12-21T01:00:00",
        odds: 1.06,
        type: "moneyline",
        posted_at: "2017-12-20T18:27:39",
        choice: "Houston Rockets"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA (Oklahoma City Thunder vs. Utah Jazz)",
        handicap: "0",
        gametime: "2017-12-21T01:00:00",
        odds: 1.34,
        type: "moneyline",
        posted_at: "2017-12-20T20:42:21",
        choice: "Oklahoma City Thunder"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA _ (Dallas Mavericks_Detroit Pistons)",
        handicap: "0",
        gametime: "2017-12-21T01:30:00",
        odds: 1.87,
        type: "moneyline",
        posted_at: "2017-12-20T18:16:00",
        choice: "Dallas Mavericks"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA (GOLDEN STATE WARRIORS vs. MEMPHIS GRIZZLIES)",
        handicap: "0",
        gametime: "2017-12-21T03:30:00",
        odds: 1.181818,
        type: "moneyline",
        posted_at: "2017-12-20T21:07:54",
        choice: "Golden State Warriors"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA (Los Angeles Clippers _ Phoenix Suns)",
        handicap: "0",
        gametime: "2017-12-21T03:30:00",
        odds: 1.5,
        type: "moneyline",
        posted_at: "2017-12-20T21:13:06",
        choice: "Los Angeles Clippers"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA (Philadelphia 76ers _ Toronto Raptors)",
        handicap: "0",
        gametime: "2017-12-22T00:00:00",
        odds: 1.68,
        type: "moneyline",
        posted_at: "2017-12-21T20:44:48",
        choice: "Toronto Raptors"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA (Orlando Magic vs Houston Rockets)",
        handicap: "0",
        gametime: "2018-01-04T00:00:00",
        odds: 1.3125,
        type: "moneyline",
        posted_at: "2018-01-03T22:17:06",
        choice: "Houston Rockets"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA Washington Wizards vs. New York Knicks",
        handicap: "0",
        gametime: "2018-01-04T00:00:00",
        odds: 1.23,
        type: "moneyline",
        posted_at: "2018-01-03T22:28:06",
        choice: "Washington Wizards"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA Boston Celtics vs.Cleveland Cavaliers",
        handicap: "0",
        gametime: "2018-01-04T01:00:00",
        odds: 1.714286,
        type: "moneyline",
        posted_at: "2018-01-03T22:44:09",
        choice: "Boston Celtics"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA Chicago Bulls vs. Toronto Raptors",
        handicap: "0",
        gametime: "2018-01-04T01:00:00",
        odds: 2.7,
        type: "moneyline",
        posted_at: "2018-01-03T22:51:57",
        choice: "Chicago Bulls"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA Milwaukee Bucks vs. Indiana Pacers",
        handicap: "0",
        gametime: "2018-01-04T01:00:00",
        odds: 3.65,
        type: "moneyline",
        posted_at: "2018-01-03T23:13:03",
        choice: "Indiana Pacers"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA_ Dallas Mavericks vs. Chicago Bulls",
        handicap: "0",
        gametime: "2018-01-06T01:30:00",
        odds: 1.571429,
        type: "moneyline",
        posted_at: "2018-01-06T00:47:30",
        choice: "Dallas Mavericks"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA _ San Antonio Spues vs. Phoenix Suns",
        handicap: "0",
        gametime: "2018-01-06T01:30:00",
        odds: 6.5,
        type: "moneyline",
        posted_at: "2018-01-06T00:57:33",
        choice: "Phoenix Suns"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA_Denver Nuggets vs. Utah Jazz",
        handicap: "0",
        gametime: "2018-01-06T02:00:00",
        odds: 1.37,
        type: "moneyline",
        posted_at: "2018-01-06T01:06:33",
        choice: "Denver Nuggets"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA _ Portland Trail Blazers vs. Atlanta Hawks.",
        handicap: "0",
        gametime: "2018-01-06T03:00:00",
        odds: 3.5,
        type: "moneyline",
        posted_at: "2018-01-06T01:21:18",
        choice: "Atlanta Hawks"
      },
      {
        league: "NBA",
        result: "win",
        title: "Olacak bu sefer inanç tam",
        handicap: "0",
        gametime: "2018-01-06T20:30:00",
        odds: 1.23,
        type: "moneyline",
        posted_at: "2018-01-06T18:53:54",
        choice: "Golden State Warriors"
      },
      {
        league: "NBA",
        result: "win",
        title: "Yetmiyor bazen...",
        handicap: "0",
        gametime: "2018-01-06T23:00:00",
        odds: 1.55,
        type: "moneyline",
        posted_at: "2018-01-06T20:46:27",
        choice: "Boston Celtics"
      },
      {
        league: "NBA",
        result: "lose",
        title: "Bazen de kaypak olmak mı lazım",
        handicap: "0",
        gametime: "2018-01-07T00:00:00",
        odds: 1.45,
        type: "moneyline",
        posted_at: "2018-01-06T20:51:57",
        choice: "Houston Rockets"
      },
      {
        league: "NBA",
        result: "win",
        title: "Paylaşımların ilgi çekmesi için...",
        handicap: "0",
        gametime: "2018-01-07T00:00:00",
        odds: 1.444444,
        type: "moneyline",
        posted_at: "2018-01-06T20:57:12",
        choice: "Indiana Pacers"
      },
      {
        league: "NBA",
        result: "win",
        title: "Doğrudüzgün yapın işinizi ey entegre ler",
        handicap: "0",
        gametime: "2018-01-07T00:00:00",
        odds: 1.25,
        type: "moneyline",
        posted_at: "2018-01-06T21:02:18",
        choice: "Cleveland Cavaliers"
      },
      {
        league: "NBA",
        result: "lose",
        title: "Hakedene hakkini vermek lazım",
        handicap: "0",
        gametime: "2018-01-07T01:00:00",
        odds: 1.62,
        type: "moneyline",
        posted_at: "2018-01-06T21:08:09",
        choice: "Washington Wizards"
      },
      {
        league: "NBA",
        result: "win",
        title: "Yoksa almasını da biliriz...",
        handicap: "0",
        gametime: "2018-01-07T02:00:00",
        odds: 1.88,
        type: "moneyline",
        posted_at: "2018-01-06T21:13:30",
        choice: "Minnesota Timberwolves"
      },
      {
        league: "NBA",
        result: "lose",
        title: "Uyarıdır...Sevgilerimle... !!!",
        handicap: "0",
        gametime: "2018-01-07T03:00:00",
        odds: 1.45,
        type: "moneyline",
        posted_at: "2018-01-06T21:18:45",
        choice: "Denver Nuggets"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA_Ind pacers vs. Mil Bucks",
        handicap: "0",
        gametime: "2018-01-09T00:00:00",
        odds: 2,
        type: "moneyline",
        posted_at: "2018-01-08T18:38:27",
        choice: "Milwaukee Bucks"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA_ Bro Nets vs. Tor Raptors",
        handicap: "0",
        gametime: "2018-01-09T00:30:00",
        odds: 1.32,
        type: "moneyline",
        posted_at: "2018-01-08T20:46:54",
        choice: "Toronto Raptors"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA _ Chicago Bulls vs. Hou Rockets",
        handicap: "0",
        gametime: "2018-01-09T01:00:00",
        odds: 1.41,
        type: "moneyline",
        posted_at: "2018-01-08T21:26:03",
        choice: "Houston Rockets"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA_Min Timberwolves vs. Cle Cavaliers",
        handicap: "0",
        gametime: "2018-01-09T01:00:00",
        odds: 1.9,
        type: "moneyline",
        posted_at: "2018-01-08T21:53:39",
        choice: "Cleveland Cavaliers"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA_Okc Thunders vs. Port T Blazers",
        handicap: "0",
        gametime: "2018-01-10T01:00:00",
        odds: 3.65,
        type: "moneyline",
        posted_at: "2018-01-09T15:09:45",
        choice: "Portland Trail Blazers"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA_Dallas Mavericks vs. Orl Magic",
        handicap: "0",
        gametime: "2018-01-10T01:30:00",
        odds: 3.3,
        type: "moneyline",
        posted_at: "2018-01-09T15:15:06",
        choice: "Orlando Magic"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA_La Lakers vs. Sac Kings",
        handicap: "0",
        gametime: "2018-01-10T03:30:00",
        odds: 3.25,
        type: "moneyline",
        posted_at: "2018-01-09T15:46:06",
        choice: "Sacramento Kings"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA _ Phi 76 Ers vs. Boston Celtics",
        handicap: "0",
        gametime: "2018-01-11T20:00:00",
        odds: 1.78,
        type: "moneyline",
        posted_at: "2018-01-11T14:02:12",
        choice: "Boston Celtics"
      },
      {
        league: "NBA",
        result: "win",
        title: "NBA_Tor Raptors vs. Cla Cavaliers",
        handicap: "0",
        gametime: "2018-01-12T01:00:00",
        odds: 2.3,
        type: "moneyline",
        posted_at: "2018-01-11T23:00:45",
        choice: "Toronto Raptors"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA_Sacramento Kings – Los Angeles Clippers",
        handicap: "0",
        gametime: "2018-01-12T03:00:00",
        odds: 2,
        type: "moneyline",
        posted_at: "2018-01-11T23:05:51",
        choice: "Sacramento Kings"
      },
      {
        league: "NBA",
        result: "lose",
        title: "NBA_Los Angeles Lakers – San Antonio Spurs",
        handicap: "0",
        gametime: "2018-01-12T03:30:00",
        odds: 1.714286,
        type: "moneyline",
        posted_at: "2018-01-11T23:10:57",
        choice: "San Antonio Spurs"
      },
      {
        league: "NCAAF",
        result: "lose",
        title: "NCAAF (Louisiana Tech _ Southern Methodist)",
        handicap: "0",
        gametime: "2017-12-21T01:00:00",
        odds: 1.555556,
        type: "moneyline",
        posted_at: "2017-12-20T14:03:51",
        choice: "Southern Methodist"
      }
    ]

   const columns = [{
       Header: 'Title',
       accessor: 'title'
     }, {
       Header: 'Result',
       accessor: 'result',
       Cell: props => <span className='number'>{props.value.charAt(0).toUpperCase() + props.value.slice(1)}</span>
     }, {
       Header: 'Odds',
       accessor: 'odds',
       Cell: props => <span className='number'>{props.value.toFixed(2)}</span>
     }, {
       Header: 'Choice',
       accessor: 'choice',
     }]

    return (
      <div className="App">
        <ReactTable
          data={data2}
          columns={columns}
          style={styles.reactTable}
          defaultPageSize={15}
        />
      </div>
    );
  }
}

export default App;
