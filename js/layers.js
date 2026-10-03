addLayer("A", {
    name: "Achievement", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        ach: new Decimal(0),
        progress:[],
    }},
    color: "#ffe125",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "achievements", // Name of prestige currency
    baseResource: "点数", // Name of resource prestige is based on
    //baseAmount() {return player.points}, // Get the current amount of baseResource
    //type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    devSpeedCal(){
	    let dev=n(1)
        if(getClickableState(this.layer,11)==1)dev=n(0)
	    return dev
	   },
       doReset(resettingLayer) {
    },
    effectDescription(){return 'each achievement unlocking a new storyline.'},
    row: 'side', // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat: {
        "Achievements":{
        content: [ "main-display",
        "achievements",
    ],},
    "Test":{
        content: [ "main-display",
        "clickables",
    ],},
    },
    achievements: {
        11: {
     name() {return "Start Spamming"},
     done() {return player.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Send 1 message."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[0])
        return a
     }, 
     textStyle: {'color': '#ffe125'},
        },
        12: {
     name() {return "Getting Muted"},
     done() {return player.J.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Get 1 second of mute duration."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[1])
        return a
     }, 
     textStyle: {'color': '#ffe125'},
        },
        13: {
     name() {return "Muting Boost"},
     done() {return hasUpgrade('J',14)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Buy the 'Mute Boost' upgrade."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[2])
        return a
     }, 
     textStyle: {'color': '#ffe125'},
        },
        14: {
     name() {return "Muted Stone"},
     done() {return player.S.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Get 1 Muted Stone."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[3])
        return a
     }, 
     textStyle: {'color': '#ffe125'},
        },
        21: {
     name() {return "Passive Muting"},
     done() {return hasUpgrade('S',11)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Unlock mute duration passive generation."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[4])
        return a
     }, 
     textStyle: {'color': '#ffe125'},
        },
        22: {
     name() {return "QoL is good"},
     done() {return hasMilestone('S',3)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Get '16 Muted Stones' milestone."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[5])
        return a
     }, 
     textStyle: {'color': '#ffe125'},
        },
        23: {
     name() {return "Liuliu66686 is too dilated"},
     done() {return hasChallenge('S',11)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Complete the first Muted Stone challenge."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[6])
        return a
     },
     textStyle: {'color': '#ffe125'},
        },
        24: {
     name() {return "You have been kicked out of the group chat"},
     done() {return player.F.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Get 1 Airplane Ticket."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[7])
        return a
     },
     textStyle: {'color': '#ffe125'},
        },
        31: {
     name() {return '<img src="s297.jpg" width="25" height="25">'},
     done() {return hasMilestone('F',1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Unlock bese."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[8])
        return a
     },
     textStyle: {'color': '#ffe125'},
        },
        32: {
     name() {return "Further Challenge"},
     done() {return hasChallenge('S',12)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Complete the second Muted Stone challenge."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[9])
        return a
     },
     textStyle: {'color': '#ffe125'},
        },
        33: {
     name() {return "Bese Empire"},
     done() {return hasUpgrade('F',13)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Buy 'Insane Bese II' upgrade."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[10])
        return a
     },
     textStyle: {'color': '#ffe125'},
        },
        34: {
     name() {return "Challenge III"},
     done() {return hasChallenge('S',13)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Complete the third Muted Stone challenge."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[11])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    41: {
     name() {return "The Power of Besedi"},
     done() {return hasUpgrade('J',44)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Buy all gifts from Besedi."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[12])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    42: {
     name() {return "Ready to the end"},
     done() {return hasUpgrade('S',54)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "The end...?"
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[13])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    43: {
     name() {return "Blacklist"},
     done() {return player.B.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Get blacklisted once."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[14])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    44: {
     name() {return "Double Blacklist"},
     done() {return player.B.points.gte(2)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Get blacklisted twice."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[15])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    51: {
     name() {return "New Challenges?"},
     done() {return hasChallenge('B',11)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Complete blacklist challenge I."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[16])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    52: {
     name() {return "The End of Challenge"},
     done() {return hasMilestone('B',9)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Complete 3 blacklist challenges."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[17])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    53: {
     name() {return "Free Your Hands"},
     done() {return hasMilestone('B',13)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "Unlock auto-blacklisted."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[18])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    54: {
     name() {return "Account Suspension"},
     done() {return hasMilestone('B2',0)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a= "No need to say more."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[19])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    15: {
     name() {a="???"
        if(player.B2.points.gte(1)) a="Unsuspension"
        return a
     },
     done() {return player.B2.Time.gte(315360000)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a='???'
        if(player.B2.points.gte(1))a= "Mute again."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[20])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    25: {
     name() {a="???"
        if(player.B2.points.gte(1)) a="Rebirth"
        return a
     },
     done() {return player.B2.Time.gte(315360000)&&player.s2.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a='???'
        if(player.B2.points.gte(1))a= "Get 1 Muted Stone after unsuspension."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[21])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    35: {
     name() {a="???"
        if(player.B2.points.gte(1)) a="Kicked Out Again"
        return a
     },
     done() {return player.B2.Time.gte(315360000)&&player.f2.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a='???'
        if(player.B2.points.gte(1))a= "Get 1 Airplane Ticket after unsuspension."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[22])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    45: {
     name() {a="???"
        if(player.B2.points.gte(1)) a="!?BlackkcalB?!"
        return a
     },
     done() {return player.B2.Time.gte(315360000)&&player.b3.points.gte(1)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a='???'
        if(player.B2.points.gte(1))a= "Get blacklisted once after unsuspension."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[23])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    55: {
     name() {a="???"
        if(player.B2.points.gte(1)) a="THE END"
        return a
     },
     done() {return player.B2.points.gte(2)}, 
     unlocked(){return true},
     onComplete() {player.A.progress.push(player.timePlayed)},
     tooltip() {a='???'
        if(player.B2.points.gte(1))a= "Be banned permanently."
        if(hasAchievement(this.layer,this.id)) a=a+'<br>Completed at '+formatTime(player.A.progress[24])
        return a
     },
     textStyle: {'color': '#ffe125'},
    },
    },
    clickables:{
        11: {
            title() {a='Pause'
                return a
            },
            display() {a='Click to pause, click again to resume'
                return a
            },
            canClick() {return true},
            onClick() {setClickableState(this.layer,this.id,1-getClickableState(this.layer,this.id))
            },
        },
    },
})

addLayer("s", {
    name: "storyline", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
    }},
    color: "#2d03ff",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "storyline", // Name of prestige currency
    baseResource: "点数", // Name of resource prestige is based on
    //baseAmount() {return player.points}, // Get the current amount of baseResource
    //type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 'side', // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat: {
        "Storyline":{
        content: [ 
        ["infobox",'story0'],["infobox",'story1'],["infobox",'story2'],["infobox",'story3'],["infobox",'story4'],["infobox",'story5'],
        ["infobox",'story6'],["infobox",'story7'],["infobox",'story8'],["infobox",'story9'],["infobox",'story10'],
        ["infobox",'story11'],["infobox",'story12'],["infobox",'story13'],["infobox",'story14'],["infobox",'story15'],
        ["infobox",'story16'],["infobox",'story17'],["infobox",'story18'],["infobox",'story19'],["infobox",'story20'],
        ["infobox",'story21'],["infobox",'story22'],["infobox",'story23'],["infobox",'story24'],["infobox",'story25'],
    ],},
    },
    infoboxes: {
    story0: {
        title: "Storyline Info",
        body() { a="Imagining you are a member in QQ<sup>[1]</sup> group 'Periodic Elements Incremental Tree<sup>[2]</sup>', a group about an incremental game by Liuliu66686."
            a=a+'<br>On one day in August 2026, You sent a message in the group chat about your incremental game, and then you were muted by Liuliu66686 for 10 minutes.'
            a=a+'<br>You were angry about being muted for no reason, and decided to retaliate by spamming crazily.'
            a=a+'<br>To prevent you from being muted again, you downloaded modded QQ, which allows you to send message even when muted.<br>Now, purchase your first upgrade in "J" layer and start your journey to spam!'
            a=a+"<br>(Note: All storyline is imaginary)"
            a=a+'<br>[1]QQ: A social platform in Chinese. [2]You can play the game <a href="https://liuliu66686.github.io/The-Periodic-Elements-Incemental-Tree/TMTR/">here</a> (though already abandoned).'
            return a
         },
        unlocked(){return true},
    },
    story1: {
        title: "Storyline 1 - Start Spamming",
        body() { a="You just have sent your first message! When you have at least 7 message, you can reset for mute duration!"
            return a
         },
        unlocked(){return hasAchievement('A',11)},
    },
    story2: {
        title: "Storyline 2 - First Muting",
        body() { a="After 7 seconds waiting, you reached 7 message and just reseted for you first second of mute duration. Then you can unlock the buyables, boosting spamming speed and mute duration gain!"
            return a
         },
        unlocked(){return hasAchievement('A',12)},
    },
    story3: {
        title: "Storyline 3 - Muting Boost",
        body() { a="After frequent resetting, you finally reached 10 minutes of mute duration, and bought 'Muting Boost'."
            a=a+'<br>Now, muting is no longer a constraint, but a booster that helps you reach the next goal - 1 hour of mute duration.'
            return a
         },
        unlocked(){return hasAchievement('A',13)},
    },
    story4: {
        title: "Storyline 4 - Muted Stone",
        body() { a="You finally reached 1 hour of mute duration. A button appeared: 'Reset for +1 Muted Stone'."
            a=a+'<br>Knowing that your power was limited, you decided to reset immediately. And then you unlocked a milestone that boosts spamming speed based on Muted Stone.'
            a=a+'<br>You started a new round of spamming to the next Muted Stone.'
            return a
         },
        unlocked(){return hasAchievement('A',14)},
    },
    story5: {
        title: "Storyline 5 - Passive Muting",
        body() { a="When you got 2 Muted Stones, you unlocked some upgrades, and one free upgrade named 'Auto Muting' attracted you a lot."
            a=a+"<br>After buying it, you found that you can passively gain mute duration, so you don't need to reset for it again!"
            return a
         },
        unlocked(){return hasAchievement('A',21)},
    },
    story6: {
        title: "Storyline 6 - QoL is good",
        body() { a="16 Muted Stones! Now you get a lot of QoL, and the next one is inflation!"
            return a
         },
        unlocked(){return hasAchievement('A',22)},
    },
    story7: {
        title: "Storyline 7 - Liuliu66686 is too dilated",
        body() { a="The milestone '90 Muted Stones' unlocked the first Muted Stone challenge - Liuliu66686 is too dilated."
            a=a+'<br>Spamming speed is square rooted in it, but the goal is adjustd as well.'
            a=a+'<br>You completed the challenge easily. The next step is "100 Muted Stones" milestone.'
            return a
         },
        unlocked(){return hasAchievement('A',23)},
    },
    story8: {
        title: "Storyline 8 - You have been kicked out of the group chat",
        body() { a="Because you had so many Muted Stones, you were kicked out of the group! However, you can gain 1 Airplane Ticket<sup>[1]</sup> and rejoin the group."
            a=a+'<br>The first Airplane Ticket doubles your spamming speed and allows you to auto-buy buyables in J layer, and you will unlock more contents past 100 Muted Stones.'
            a=a+'<br>[1]In QQ, "getting an Airplane Ticket" means "getting kicked out of a group chat".'
            return a
         },
        unlocked(){return hasAchievement('A',24)},
    },
    story9: {
        title: 'Storyline 9 - <img src="s297.jpg" width="25" height="25">',
        body() { a='At the second Airplane Ticket, you found that you can send some emojis to speed up your spamming speed. Therefore, you began sending the bese<sup>[1]</sup> emoji based on your message.'
            a=a+'<br>Bese base effect: multiply spamming speed by bese^3'
            a=a+'<br>[1]Bese: <img src="s297.jpg" width="25" height="25">. It is called "拜谢(baixie)" in Chinese, but it has no formal English names, so I named it "bese" in this game.'
            return a
         },
        unlocked(){return hasAchievement('A',31)},
    },
    story10: {
        title: 'Storyline 10 - Further Challenge',
        body() { a='With the effect of bese, you reached 300 Muted Stones and unlocked the secone Muted Stone challenge.'
            a=a+'<br>"The effect of bese is powered to ^0.5, and all mults of mute duration are disabled." Though it seems easy, you still waited some time in it.'
            a=a+'<br>And now, the bese has even more effect!'
            return a
         },
        unlocked(){return hasAchievement('A',32)},
    },
    story11: {
        title: 'Storyline 11 - Bese Empire',
        body() { a='Now you can get more and more bese!'
            a=a+'<br>You find a loop boost: bese boosts spamming speed, spamming speed boosts mute duration, mute duration leads to Muted Stone and Airplane Ticket, and they boosts bese again...'
            a=a+'<br>The infinite inflation is coming.'
            return a
         },
        unlocked(){return hasAchievement('A',33)},
    },
    story12: {
        title: 'Storyline 12 - Challenge III',
        body() { a='With about 1e50,000 seconds of mute duration, you unlocked the thire Muted Stone challenge - Anti Dilation.'
            a=a+'<br>The nerf of this challenge is even much stronger, and you waited even longer.'
            a=a+'<br>However, the reward of it is strong as well - a super boost to the effect of "1 Muted Stone" milestone.'
            return a
         },
        unlocked(){return hasAchievement('A',34)},
    },
    story13: {
        title: 'Storyline 13 - The Power of Besedi',
        body() { a='3008308 Muted Stone - No one can reach it without modded QQ. Here, you met besedi, a people who masters bese.'
            a=a+'<br>He gave you 4 upgrades as gifts. With these gifts, you reached e5,000,000 seconds of mute duration easily.'
            a=a+'<br>Now, there is only one step to inflation...'
            return a
         },
        unlocked(){return hasAchievement('A',41)},
    },
    story14: {
        title: 'Storyline 14 - Ready to the end',
        body() { a='With the last Muted Stone upgrade bought, your spamming speed increases super-exponentially from e1.000e9 to ee1.000e100...'
            a=a+'<br>A new layer will come...'
            return a
         },
        unlocked(){return hasAchievement('A',42)},
    },
    story15: {
        title: 'Storyline 15 - Blacklist',
        body() { a='You got 1e100 Airplane Ticket, and you got blacklisted by your current group!'
            a=a+'<br>However, you found another group of Liuliu66686, joined the group and continued spamming.'
            a=a+'<br>Also, you can gain multiple types of message, boosting your spamming ability again!'
            return a
         },
        unlocked(){return hasAchievement('A',43)},
    },
    story16: {
        title: 'Storyline 16 - Double Blacklist',
        body() { a='You continued spamming in the second group. This time, the requirement of blacklist was increased to 1e200.'
            a=a+"<br>But it didn't really matter, and you reached the goal quickly and get blacklisted the second time."
            return a
         },
        unlocked(){return hasAchievement('A',44)},
    },
    story17: {
        title: 'Storyline 17 - New Challenges?',
        body() { a='Getting blacklisted 7 times, you unlocked the first Blacklist Challenge.'
            a=a+'<br>It nerfs your spamming speed super-exponentially, but with the boosts of message<sup>2~5</sup>, it did not affect your progress too much.'
            a=a+"<br>Finally, you completed it and get the massive boost to various types of message gain."
            return a
         },
        unlocked(){return hasAchievement('A',51)},
    },
    story18: {
        title: 'Storyline 18 - The End of Challenge',
        body() { a='At 1e5,000 Airplane Ticket, a new message type have been unlocked: message<sup>6</sup>. It boosts Airplane Ticket gain directly, making getting blacklisted easier.'
            a=a+'<br>However, the following two challenges are not so easy: BC2 nerfs your message<sup>6</sup>; BC3 even disables it.'
            a=a+'<br>Obviously, these challenges require you to be idle.'
            return a
         },
        unlocked(){return hasAchievement('A',52)},
    },
    story19: {
        title: 'Storyline 19 - Free Your Hands',
        body() { a='After 200 times blacklisted, you mastered getting blacklisted and can get blacklisted automatically!'
            return a
         },
        unlocked(){return hasAchievement('A',53)},
    },
    story20: {
        title: 'Storyline 20 - Account Suspension',
        body() { a='Your all number got inflated!'
            a=a+'<br>QQ official noticed the abnormal behavior of your account, and suspended your account for 10 years!'
            a=a+"<br>(Of course, the game won't let you wait for 10 years, so some boosts are given to speed up the unsuspension progress, and estimated minimum time for this stage is about 22 hours.)"
            return a
         },
        unlocked(){return hasAchievement('A',54)},
    },
    story21: {
        title: 'Storyline 21 - Unsuspension',
        body() { a='Now is year 2036. You are finally unsuspended.'
            a=a+'<br>You found most of groups created by Liuliu66686 have been banned, only one group named PEIT Anti-Lost Group remaining.'
            a=a+'<br>You tried to send a messgae here, but you were muted again, and your modded QQ is also ineffective.'
            a=a+'<br>But your mute duration are still increasing...'
            return a
         },
        unlocked(){return hasAchievement('A',15)},
    },
    story22: {
        title: 'Storyline 22 - Rebirth',
        body() { a='Due to the lack of upgrades, you have to be idle for minutes to get 1 hour of mute duration. Then you can re-unlock Muted Stone.'
            a=a+'<br>And the Muted Stone also works differently...'
            return a
         },
        unlocked(){return hasAchievement('A',25)},
    },
    story23: {
        title: 'Storyline 23 - Kicked Out Again',
        body() { a="Here, the function of Muted Stone have changed a lot, so you can't reach 100 Muted Stones."
            a=a+'<br>However, the Airplane Ticket only requires 12 Muted Stones now!'
            a=a+'<br>And you can get lots of Airplane Tickets with few Muted Stones!'
            return a
         },
        unlocked(){return hasAchievement('A',35)},
    },
    story24: {
        title: 'Storyline 24 - !?BlackkcalB?!',
        body() { a='After reaching 1.80e308 Airplane Tickets, you eventually re-unlocked blacklist.'
            a=a+'<br>Strangely, it did not work normally, as you could still be in this group.'
            a=a+'<br>However, it still gives boosts, helping your mute duration grow.'
            return a
         },
        unlocked(){return hasAchievement('A',45)},
    },
    story25: {
        title: 'Storyline 25 - THE END',
        body() { a='Your all number got inflated again...'
            a=a+'QQ official noticed the abnormal behavior of your account again, and banned your account forever!'
            a=a+'<br>(This is also the Endgame)'
            return a
         },
        unlocked(){return hasAchievement('A',55)},
    },
}
})

addLayer("J", {
    name: "jinyan", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "J", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(7), // Can be a function that takes requirement increases into account
    resource: "seconds of mute duration", // Name of prestige currency
    baseResource: "message", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        mult=mult.times(buyableEffect('J',12))
        if(hasUpgrade('J',22)) mult=mult.times(2)
        if(hasUpgrade('J',23)) mult=mult.times(3)
        if(hasUpgrade('J',24)) mult=mult.times(6.6686)
        if(hasUpgrade('J',42)) mult=mult.times('1e8000')
        
        mult=mult.times(buyableEffect('S',12))
        if(hasUpgrade('S',21)) mult=mult.times(upgradeEffect('S',21))
        if(hasUpgrade('S',22)) mult=mult.times(upgradeEffect('S',22))
        if(hasUpgrade('S',23)) mult=mult.times(0.5)
        if(hasUpgrade('S',24)) mult=mult.times(upgradeEffect('S',24))
        if(hasChallenge('S',12)) mult=mult.times(challengeEffect('S',12))
        if(hasUpgrade('S',31)) mult=mult.times(1e-10)
        if(hasUpgrade('S',52)) mult=mult.times(upgradeEffect('S',52))

        mult=mult.times(buyableEffect('F',12))
        if(hasUpgrade('F',23)) mult=mult.times(upgradeEffect('F',23))

        if(hasMilestone('B',1)) mult=mult.times(tmp.B.m3eff)

        if(hasUpgrade('F',12)) mult=mult.pow(1.05)
        if(hasUpgrade('S',41)) mult=mult.pow(1.08)
        if(hasUpgrade('S',43)) mult=mult.pow(1.066686)
        if(hasUpgrade('J',44)) mult=mult.pow(1.01)

        if(inChallenge('S',13)) mult=mult.pow(0.0005)

        if(inChallenge('S',12)) mult=n(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    update(diff){
        player.devSpeed=tmp.A.devSpeedCal
        player.A.points=n(player.A.achievements.length)
        if(player.F.autoJ&&hasMilestone('F',0)){layers.J.buyables[11].buyMax()
            layers.J.buyables[12].buyMax()
        }
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "j", description: "J: Reset for mute duration", onPress(){if (canReset(this.layer)) doReset(this.layer)},unlocked(){return !player.B2.points.gte(1)}},
    ],
    layerShown(){return !player.B2.points.gte(1)},
    passiveGeneration()
    {
        a = new Decimal(0)
        if(hasUpgrade('S',11)) a=a.add(0.1)
        if(hasMilestone('B',5)) a=a.add(1)
        return a
    },
    autoUpgrade(){return hasMilestone('B',5)},
	upgrades: {
		11: {
            title: "Begin Spamming",
            description: "Send 1 message per second.",
            cost: new Decimal(0),
		},
		12: {
            title: "Fast Spamming",
            description: "Unlock a buyable which can boost spamming speed.",
            cost: new Decimal(1),
		},
		13: {
            title: "Super Muting",
            description: "Unlock a buyable which can boost mute duration gain.",
            cost: new Decimal(10),
		},
        14: {
            title: "Mute Boost",
            description: "Mute duration boosts spamming speed.",
            cost: new Decimal(600),
            effect(){a=player.J.points.pow(0.2).add(1)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasUpgrade('J',13)},
		},
		21: {
            title: "Further Progress",
            description: "Unlock next layer. (Requires 3600 seconds of mute duration)",
            cost: new Decimal(0),
            canAfford(){return player.J.points.gte(3600)},
            unlocked(){return hasUpgrade('J',13)},
		},
        22: {
            title: "Divinity Power",
            description: "Multiply mute duration gain by 2.",
            cost: new Decimal(86400),
            unlocked(){return hasMilestone('S',2)},
		},
        23: {
            title: "Dilation",
            description: "Multiply mute duration gain by 3.",
            cost: new Decimal(604800),
            unlocked(){return hasMilestone('S',2)},
		},
        24: {
            title: "Liuliu66686",
            description: "Multiply mute duration gain by 6.6686.",
            cost: new Decimal(2592000),
            unlocked(){return hasMilestone('S',2)},
		},
        31: {
            title: "Stronger Buyable",
            description: "The base of 'Fast Spamming' is boosted from 2 to 2.2.",
            cost: new Decimal(1e110),
            unlocked(){return hasMilestone('S',8)},
		},
        32: {
            title: "Stronger Buyable II",
            description: "The base of 'Super Muting' is boosted from 2 to 2.1.",
            cost: new Decimal(1e120),
            unlocked(){return hasMilestone('S',8)},
		},
        33: {
            title: "Stronger Buyable III",
            description: "The base of 'Fast Spamming' is boosted from 2.2 to 2.3.",
            cost: new Decimal('1e3410'),
            unlocked(){return hasMilestone('S',9)},
		},
        34: {
            title: "Stronger Buyable IV",
            description: "The base of 'Super Muting' is boosted from 2.1 to 2.22.",
            cost: new Decimal('1e3610'),
            unlocked(){return hasMilestone('S',9)},
		},
        41: {
            title: "Gifts from Besedi I",
            description: "Spamming speed x1e10000, Bese gain x1e50",
            cost: new Decimal('1e905500'),
            unlocked(){return hasMilestone('S',13)},
		},
        42: {
            title: "Gifts from Besedi II",
            description: "Mute duration gain x1e8000, Bese gain x1e60",
            cost: new Decimal('1e1303000'),
            unlocked(){return hasMilestone('S',13)},
		},
        43: {
            title: "Gifts from Besedi III",
            description: "Spamming speed ^1.01, Bese gain x1e50",
            cost: new Decimal('1e1814000'),
            unlocked(){return hasMilestone('S',13)},
		},
        44: {
            title: "Gifts from Besedi IV",
            description: "Mute duration gain ^1.01, Bese gain ^1.03",
            cost: new Decimal('1e5000000'),
            unlocked(){return hasMilestone('S',13)},
		},
    },
    buyables: {
    11: {
        title() {a='Fast Spamming('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=n(2)
            if(hasUpgrade('J',31)) a=n(2.2)
            if(hasUpgrade('J',33)) a=n(2.3)
            return a
        },
        cost(x) { return n(10).pow(x) },
        effect(x) {return this.base().pow(x)
        },
        display() { return "Multiply spamming speed by "+format(this.base())+" per purchase<br>Currently: x"+format(buyableEffect(this.layer,this.id))+'<br>Requirement: '+format(this.cost())+' message' },
        canAfford() { return player.points.gte(this.cost()) },
        unlocked(){return hasUpgrade('J',12)},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.points.max(0.1).log(10).add(1).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
    12: {
        title() {a='Super Muting('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=n(2)
            if(hasUpgrade('J',32)) a=n(2.1)
            if(hasUpgrade('J',34)) a=n(2.22)
            return a
        },
        cost(x) { return n(10).pow(x) },
        effect(x) {return this.base().pow(x)},
        display() { return "Multiply mute duration gain by "+format(this.base())+" per purchase<br>Currently: x"+format(buyableEffect(this.layer,this.id))+'<br>Requirement: '+format(this.cost())+' seconds of mute duration' },
        canAfford() { return player.J.points.gte(this.cost()) },
        unlocked(){return hasUpgrade('J',13)},
        buy() {
            player.J.points = player.J.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.J.points.max(0.1).log(10).add(1).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
},
})

addLayer("S", {
    name: "jinyanstone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FFFB",
    requires() {a=new Decimal(3600)
        if(inChallenge('F',11)) a=n(1e310)
            return a
    }, // Can be a function that takes requirement increases into account
    resource: "Muted Stones", // Name of prestige currency
    baseResource: "seconds of mute duration", // Name of resource prestige is based on
    baseAmount() {return player.J.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    branches:['J'],
    canBuyMax(){return hasMilestone('S',2)||hasMilestone('B',5)},
    autoPrestige(){return (hasMilestone('S',3)||hasMilestone('B',5))&&player.S.autoReset},
    resetsNothing(){return hasMilestone('S',3)||hasMilestone('B',5)},
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for Muted Stone", onPress(){if (canReset(this.layer)) doReset(this.layer)},unlocked(){return (hasUpgrade('J',21)||hasAchievement('A',14))&&!player.B2.points.gte(1)}},
    ],
    layerShown(){return (hasUpgrade('J',21)||hasAchievement('A',14))&&!player.B2.points.gte(1)},
    autoUpgrade(){return hasMilestone('B',5)},
	milestones: {
        0: {
        requirementDescription: "1 Muted Stone",
        effectDescription() {return "Boost spamming speed based on Muted Stone.<br>Currently: x"+format(tmp.S.mil0eff)},
        done() { return player.S.points.gte(1) }
    },
    1: {
        requirementDescription: "2 Muted Stones",
        effectDescription() {return "Unlock Muted Stone upgrades."},
        done() { return player.S.points.gte(2) }
    },
    2: {
        requirementDescription: "4 Muted Stones",
        effectDescription() {return "Unlock more Muting upgrades, and you can buy max Muted Stones."},
        done() { return player.S.points.gte(4) }
    },
    3: {
        requirementDescription: "16 Muted Stones",
        effectDescription() {return "Muted Stone resets nothing, and unlock Muted Stones autobuyer."},
        toggles:[['S','autoReset']],
        done() { return player.S.points.gte(16) }
    },
    4: {
        requirementDescription: "90 Muted Stones",
        effectDescription() {return "Unlock Muted Stone challenge."},
        done() { return player.S.points.gte(90) }
    },
    5: {
        requirementDescription: "100 Muted Stones",
        effectDescription() {return "Unlock next layer."},
        done() { return player.S.points.gte(100) }
    },
    6: {
        requirementDescription: "105 Muted Stones",
        effectDescription() {return "Unlock more Muted Stone upgrades."},
        done() { return player.S.points.gte(105) },
        unlocked(){return hasMilestone('S',5)}
    },
    7: {
        requirementDescription: "300 Muted Stones",
        effectDescription() {return "Unlock the second Muted Stone challenge."},
        done() { return player.S.points.gte(300) },
        unlocked(){return hasMilestone('S',6)}
    },
    8: {
        requirementDescription: "350 Muted Stones",
        effectDescription() {return "Unlock more Muting upgrades."},
        done() { return player.S.points.gte(350) },
        unlocked(){return hasMilestone('S',7)}
    },
    9: {
        requirementDescription: "10000 Muted Stones",
        effectDescription() {return "Unlock more Muting upgrades."},
        done() { return player.S.points.gte(10000) },
        unlocked(){return hasMilestone('S',8)}
    },
    10: {
        requirementDescription: "150000 Muted Stones",
        effectDescription() {return "Power spamming speed to ^1.05，and unlock the third Muted Stone challenge."},
        done() { return player.S.points.gte(150000) },
        unlocked(){return hasMilestone('S',9)}
    },
    11: {
        requirementDescription: "500000 Muted Stones",
        effectDescription() {return "Unlock more Muted Stone upgrades."},
        done() { return player.S.points.gte(500000) },
        unlocked(){return hasMilestone('S',10)}
    },
    12: {
        requirementDescription: "2694000 Muted Stones",
        effectDescription() {return "The effect of upgrade 'Dilation II' is better."},
        done() { return player.S.points.gte(2694000) },
        unlocked(){return hasMilestone('S',11)}
    },
    13: {
        requirementDescription: "3008308 Muted Stones",
        effectDescription() {return "Unlock more Muting upgrades."},
        done() { return player.S.points.gte(3008308) },
        unlocked(){return hasMilestone('S',12)}
    },
    14: {
        requirementDescription: "38591000 Muted Stones",
        effectDescription() {return "Double the effect of 'Stronger Bese'."},
        done() { return player.S.points.gte(38591000) },
        unlocked(){return hasMilestone('S',13)}
    },
    15: {
        requirementDescription: "65600000 Muted Stones",
        effectDescription() {return "Unlock more Muted Stone upgrades."},
        done() { return player.S.points.gte(65600000) },
        unlocked(){return hasMilestone('S',14)}
    },
	},
    	upgrades: {
		11: {
            title: "Auto Muting",
            description: "Gain 10% mute duration on reset per second.",
            cost: new Decimal(0),
            unlocked(){return hasMilestone('S',1)},
		},
        12: {
            title: "Fast Spamming II",
            description: "Unlock a buyable which can further boost spamming speed.",
            cost: new Decimal(1),
            unlocked(){return hasMilestone('S',1)},
		},
        13: {
            title: "Super Muting II",
            description: "Unlock a buyable which can further boost mute duration gain.",
            cost: new Decimal(5),
            unlocked(){return hasMilestone('S',1)},
		},
        21: {
            title: "Divinity Power II",
            description: "Message boost mute duration gain.",
            cost: new Decimal(105),
            effect(){a=player.points.pow(0.05).add(1)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('S',6)},
		},
        22: {
            title: "Dilation II",
            description: "Muted Stones boost mute duration gain.",
            cost: new Decimal(115),
            effect(){a=player.S.points.add(1)
                if(hasMilestone('S',12)) a=a.pow(1500)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('S',6)},
		},
        23: {
            title: "Anti-Divinity Power",
            description: "Divide mute duration gain by 2, but spamming speed is powered to ^1.1.",
            cost: new Decimal(135),
            unlocked(){return hasMilestone('S',6)},
		},
        24: {
            title: "Muting Self-boost",
            description: "Mute duration boost Mute duration gain.",
            cost: new Decimal(185),
            effect(){a=player.J.points.pow(0.04).add(1)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('S',6)},
		},
        31: {
            title: "Anti-Divinity Power II",
            description: "Divide mute duration gain by 1e10, but bese gain is powered to ^1.1.",
            cost: new Decimal(13500),
            unlocked(){return hasMilestone('F',5)},
		},
        32: {
            title: "The Use of Airplane Ticket",
            description: "Strongly boost the effect of milestone '1 Airplane Ticket'.",
            cost: new Decimal(17500),
            unlocked(){return hasMilestone('F',5)},
		},
        33: {
            title: "Stronger Buyable V",
            description: "The base of 'Faster Spamming' is boosted from 10 to 100.",
            cost: new Decimal(23680),
            unlocked(){return hasMilestone('F',5)},
		},
        41: {
            title: "Failed to Resist",
            description: "Spamming speed /1e100, but mute duration gain mult ^1.07.",
            cost: new Decimal(525200),
            unlocked(){return hasMilestone('S',11)},
		},
        42: {
            title: "Stronger Buyable VII",
            description: "The base of 'Faster Spamming' and 'Hyper Muting' is powered to ^10.",
            cost: new Decimal(597000),
            unlocked(){return hasMilestone('S',11)},
		},
        43: {
            title: "Liuliu66686 II",
            description: "Spwmming speed xe6668.6，mute duration gain mult ^1.066686",
            cost: new Decimal(1200000),
            unlocked(){return hasMilestone('S',11)},
		},
        44: {
            title: "Dilation III",
            description: "Mute duration boost bese gain.",
            cost: new Decimal(1608000),
            effect(){a=player.J.points.add(1).pow(0.0001)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('S',11)},
		},
        51: {
            title: "Skilled Spammer",
            description: "Total playtime boosts spamming speed.",
            cost: new Decimal(65601000),
            effect(){a=n(player.timePlayed).pow(100000)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('S',15)},
		},
        52: {
            title: "Skilled Muter",
            description: "Total playtime boosts mute duration gain.",
            cost: new Decimal(73773900),
            effect(){a=n(player.timePlayed).pow(50000)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('S',15)},
		},
        53: {
            title: "Skilled Beser",
            description: "Total playtime boosts bese gain.",
            cost: new Decimal(78100000),
            effect(){a=n(player.timePlayed).pow(10)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('S',15)},
		},
        54: {
            title: "The End...?",
            description: "Spemming speed ^1.005",
            cost: new Decimal(90000000),
            unlocked(){return hasMilestone('S',15)},
		},
    },
    buyables: {
    11: {
        title() {a='Faster Spamming('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=n(10)
            if(hasUpgrade('S',33)) a=n(100)
            if(hasUpgrade('S',42)) a=a.pow(10)
            return a
        },
        cost(x) { return x.add(1).pow(2) },
        effect(x) {return this.base().pow(x)},
        display() { return "Multiply spamming speed by "+format(this.base())+" per purchase<br>Currently: x"+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' Muted Stones'},
        canAfford() { return player.S.points.gte(this.cost()) },
        unlocked(){return hasUpgrade('S',12)},
        buy() {
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.S.points.pow(0.5).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
    12: {
        title() {a='Hyper Muting('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=n(5)
            if(hasUpgrade('F',14)) a=n(75)
            if(hasUpgrade('S',42)) a=a.pow(10)
            return a
        },
        cost(x) { return x.add(1).pow(2) },
        effect(x) {return this.base().pow(x)},
        display() { return "Multiply mute duration gain by "+format(this.base())+" per purchase<br>Currently: x"+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' Muted Stone' },
        canAfford() { return player.S.points.gte(this.cost()) },
        unlocked(){return hasUpgrade('S',13)},
        buy() {
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.S.points.pow(0.5).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
},
challenges: {
    11: {
        name: "Liuliu66686 is too dilated",
        challengeDescription: "Spamming speed ^0.5 due to Liuliu66686! Reset the contents of the first layer on entering it.",
        goalDescription(){return '1e20 seconds of mute duration'},
        rewardDescription(){return 'Boost spamming speed based on message.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=player.points.add(1).pow(0.05)
            return a
        },
        unlocked(){return hasMilestone('S',4)},
        onEnter(){layerDataReset('J',[])
        player.J.points=n(0)
        player.points=n(0)},
        canComplete: function() {return player.J.points.gte(1e20)},
    },
    12: {
        name: "Besedi is too dilated",
        challengeDescription: "The effect of bese is powered to ^0.5, and all mults of mute duration are disabled. Reset the contents of the first layer on entering it.",
        goalDescription(){return '1e27 seconds of mute duration'},
        rewardDescription(){return 'Boost mute duration gain based on Bese.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=player.F.baixie.add(1)
            return a
        },
        unlocked(){return hasMilestone('S',7)},
        onEnter(){layerDataReset('J',[])
        player.J.points=n(0)
        player.points=n(0)},
        canComplete: function() {return player.J.points.gte(1e27)},
    },
    13: {
        name: "Anti-Dilation",
        challengeDescription: "Spamming speed and mute duration gain mult ^0.0005. Reset the contents of the first layer on entering it.",
        goalDescription(){return '1e10 message'},
        rewardDescription(){return "Strongly boost the effect of milestone '1 Muted Stone'. (^2000)"},
        unlocked(){return hasMilestone('S',10)},
        onEnter(){layerDataReset('J',[])
        player.J.points=n(0)
        player.points=n(0)},
        canComplete: function() {return player.points.gte(1e10)},
    },
},
    mil0eff(){a=n(1).add(player.S.points).pow(0.5)
        if(hasChallenge('S',13)) a=a.pow(2000)
        return a
    },
})

addLayer("F", {
    name: "planeticket", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        baixie: n(0),
    }},
    color: "#cbff11",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "Airplane Tickets", // Name of prestige currency
    baseResource: "Muted Stones", // Name of resource prestige is based on
    baseAmount() {return player.S.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    directMult() {a=n(1)
        if(hasMilestone('B',7)) a=a.times(tmp.B.m6eff) 
        return a
    },
    branches:['S'],
    update(diff){
        if(player.F.autoS&&hasMilestone('F',1)){layers.S.buyables[11].buyMax()
            layers.S.buyables[12].buyMax()
        }
        if(player.F.autoBX&&hasMilestone('F',9)){layers.F.buyables[11].buyMax()
            layers.F.buyables[12].buyMax()
        layers.F.buyables[13].buyMax()
            layers.F.buyables[14].buyMax()
        }
        if(hasMilestone('F',1)) player.F.baixie=player.F.baixie.add(tmp.F.bxgain.times(diff))
    },
    canBuyMax(){return hasMilestone('F',3)||hasMilestone('B',5)},
    autoPrestige(){return (hasMilestone('F',10)||hasMilestone('B',5))&&player.F.autoreset},
    resetsNothing(){return hasMilestone('F',3)||hasMilestone('B',5)},
    autoUpgrade(){return hasMilestone('B',5)&&!inChallenge('F',12)},
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for Airplane Ticket", onPress(){if (canReset(this.layer)) doReset(this.layer)},unlocked(){return (hasMilestone('S',5)||hasAchievement('A',24))&&!(hasMilestone('F',8)&&player.F.autoreset)&&!player.B2.points.gte(1)}},
    ],
    tabFormat: {
        "Main":{
        content: [ "main-display","prestige-button","resource-display",
        "milestones","upgrades","challenges"
    ],},
    "Bese":{
        content: [ "main-display","prestige-button","resource-display",
        ["display-text", () => tmp.F.bxshow],"buyables",
    ],
    unlocked(){return hasMilestone('F',1)}},
    },
    layerShown(){return (hasMilestone('S',5)||hasAchievement('A',24))&&!player.B2.points.gte(1)},
	milestones: {
        0: {
        requirementDescription: "1 Airplane Ticket",
        effectDescription() {return "Boost spamming speed based on Airplane Tickets, and unlock an autobuyer for buyables in J layer, which costs nothing.<br>Currently: x"+format(tmp.F.mil0eff)},
        toggles:[['F','autoJ']],
        done() { return player.F.points.gte(1) }
    },
    1: {
        requirementDescription: "2 Airplane Tickets",
        effectDescription() {return "Unlock an autobuyer for buyables in S layer, and unlock bese."},
        toggles:[['F','autoS']],
        done() { return player.F.points.gte(2) }
    },
    2: {
        requirementDescription: "3 Airplane Tickets",
        effectDescription() {return "Unlock bese buyables."},
        done() { return player.F.points.gte(3) }
    },
    3: {
        requirementDescription: "5 Airplane Tickets",
        effectDescription() {return "Airplane Ticket resets nothing, and you can buy max Airplane Tickets."},
        done() { return player.F.points.gte(5) }
    },
    4: {
        requirementDescription: "6 Airplane Tickets",
        effectDescription() {return "Unlock Airplane Ticket upgrades."},
        done() { return player.F.points.gte(6) }
    },
    5: {
        requirementDescription: "8 Airplane Tickets",
        effectDescription() {return "Unlock more Muted Stone upgrades."},
        done() { return player.F.points.gte(8) }
    },
    6: {
        requirementDescription: "12 Airplane Tickets",
        effectDescription() {return "The base formula for bese gain is greatly improved."},
        done() { return player.F.points.gte(12) },
        unlocked(){return hasMilestone('F',5)}
    },
    7: {
        requirementDescription: "13 Airplane Tickets",
        effectDescription() {return "Unlock Airplane Ticket challenge."},
        done() { return player.F.points.gte(13) },
        unlocked(){return hasMilestone('F',6)}
    },
    8: {
        requirementDescription: "15 Airplane Tickets",
        effectDescription() {return "Unlock more Airplane Ticket upgrades."},
        done() { return player.F.points.gte(15) },
        unlocked(){return hasMilestone('F',7)}
    },
    9: {
        requirementDescription: "16 Airplane Tickets",
        effectDescription() {return "Unlock bese buyables autobuyer."},
        toggles:[['F','autoBX']],
        done() { return player.F.points.gte(16) },
        unlocked(){return hasMilestone('F',8)}
    },
    10: {
        requirementDescription: "18 Airplane Tickets",
        effectDescription() {return "Unlock Airplane Ticket autobuyer."},
        toggles:[['F','autoreset']],
        done() { return player.F.points.gte(18) },
        unlocked(){return hasMilestone('F',9)}
    },
    11: {
        requirementDescription: "19 Airplane Tickets",
        effectDescription() {return "Unlock the second Airplane Ticket challenge."},
        done() { return player.F.points.gte(19) },
        unlocked(){return hasMilestone('F',10)}
    },
    12: {
        requirementDescription: "1e100 Airplane Tickets",
        effectDescription() {return "Unlock next layer."},
        done() { return player.F.points.gte(1e100) },
        unlocked(){return hasMilestone('F',11)}
    },
	},
    upgrades: {
        11: {
            title: "Insane Bese",
            description: "Muted Stone boost bese gain.",
            cost: new Decimal(6),
            effect(){a=player.S.points.pow(3).add(1)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('F',4)},
		},
        12: {
            title: "No Resisting",
            description: "Spamming speed is divided by 1e20, but mute duration gain mult is powered to ^1.05.",
            cost: new Decimal(8),
            unlocked(){return hasMilestone('F',4)},
		},
        13: {
            title: "Insane Bese II",
            description: "'1 Airplane Ticket' milestone affects bese gain in a reduced rate.",
            cost: new Decimal(9),
            effect(){a=tmp.F.mil0eff.pow(0.1)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('F',4)},
		},
        14: {
            title: "Stronger Buyable VI",
            description: "The base of 'Hyper Muting' is boosted from 5 to 75.",
            cost: new Decimal(11),
            unlocked(){return hasMilestone('F',4)},
		},
        21: {
            title: "Exponential Spamming",
            description: "Unlock a new buyable which can boost spamming speed exponentially.",
            cost: new Decimal(15),
            unlocked(){return hasMilestone('F',8)},
		},
        22: {
            title: "Bese Self-boost",
            description: "Bese boosts bese gain.",
            cost: new Decimal(17),
            effect(){a=player.F.baixie.pow(0.05)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('F',8)},
		},
        23: {
            title: "Divinity Power III",
            description: "Airplane Ticket boost mute duration gain.",
            cost: new Decimal(20),
            effect(){a=n('1e25000').pow(player.F.points)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('F',8)},
		},
    },
    buyables: {
        11: {
        title() {a='Stronger Bese('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=n(0.1)
            if(hasMilestone('S',14)) a=n(0.2)
            return a
        },
        cost(x) { return n(10).pow(x) },
        effect(x) {return this.base().times(x).add(1)
        },
        display() { return "Add "+format(this.base())+" to bese effect exponent per purchase<br>Currently: ^"+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' bese' },
        canAfford() { return player.F.baixie.gte(this.cost()) },
        unlocked(){return hasMilestone('F',2)},
        buy() {
            if(!hasMilestone('F',9))player.F.baixie = player.F.baixie.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.F.baixie.max(0.1).log(10).add(1).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
    12: {
        title() {a='Muting Promote('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=player.F.baixie.add(10).log(10)
            return a
        },
        cost(x) { return n(10).pow(x) },
        effect(x) {return this.base().pow(x)
        },
        display() { return "Multiply mute duration gain by "+format(this.base())+" per purchase (based on bese)<br>Currently: x"+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' bese' },
        canAfford() { return player.F.baixie.gte(this.cost()) },
        unlocked(){return hasMilestone('F',2)},
        buy() {
            if(!hasMilestone('F',9))player.F.baixie = player.F.baixie.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.F.baixie.max(0.1).log(10).add(1).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
    13: {
        title() {a='Bese Boost('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=player.F.baixie.add(2).log(2).pow(1.2)
            return a
        },
        cost(x) { return n(2).pow(x.pow(2)) },
        effect(x) {return this.base().pow(x)
        },
        display() { return "Multiply bese gain by "+format(this.base())+" per purchase (based on bese)<br>Currently: x"+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' bese' },
        canAfford() { return player.F.baixie.gte(this.cost()) },
        unlocked(){return hasMilestone('F',2)},
        buy() {
            if(!hasMilestone('F',9))player.F.baixie = player.F.baixie.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.F.baixie.max(0.5).log(2).pow(0.5).add(1).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
    14: {
        title() {a='Exponential Spamming('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        base(){a=n(0.01)
            return a
        },
        cost(x) { return n(1e100).pow(n(2).pow(x)) },
        effect(x) {return this.base().times(x).add(1)//.min(1.25)
        },
        display() { return "Add "+format(this.base())+" to spamming speed exponent per purchase<br>Currently: ^"+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' bese' },
        canAfford() { return player.F.baixie.gte(this.cost()) },
        unlocked(){return hasUpgrade('F',21)},
        buy() {
            if(!hasMilestone('F',9))player.F.baixie = player.F.baixie.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.F.baixie.max(0.1).log(1e100).max(0.5).log(2).add(1).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
    },
    },
    challenges: {
        11: {
        name: "No Muted Stone",
        challengeDescription: "You can't gain Muted Stones. Reset the contents of the first two layer on entering it.",
        goalDescription(){return '1e39,000 seconds of mute duration'},
        rewardDescription(){return 'Boost spamming speed based on message again.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=player.points.add(1).pow(0.04)
            return a
        },
        unlocked(){return hasMilestone('F',7)},
        onEnter(){layerDataReset('S',[])
            layerDataReset('J',[])
            player.S.points=n(0)
        player.J.points=n(0)
        player.points=n(0)},
        canComplete: function() {return player.J.points.gte('1e39000')},
    },
    12: {
        name: "Bese Ineffectiveness",
        challengeDescription: "The effect of bese is powered to ^0.000001. Reset the contents of the first two layer and Airplane Ticket upgrades on entering it.",
        goalDescription(){return '1e38,772 seconds of mute duration'},
        rewardDescription(){return 'Boost spamming speed based on Airplane Ticket again.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=n('1e38772').pow(player.F.points)
            return a
        },
        unlocked(){return hasMilestone('F',11)},
        onEnter(){layerDataReset('S',[])
            layerDataReset('J',[])
            player.F.upgrades=[]
            player.S.points=n(0)
        player.J.points=n(0)
        player.points=n(0)},
        canComplete: function() {return player.J.points.gte('1e38772')},
    },
    },
    mil0eff(){a=n(2).pow(player.F.points)
        if(hasUpgrade('S',32)) a=n(1e66).pow(player.F.points)
        return a
    },
    bxshow(){a="You have <h3 style='color: #cbff11; text-shadow: 0 0 3px #c2b280'>"+format(player.F.baixie)+"</h3> bese, multiplying spamming speed by "+format(tmp.F.bxeff)
        a=a+'<br>You gain '+format(tmp.F.bxgain)+' bese per second. (based on your message)'
        return a
    },
    bxeff(){a=player.F.baixie.add(1).pow(3)
        if(inChallenge('S',12)) a=a.pow(0.5)
        a=a.pow(buyableEffect('F',11))

        if(inChallenge('F',12)) a=a.pow(0.000001)
        return a
    },
    bxgain(){a=player.points.max(1).log(1e100)
        if(hasMilestone('F',6)) a=player.points.max(1).log(2).pow(10)

        if(hasUpgrade('J',41)) a=a.times(1e50)
        if(hasUpgrade('J',42)) a=a.times(1e60)
        if(hasUpgrade('J',43)) a=a.times(1e70)

        if(hasUpgrade('S',44)) a=a.times(upgradeEffect('S',44))
        if(hasUpgrade('S',53)) a=a.times(upgradeEffect('S',53))

        a=a.times(buyableEffect('F',13))
        if(hasUpgrade('F',11)) a=a.times(upgradeEffect('F',11))
        if(hasUpgrade('F',13)) a=a.times(upgradeEffect('F',13))
        if(hasUpgrade('F',22)) a=a.times(upgradeEffect('F',22))

        if(hasMilestone('B',2)) a=a.times(tmp.B.m4eff)

        if(hasUpgrade('S',31)) a=a.pow(1.1)
        if(hasUpgrade('J',44)) a=a.pow(1.03)
        return a
    }
})

addLayer("B", {
    name: "blacklist", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        m2:n(0),
        m3:n(0),
        m4:n(0),
        m5:n(0),
        m6:n(0),
    }},
    color: "#f122ba",
    requires: new Decimal(1e100), // Can be a function that takes requirement increases into account
    resource: "times blacklisted", // Name of prestige currency
    baseResource: "Airplane Ticket", // Name of resource prestige is based on
    baseAmount() {return player.F.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    base: n('1e100'),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    branches:['F'],
    update(diff){
        if(hasMilestone('B',0)) player.B.m2=player.B.m2.add(tmp.B.m2gain.times(diff))
        if(hasMilestone('B',1)) player.B.m3=player.B.m3.add(tmp.B.m3gain.times(diff))
        if(hasMilestone('B',2)) player.B.m4=player.B.m4.add(tmp.B.m4gain.times(diff))
        if(hasMilestone('B',4)) player.B.m5=player.B.m5.add(tmp.B.m5gain.times(diff))
        if(hasMilestone('B',7)) player.B.m6=player.B.m6.add(tmp.B.m6gain.times(diff))
    },
    doReset(resettingLayer){
        if(resettingLayer ='B'&&!hasMilestone('B',9)) {player.B.m6=n(0)}
    },
    canBuyMax(){return hasMilestone('B',12)},
    autoPrestige(){return hasMilestone('B',12)&&player.B.autoreset},
    resetsNothing(){return hasMilestone('B',9)},
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: get blacklisted", onPress(){if (canReset(this.layer)) doReset(this.layer)},unlocked(){return (hasMilestone('F',12)||hasAchievement('A',43))&&!player.B2.points.gte(1)}},
    ],
    tabFormat: {
        "Main":{
        content: [ "main-display","prestige-button","resource-display",
        "milestones","challenges"
    ],},
    "Massage^x":{
        content: [ "main-display","prestige-button","resource-display",
        ["display-text", () => tmp.B.m2show]
    ],
    unlocked(){return hasMilestone('B',0)}},
    },
    layerShown(){return (hasMilestone('F',12)||hasAchievement('A',43))&&!player.B2.points.gte(1)},
	milestones: {
    0: {
    requirementDescription: "Get blacklisted once",
    effectDescription() {return "Unlock message<sup>2</sup>."},
    done() { return player.B.points.gte(1) }
    },
    1: {
    requirementDescription: "Get blacklisted twice",
    effectDescription() {return "Unlock message<sup>3</sup>."},
    done() { return player.B.points.gte(2) }
    },
    2: {
    requirementDescription: "Get blacklisted 3 times",
    effectDescription() {return "Unlock message<sup>4</sup>."},
    done() { return player.B.points.gte(3) }
    },
    3: {
    requirementDescription: "Get blacklisted 4 times",
    effectDescription() {return "Times blacklisted also affect message<sup>3</sup> and message<sup>4</sup> gain, message<sup>2</sup> gain ^2."},
    done() { return player.B.points.gte(4) }
    },
    4: {
    requirementDescription: "Get blacklisted 5 times",
    effectDescription() {return "Unlock message<sup>5</sup>."},
    done() { return player.B.points.gte(5) }
    },
    5: {
    requirementDescription: "Get blacklisted 6 times",
    effectDescription() {return "The effect of message<sup>2~5</sup> is stronger, and get lots of QoL."},
    done() { return player.B.points.gte(6) }
    },
    6: {
    requirementDescription: "Get blacklisted 7 times",
    effectDescription() {return "Unlock blacklist challenge I."},
    done() { return player.B.points.gte(7) }
    },
    7: {
    requirementDescription: "Get blacklisted 8 times",
    effectDescription() {return "Unlock message<sup>6</sup>."},
    done() { return player.B.points.gte(8) }
    },
    8: {
    requirementDescription: "Get blacklisted 9 times",
    effectDescription() {return "Unlock blacklist challenge II and III."},
    done() { return player.B.points.gte(9) }
    },
    9: {
    requirementDescription: "Complete 3 blacklist challenges",
    effectDescription() {return "Getting blacklisted resets nothing."},
    done() { return hasChallenge('B',11)&&hasChallenge('B',12)&&hasChallenge('B',13) },
    unlocked(){return hasMilestone('B',8)}
    },
    10: {
    requirementDescription: "Get blacklisted 20 times",
    effectDescription() {return "Boost the effect of message<sup>5</sup> based on message<sup>6</sup>."},
    done() { return player.B.points.gte(20) },
    unlocked(){return hasMilestone('B',8)}
    },
    11: {
    requirementDescription: "Get blacklisted 50 times",
    effectDescription() {return "Message<sup>5</sup> boosts spamming speed directly, and its effect is powered to ^e100."},
    done() { return player.B.points.gte(50) },
    unlocked(){return hasMilestone('B',10)}
    },
    12: {
    requirementDescription: "Get blacklisted 100 times",
    effectDescription() {return "Each time you get blacklisted after 100 times multiply message<sup>6</sup> gain by 1.01."},
    done() { return player.B.points.gte(100) },
    unlocked(){return hasMilestone('B',11)}
    },
    13: {
    requirementDescription: "Get blacklisted 200 times",
    effectDescription() {return "Unlock auto-blacklisted, and you can get as many times blacklisted as possible."},
    done() { return player.B.points.gte(200) },
    unlocked(){return hasMilestone('B',12)},
    toggles:[['B','autoreset']],
    },
    14: {
    requirementDescription: "Get blacklisted 1.000F308 times",
    effectDescription() {return "Unlock next layer."},
    done() { return player.B.points.gte('(e^308)1') },
    unlocked(){return hasMilestone('B',13)},
    },
	},
    upgrades: {
    },
    buyables: {
    },
    challenges: {
        11: {
        name: "Blacklist Challenge I",
        challengeDescription: "The exponent of spamming speed is powered to ^0.6.",
        goalDescription(){return '1e100 Airplane Tickets'},
        rewardDescription(){return 'Boost message<sup>4</sup> and message<sup>5</sup> gain based on times blacklisted.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=player.B.points.tetrate(3)
            return a
        },
        unlocked(){return hasMilestone('B',6)},
        onEnter(){},
        canComplete: function() {return player.F.points.gte('1e100')},
    },
    12: {
        name: "Blacklist Challenge II",
        challengeDescription: "The exponent of the effect of message<sup>6</sup> is powered to ^0.5.",
        goalDescription(){return '1e6000 Airplane Tickets'},
        rewardDescription(){return 'Boost message<sup>6</sup> gain based on message.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=player.points.slog().max(1)
            return a
        },
        unlocked(){return hasMilestone('B',8)},
        onEnter(){},
        canComplete: function() {return player.F.points.gte('1e6000')},
    },
    13: {
        name: "Blacklist Challenge III",
        challengeDescription: "Message<sup>2~6</sup> have no effect.",
        goalDescription(){return '1e2500 Airplane Tickets'},
        rewardDescription(){return 'Boost message<sup>6</sup> gain based on message<sup>6</sup>.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=player.B.m6.add(1).log(10).max(1)
            return a
        },
        unlocked(){return hasMilestone('B',8)},
        onEnter(){},
        canComplete: function() {return player.F.points.gte('1e2500')},
    },
    },
    m2show(){a="You have <h3 style='color: #f122ba; text-shadow: 0 0 3px #c2b280'>"+format(player.B.m2)+"</h3> message<sup>2</sup>, multiplying spamming speed by "+format(tmp.B.m2eff)+'.'
        a=a+'<br>You will gain '+format(tmp.B.m2gain)+' message<sup>2</sup> per second. (based on times blacklisted)'
        if(hasMilestone('B',1)) {a=a+"<br><br>You have <h3 style='color: #dae029; text-shadow: 0 0 3px #c2b280'>"+format(player.B.m3)+"</h3> message<sup>3</sup>，multiplying mute duration and message<sup>2</sup>gain by "+format(tmp.B.m3eff)+'.'
        a=a+'<br>You will gain '+format(tmp.B.m3gain)+' message<sup>3</sup> per second. (based on message<sup>2</sup>)'}
        if(hasMilestone('B',2)) {a=a+"<br><br>You have <h3 style='color: #1debf6; text-shadow: 0 0 3px #c2b280'>"+format(player.B.m4)+"</h3> message<sup>4</sup>，multiplying bese and message<sup>3</sup>gain by "+format(tmp.B.m4eff)+'.'
        a=a+'<br>You will gain '+format(tmp.B.m4gain)+' message<sup>4</sup> per second. (based on message<sup>3</sup>)'}
        if(hasMilestone('B',4)) {a=a+"<br><br>You have <h3 style='color: #ff0000; text-shadow: 0 0 3px #c2b280'>"+format(player.B.m5)+"</h3> message<sup>5</sup>，powering the effect of message<sup>2~4</sup> to ^"+format(tmp.B.m5eff)+'.'
        a=a+'<br>You will gain '+format(tmp.B.m5gain)+' message<sup>5</sup> per second. (based on message)'}
        if(hasMilestone('B',7)) {a=a+"<br><br>You have <h3 style='color: #1af399ff; text-shadow: 0 0 3px #c2b280'>"+format(player.B.m6)+"</h3> message<sup>6</sup>，multiplying Airplane Ticket gain by "+format(tmp.B.m6eff)+'.'
        a=a+' (Reset on every blacklist reset)<br>You will gain '+format(tmp.B.m6gain)+' message<sup>6</sup> per second. (based on times blacklisted)'}
        return a
    },
    m2eff(){a=player.B.m2.add(1).slog().pow(0.5)
        b=n(10).tetrate(a)

        if(hasMilestone('B',5)) b=player.B.m2.pow(0.5)

        b=b.pow(tmp.B.m5eff)

        if(inChallenge('B',13)) b=n(1)
        return b
    },
    m2gain(){a=player.B.points.pow(player.B.points)
        a=a.times(tmp.B.m3eff)

        if(hasMilestone('B',3)) a=a.pow(2)

        if(player.B.points.eq(0)) a=n(0)
        return a
    },
    m3eff(){a=player.B.m3.add(1).slog().pow(0.5)
        b=n(10).tetrate(a)

        if(hasMilestone('B',5)) b=player.B.m3.pow(0.5)

        b=b.pow(tmp.B.m5eff)

        if(inChallenge('B',13)) b=n(1)
        return b
    },
    m3gain(){a=player.B.m2.add(10).log(10)

        if(hasMilestone('B',2)) a=a.times(tmp.B.m4eff)
        if(hasMilestone('B',3)) a=a.times(player.B.points.pow(player.B.points))

        if(player.B.points.lt(2)) a=n(0)
        return a
    },
    m4eff(){a=player.B.m4.add(1).slog().pow(0.5)
        b=n(10).tetrate(a)

        if(hasMilestone('B',5)) b=player.B.m4.pow(0.5)

        b=b.pow(tmp.B.m5eff)

        if(inChallenge('B',13)) b=n(1)
        return b
    },
    m4gain(){a=player.B.m3.add(10).log(10)
        if(hasMilestone('B',3)) a=a.times(player.B.points.pow(player.B.points))

        if(hasChallenge('B',11))a=a.times(challengeEffect('B',11))

        if(player.B.points.lt(3)) a=n(0)
        return a
    },
    m5eff(){a=player.B.m5.add(1).slog().pow(0.5)
        b=n(10).tetrate(a)

        if(hasMilestone('B',5)) b=n(10).pow(player.B.m5.add(1).log(10).pow(0.5))

        if(hasMilestone('B',10)) b=n(10).pow(b.log(10).times(player.B.m6.pow(10)))
        if(hasMilestone('B',11)) b=b.pow(1e100)

        if(inChallenge('B',13)) b=n(1)
        return b
    },
    m5gain(){a=player.points.add(1).log(10).add(1).log(10)

        if(hasChallenge('B',11))a=a.times(challengeEffect('B',11))

        if(player.B.points.lt(5)) a=n(0)
        return a
    },
    m6eff(){b=n(1)
        if(inChallenge('B',12)) b=n(0.5)

        a=n(10).pow(player.B.m6.pow(b))

        if(inChallenge('B',13)) a=n(1)
        return a
    },
    m6gain(){a=player.B.points.sub(7)

        if(hasChallenge('B',12)) a=a.times(challengeEffect('B',12))
        if(hasChallenge('B',13)) a=a.times(challengeEffect('B',13))
        if(hasMilestone('B',12)) a=a.times(n(1.01).pow(player.B.points.sub(100)))

        if(player.B.points.lt(8)) a=n(0)
        return a
    },
})

addLayer("B2", {
    name: "ban", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Ban", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        Time: n(0),
        Timelimit:n(0),
        cd:n(0),

        BanPoint:n(0),
        totalBP:n(0),
    }},
    color: "#ffffff",
    requires() {a=new Decimal('(e^308)1')
        if(player.B2.points.gte(2)) a=n(1e330)
            return a
    }, // Can be a function that takes requirement increases into account
    resource: "times banned", // Name of prestige currency
    baseResource: "times blacklisted", // Name of resource prestige is based on
    baseAmount() {a= player.B.points
        if(hasMilestone('B2',0)) a=player.b3.points
        return a
    }, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    base: n(2),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    branches:['B'],
    update(diff){
        if(hasMilestone('B2',0)) player.B2.Time=player.B2.Time.add(tmp.B2.unBanSpeed.times(diff).min(n(31536000).times(2))).min(player.B2.Timelimit)
        if(player.B2.cd.gt(0)) player.B2.cd=player.B2.cd.sub(diff).max(0)
    },
    doReset(resettingLayer){
        if(resettingLayer == 'B2') {player.B2.Timelimit=n(86400).times(3650)
            layerDataReset('B')
            layerDataReset('F')
            layerDataReset('S')
            layerDataReset('J')
            layerDataReset('b3')
            layerDataReset('f2')
            layerDataReset('s2')
            layerDataReset('j2')
        }
    },
    canBuyMax(){return false},
    autoPrestige(){return false},
    resetsNothing(){return false},
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    ],
    tabFormat: {
        "Main":{
        content: [ "main-display","prestige-button","resource-display",'milestones','clickables','buyables',
        ["display-text", () => tmp.B2.unBanText],'upgrades',
    ],
    unlocked(){return hasMilestone('B',0)}},
    },
    layerShown(){return hasMilestone('B',14)||hasAchievement('A',54)},
	milestones: {
    0: {
    requirementDescription: "Get suspended",
    effectDescription() {a= "Because you are suspended, you need to wait "+formatTime(315360000)+" to unsuspend! Time remaining: "+formatTime(n(315360000).sub(player.B2.Time))
        a=a+'<br>During this time, you will be unable to send message!'
        return a
    },
    done() { return player.B2.points.gte(1) },
    unlocked(){return player.B2.points.gte(1)},
    },
    1: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(300))},
    effectDescription() {a= "Unlock a clickable, which reduces account suspension time by 1 second on click and has a cooldown time of 0.2 seconds."
        return a
    },
    done() { return player.B2.Time.gte(300) },
    unlocked(){return player.B2.points.gte(1)},
    },
    2: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(600))},
    effectDescription() {a= "The base effect of clickable is increased to 1.5s."
        return a
    },
    done() { return player.B2.Time.gte(600) },
    unlocked(){return hasMilestone('B2',1)},
    },
    3: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(1800))},
    effectDescription() {a= "Unlock a buyable which can boost basic unsuspension speed."
        return a
    },
    done() { return player.B2.Time.gte(1800) },
    unlocked(){return hasMilestone('B2',2)},
    },
    4: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(3600))},
    effectDescription() {a= "Add 10% of unsuspension speed to clickable effect."
        return a
    },
    done() { return player.B2.Time.gte(3600) },
    unlocked(){return hasMilestone('B2',3)},
    },
    5: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(7200))},
    effectDescription() {a= "Unlock a new buyable which can multiply unsuspension speed."
        return a
    },
    done() { return player.B2.Time.gte(7200) },
    unlocked(){return hasMilestone('B2',4)},
    },
    6: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(86400))},
    effectDescription() {a= "Add 15% of unsuspension speed to clickable effect."
        return a
    },
    done() { return player.B2.Time.gte(86400) },
    unlocked(){return hasMilestone('B2',5)},
    },
    7: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(172800))},
    effectDescription() {a= "Double unsuspension speed, and half the CD of clickable."
        return a
    },
    done() { return player.B2.Time.gte(172800) },
    unlocked(){return hasMilestone('B2',6)},
    },
    8: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(432000))},
    effectDescription() {a= "Unlock a buyable which can greatly boost basic unsuspension speed."
        return a
    },
    done() { return player.B2.Time.gte(432000) },
    unlocked(){return hasMilestone('B2',7)},
    },
    9: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(2592000))},
    effectDescription() {a= "Add 25% of unsuspension speed to clickable effect."
        return a
    },
    done() { return player.B2.Time.gte(2592000) },
    unlocked(){return hasMilestone('B2',8)},
    },
    10: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(5184000))},
    effectDescription() {a= "The exponent of the effect of 'Unsuspension Boost III' is increased to 0.6."
        return a
    },
    done() { return player.B2.Time.gte(5184000) },
    unlocked(){return hasMilestone('B2',9)},
    },
    11: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(n(2592000).times(3)))},
    effectDescription() {a= "Unlock Suspension Ascension, resetting suspension time and milestones, but you can gain Suspension Points, which can be used for upgrades.<br>Also, unsuspension speed x1.08."
        return a
    },
    done() { return player.B2.Time.gte(n(2592000).times(3)) },
    unlocked(){return hasMilestone('B2',10)},
    },
    12: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(31536000))},
    effectDescription() {a= "Unlock more ascension upgrades, unsuspension speed x1.04 (permanently)"
        return a
    },
    done() { return player.B2.Time.gte(31536000) },
    unlocked(){return hasMilestone('B2',11)||hasMilestone('B2',12)},
    },
    13: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(n(31536000).times(1.25)))},
    effectDescription() {a= "Suspension Point gain x1.05 (permanently)"
        return a
    },
    done() { return player.B2.Time.gte(n(31536000).times(1.25)) },
    unlocked(){return hasMilestone('B2',12)||hasMilestone('B2',13)},
    },
    14: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(n(31536000).times(2)))},
    effectDescription() {a= "Unsuspension progress becomes slower after 20%! Currently: /"+format(tmp.B2.SpeedDivide)
        return a
    },
    done() { return player.B2.Time.gte(n(31536000).times(2)) },
    unlocked(){return hasMilestone('B2',13)},
    },
    15: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(n(31536000).times(2.25)))},
    effectDescription() {a= "Unlock more ascension upgrades (permanently)"
        return a
    },
    done() { return player.B2.Time.gte(n(31536000).times(2.25)) },
    unlocked(){return hasMilestone('B2',14)||hasMilestone('B2',15)},
    },
    16: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(n(31536000).times(2.5)))},
    effectDescription() {a= "Unsuspension speed x1.13"
        return a
    },
    done() { return player.B2.Time.gte(n(31536000).times(2.5)) },
    unlocked(){return hasMilestone('B2',15)},
    },
    17: {
    requirementDescription() {return "Remaining time less than "+formatTime(n(315360000).sub(n(31536000).times(2.75)))},
    effectDescription() {a= "Improve the formula of Suspension Point gain when the remaining time is less than 8 days. (permanently)"
        return a
    },
    done() { return player.B2.Time.gte(n(31536000).times(2.75)) },
    unlocked(){return hasMilestone('B2',16)||hasMilestone('B2',17)},
    },
    18: {
    requirementDescription() {return "Finish the unsuspension progress of "+formatTime(315360000)},
    effectDescription() {a= "You can regain mute duration, and all functions related to unsuspension are disabled."
        return a
    },
    done() { return player.B2.Time.gte(n(31536000).times(10)) },
    unlocked(){return hasMilestone('B2',17)||hasMilestone('B2',18)},
    },
    19: {
    requirementDescription: "Get banned again",
    effectDescription() {a= "You are banned forever!"
        return a
    },
    done() { return player.B2.points.gte(2) },
    unlocked(){return player.b3.points.gte(1)||hasMilestone('B2',19)},
    },
	},
    clickables:{
        11: {
            title() {a='Reduce Unsuspension Time'
                return a
            },
            display() {a='Reduce '+formatTime(this.effect())+' unsuspension time onclick<br>Cooldown: '+formatTime(player.B2.cd)
                return a
            },
            effect(){a=n(1)
                if(hasMilestone('B2',2)) a=n(1.5)
                b=n(0)
                if(hasMilestone('B2',4)) b=b.add(0.1)
                if(hasMilestone('B2',6)) b=b.add(0.15)
                if(hasMilestone('B2',9)) b=b.add(0.25)
                if(hasUpgrade('B2',22)) b=b.add(0.13)
                a=a.add(tmp.B2.unBanSpeed.times(b))
                return a
            },
            unlocked(){return hasMilestone('B2',1)||hasUpgrade('B2',11)},
            canClick() {return this.unlocked()&&player.B2.cd.eq(0)&&!hasMilestone('B2',18)},
            onClick() {player.B2.Time=player.B2.Time.add(this.effect())
                a=n(0.2)
                if(hasMilestone('B2',7)) a=n(0.1)
                player.B2.cd=a
            },
        },
        21: {
        title() {a='Suspension Ascension'
            return a
        },
        effect() {a= player.B2.Time.div(86400).sub(90).max(0).pow(0.5)
            if(hasMilestone('B2',17)&&player.B2.Time.gte(n(31536000).times(2))) a=a.times(n(2).pow(player.B2.Time.div(31536000).pow(2).sub(4)))
            if(hasUpgrade('B2',21)) a=a.times(upgradeEffect('B2',21))
            if(hasMilestone('B2',13)) a=a.times(1.05)
                return a
        },
        display() { return "Reset all suspension progress, but gain Suspension Points based on unsuspended time.<br>Currently: +"+format(this.effect())},
        canClick() { return player.B2.Time.gte(7776000)&&!hasMilestone('B2',18) },
        unlocked(){return hasMilestone('B2',11)||player.B2.BanPoint.gt(0)},
        onClick() {
            player.B2.BanPoint = player.B2.BanPoint.add(this.effect())
            player.B2.totalBP = player.B2.totalBP.add(this.effect())
            setBuyableAmount(this.layer,11,n(0))
            setBuyableAmount(this.layer,12,n(0))
            setBuyableAmount(this.layer,13,n(0))
            player.B2.Time = n(0)
            a=[]
            if(hasMilestone('B2',12)) a.push(12)
            if(hasMilestone('B2',13)) a.push(13)
            if(hasMilestone('B2',15)) a.push(15)
            if(hasMilestone('B2',17)) a.push(17)
            player.B2.milestones = a
        },
    },
    },
    buyables: {
        11: {
        title() {a='Unsuspension Boost('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        cost(x) { return x.pow(2) },
        effect(x) {a= x.add(1)
                return a
        },
        display() { return "Add 1s/s to basic unsuspension speed per purchase<br>Currently: +"+formatTime(buyableEffect(this.layer,this.id))+'/s<br>Increase: '+formatTime(this.cost())+' of suspension time' },
        canAfford() { return player.B2.Time.gte(this.cost())&&!hasMilestone('B2',18) },
        unlocked(){return hasMilestone('B2',3)||hasUpgrade('B2',12)},
        buy() {
            player.B2.Time = player.B2.Time.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    12: {
        title() {a='Unsuspension Boost II('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        cost(x) { return n(2).pow(x).times(60) },
        effect(x) {a= x.add(1)
                return a
        },
        display() { return "Add 1 to unsuspension speed multiplier<br>Currently: +"+format(buyableEffect(this.layer,this.id))+'x<br>Increase: '+formatTime(this.cost())+' of suspension time' },
        canAfford() { return player.B2.Time.gte(this.cost())&&!hasMilestone('B2',18) },
        unlocked(){return hasMilestone('B2',5)},
        buy() {
            player.B2.Time = player.B2.Time.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    13: {
        title() {a='Unsuspension Boost III('
            a=a+format(getBuyableAmount(this.layer,this.id))
            a=a+')'
            return a
        },
        cost(x) { return n(1.15).pow(x).times(3600) },
        effect(x) {b=n(0.5)
            if(hasMilestone('B2',10)) b=n(0.6)
            a= x.times(15).pow(b)
                return a
        },
        display() { return "Add 15s/s to basic unsuspension speed per purchase, but the effect of this buyable is powered to ^0.5<br>Currently: +"+formatTime(buyableEffect(this.layer,this.id))+'/s<br>Increase: '+formatTime(this.cost())+' of suspension time' },
        canAfford() { return player.B2.Time.gte(this.cost())&&!hasMilestone('B2',18) },
        unlocked(){return hasMilestone('B2',8)},
        buy() {
            player.B2.Time = player.B2.Time.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    },
    upgrades: {
		11: {
            title: "Starting Boost",
            description: "Unlock the clickable immediately after ascension; unsuspension speed x1.05",
            cost: new Decimal(0.5),
            unlocked(){return player.B2.BanPoint.gt(0)},
            canAfford(){return true},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        12: {
            title: "Starting Boost II",
            description: "Unlock 'Unsuspension Boost' buyable immediately after ascension; unsuspension speed x1.08",
            cost: new Decimal(1.5),
            unlocked(){return player.B2.BanPoint.gt(0)},
            canAfford(){return hasUpgrade('B2',11)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        13: {
            title: "Black Hole",
            description: "Unsuspension speed x1.1",
            cost: new Decimal(8),
            unlocked(){return player.B2.BanPoint.gt(0)},
            canAfford(){return hasUpgrade('B2',12)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        21: {
            title: "Unsuspension Study",
            description: "Each Suspension Point add 1% to Suspension Point gain.",
            cost: new Decimal(10),
            effect(){a=player.B2.BanPoint.times(0.01).add(1)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('B2',12)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        22: {
            title: "Active Unsuspension",
            description: "Add 13% of unsuspension speed to clickable effect.",
            cost: new Decimal(15),
            unlocked(){return hasMilestone('B2',12)},
            canAfford(){return hasUpgrade('B2',21)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        23: {
            title: "Passive Unsuspension",
            description: "Unsuspension speed x1.07",
            cost: new Decimal(20),
            unlocked(){return hasMilestone('B2',12)},
            canAfford(){return hasUpgrade('B2',22)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        24: {
            title: "Keep Playing",
            description: "Each hour of playtime add 0.5% to unsuspension speed, capped at +50%.",
            cost: new Decimal(25),
            effect(){a=n(player.timePlayed).div(3600).times(0.005).add(1).min(1.5)
                return a
            },
            effectDisplay(){a='x'+format(this.effect())
                return a
            },
            unlocked(){return hasMilestone('B2',12)},
            canAfford(){return hasUpgrade('B2',23)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        31: {
            title: "Unsuspension Export",
            description: "Unsuspension speed x1.1",
            cost: new Decimal(350),
            unlocked(){return hasMilestone('B2',15)},
            canAfford(){return true},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        32: {
            title: "Unsuspension Export II",
            description: "Unsuspension speed x1.08",
            cost: new Decimal(550),
            unlocked(){return hasMilestone('B2',15)},
            canAfford(){return hasUpgrade('B2',31)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        33: {
            title: "Formula Improvement",
            description: "The boost to unsuspension speed from Suspension Point is stronger.",
            cost: new Decimal(1000),
            unlocked(){return hasMilestone('B2',15)},
            canAfford(){return hasUpgrade('B2',32)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
        34: {
            title: "Formula Improvement II",
            description: "Reduce the nerf to unsuspension speed when the remaining time is less than 8 days.",
            cost: new Decimal(1250),
            unlocked(){return hasMilestone('B2',15)},
            canAfford(){return hasUpgrade('B2',33)},
            currencyLocation() {return player.B2},
            currencyDisplayName: 'Suspension Points',
            currencyInternalName: 'BanPoint',
		},
    },
    unBanSpeed(){a=buyableEffect('B2',11)
        a=a.add(buyableEffect('B2',13))
        a=a.times(buyableEffect('B2',12))
        if(hasMilestone('B2',7)) a=a.times(2)
        if(hasMilestone('B2',11)) a=a.times(1.08)
        if(hasMilestone('B2',12)) a=a.times(1.04)
        if(hasMilestone('B2',15)) a=a.times(1.13)
        if(player.B2.BanPoint.gt(0)) a=a.times(tmp.B2.BPeffect)
        if(hasUpgrade('B2',11)) a=a.times(1.05)
        if(hasUpgrade('B2',12)) a=a.times(1.08)
        if(hasUpgrade('B2',13)) a=a.times(1.1)
        if(hasUpgrade('B2',23)) a=a.times(1.07)
        if(hasUpgrade('B2',24)) a=a.times(upgradeEffect('B2',24))
        if(hasUpgrade('B2',31)) a=a.times(1.1)
        if(hasUpgrade('B2',32)) a=a.times(1.08)

        if(player.B2.Time.gte(n(31536000).times(2))) a=a.div(tmp.B2.SpeedDivide)
        return a
    },
    unBanText(){a='You are reducing '+formatTime(tmp.B2.unBanSpeed)+' of suspension time per second.'
        a=a+"<br>Remaining Time: "+formatTime(n(315360000).sub(player.B2.Time))
        if(player.B2.BanPoint.gt(0)) {a=a+'<br>You have '+format(player.B2.BanPoint)+' Suspension Points, multiplying unsuspension speed by '+format(tmp.B2.BPeffect)
            a=a+'.<br>You have '+format(player.B2.totalBP)+' Suspension Points in total.'
        }
        if(!hasMilestone('B2',3)&&!player.B2.BanPoint.gt(0)) a=''
        return a
    },
    BPeffect(){b=n(0.25)
        if(hasUpgrade('B2',33)) b=n(0.29)
        a=player.B2.BanPoint.add(1).pow(b)
        return a
    },
    SpeedDivide(){b=n(1)
        if(hasUpgrade('B2',34)) b=n(0.5)
        a=n(10).pow(player.B2.Time.div(31536000).pow(2).sub(4).times(b)).max(1)
        return a
    }
})