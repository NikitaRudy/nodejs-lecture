const request = require('request');
const path = require('path');
const jsdom = require('jsdom');

function getTopTeams(dom, amount) {
  const teams = [];
  for (let i = 0; i < amount; i++) {
    const row = dom.window.document.querySelector(`tbody .standing-table__row:nth-child(${i + 1})`);
    const name = getTeamName(row);
    const games = getGamesPlayed(row);
    const pts = getPts(row);
    teams.push({ name, games, pts });
  }

  return teams;
}

function getTeamName(row) {
  return row.querySelector('.standing-table__cell:nth-child(2) a').innerHTML;
}

function getGamesPlayed(row) {
  return row.querySelector('.standing-table__cell:nth-child(3)').innerHTML;
}

function getPts(row) {
  return row.querySelector('.standing-table__cell:nth-child(10)').innerHTML;
}

function requestTopTeamsByLeague(leagueId, amount, callback) {
  request(`https://www.skysports.com/${leagueId}-table`, (err, res, body) => {
    if (err) {
      console.log('error: ', err);
      return;
    }
  
    const dom = new jsdom.JSDOM(body);
    const top = getTopTeams(dom, 5);
    callback(top);
  });
}

const leagues = ['la-liga', 'premier-league', 'serie-a', 'bundesliga']

for (let i = 0; i < leagues.length; i++) {
  requestTopTeamsByLeague(leagues[i], 5, top => console.log(`${leagues[i]}:\n`, top))
}