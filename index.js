
// . reduce ()
// obj
// we have ; 
// arrays, properties, objects(string, numbers)

function totalSalaryTest(lineup) {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

function wholeTeamTest(lineup) {
  return lineup.reduce((teams, player) => {
    teams[player.teamId] = teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1

    return teams
  }, {})
}

function gamesTest(lineup) {
  return lineup.reduce((games, player) => {
    games[player.gameId] = games[player.gameId] === undefined ? 1 : games[player.gameId] + 1

    return games
  }, {})
}

function tooManyPlayersST(games) {
  return Object.values(games).some((count) => { return count > 3 })
}

function tooManyPlayersSG(teams) {
  return Object.values(teams).some((count) => { return count > 2 })
}

function exceededSalary(lineup) {
  return totalSalaryTest(lineup) > 45000
}

function validateLineup(lineup) {
  const allGames = gamesTest(lineup)
  const wholeTeam = wholeTeamTest(lineup)


  return !tooManyPlayersST(allGames) && !exceededSalary(lineup) &&
    !tooManyPlayersSG(wholeTeam)
}

module.exports = validateLineup
