let modInfo = {
	name: "The Muting Tree",
	id: "jinyan-en",
	author: "DeFe308",
	pointsName: "message",
	modFiles: ["layers.js", "tree.js",'layer2.js'],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0.5,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "3.1",
	name: "END",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0</h3><br>
		- Added all contents before Blacklist.<br>
	<h3>v2.0 2026/5/2</h3><br>
		- Added all contents of Blacklist.<br>
	<h3>v2.5 2026/6/20</h3><br>
		- Added all contents of Ban Account.<br>
	<h3>v3.0 2026/8/13</h3><br>
		- Added all contents after Ban Account and storyline.<br>
	<h3>v3.1 2026/8/15</h3><br>
		- Translated the game into English.<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return player.B2.points.lt(1)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)

	if(hasUpgrade('J',11)) gain=n(1)
	if(hasUpgrade('J',12)) gain=gain.times(buyableEffect('J',11))
	if(hasUpgrade('J',14)) gain=gain.times(upgradeEffect('J',14))
	if(hasUpgrade('J',41)) gain=gain.times('1e10000')

	if(hasMilestone('S',0)) gain=gain.times(tmp.S.mil0eff)
	if(hasUpgrade('S',12)) gain=gain.times(buyableEffect('S',11))
	if(hasChallenge('S',11))gain=gain.times(challengeEffect('S',11))
	if(hasUpgrade('S',41)) gain=gain.times(1e-100)
	if(hasUpgrade('S',43)) gain=gain.times(n(10).pow(6668.6))
	if(hasUpgrade('S',51)) gain=gain.times(upgradeEffect('S',51))

	if(hasMilestone('F',0)) gain=gain.times(tmp.F.mil0eff)
	if(hasMilestone('F',1)) gain=gain.times(tmp.F.bxeff)
	if(hasUpgrade('F',12)) gain=gain.times(1e-20)
	if(hasChallenge('F',11))gain=gain.times(challengeEffect('F',11))
	if(hasChallenge('F',12))gain=gain.times(challengeEffect('F',12))

	if(hasMilestone('B',0))gain=gain.times(tmp.B.m2eff)

	if(hasUpgrade('S',23)) gain=gain.pow(1.1)
	if(hasMilestone('S',10)) gain=gain.pow(1.05)
	if(hasUpgrade('F',21)) gain=gain.pow(buyableEffect('F',14))
	if(hasUpgrade('J',43)) gain=gain.pow(1.01)
	if(hasUpgrade('S',54)) gain=gain.pow(1.005)
	if(hasMilestone('B',11))gain=gain.pow(tmp.B.m5eff)

	if(inChallenge('S',11))gain=gain.pow(0.5)
	if(inChallenge('S',13))gain=gain.pow(0.0005)

	if(inChallenge('B',11)) gain=n(10).pow(gain.add(1).log(10).pow(0.6))

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	//return player.points.gte(new Decimal("e280000000"))
	//return hasMilestone('B2',18)
	return hasMilestone('B2',19)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	a=3600
	if(player.B2.points.gte(1)&&!hasMilestone('B2',18)) a=20
	return(a) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function n(a){
	return new Decimal(a)
}

function year(a){
	return n(86400*365).times(a)
}