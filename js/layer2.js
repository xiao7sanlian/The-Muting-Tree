addLayer("j2", {
    name: "jinyan2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "J", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "seconds of mute duration", // Name of prestige currency
    //baseResource: "条消息", // Name of resource prestige is based on
    //baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    update(diff){
        if(hasMilestone('B2',18)) addPoints('j2',tmp.j2.timeGain.times(diff))
    },
    automate(){
        if((hasMilestone('s2',3)||hasMilestone('f2',3))&&player.s2.autoj2) {
            layers.j2.buyables[11].buy()
            layers.j2.buyables[12].buyMax()
            if(player.j2.points.gte(3600))layers.j2.buyables[13].buy()
            layers.j2.buyables[14].buyMax()
        }
        if(hasMilestone('f2',3)&&player.f2.autoj2b) {
            if(layers.j2.buyables[21].unlocked()&&layers.j2.buyables[21].canAfford()) layers.j2.buyables[21].buyMax()
            if(layers.j2.buyables[22].unlocked()) layers.j2.buyables[22].buyMax()
            if(layers.j2.buyables[23].unlocked()) layers.j2.buyables[23].buyMax()
            if(layers.j2.buyables[24].unlocked()) layers.j2.buyables[24].buyMax()
        }
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "j", description: "J: 进行禁言重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone('B2',18)&&!hasMilestone('B2',19)},
    //passiveGeneration()
    //{
    //    a = new Decimal(0)
    //    return a
    //},
    autoUpgrade(){return false},
	upgrades: {
    },
    buyables: {
    11: {
        title() {a='Begin Muting'
            return a
        },
        cost(x) { return n(0) },
        effect(x) {return n(1)},
        display() { return 'Gain 1 second of mute duration per second.<br>Cost: '+formatTimeR(this.cost())+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('B2',18)},
        buy() {
            if(!hasMilestone('s2',3))player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        purchaseLimit(){return n(1)},
        style: {'height':'120px','width':'120px'},
    },
    12: {
        title() {a='Double Muting('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(2)
            if(getBuyableAmount('s2',11).gte(1)) a=a.add(0.1)
            if(getBuyableAmount('j2',22).gte(1)&&!inChallenge('f2',11)) a=a.add(buyableEffect('j2',22))
            return a
        },
        cost(x) { return n(10).pow(x.add(1)) },
        effect(x) {return this.base().pow(x)},
        display() { return "Multiply mute duration gain by "+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+formatTimeR(this.cost())+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(this.cost()) },
        unlocked(){return getBuyableAmount('j2',11).gte(1)},
        buy() {
            if(!hasMilestone('s2',3))player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.j2.points.max(1).log(10).floor()
            if(!hasMilestone('b3',8))setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
            if(hasMilestone('b3',8))setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
        purchaseLimit(){a=n(3)
            if(getBuyableAmount('s2',11).gte(1)) a=a.add(1)
            if(getBuyableAmount('s2',14).gte(1)) a=a.add(buyableEffect('s2',14))
            if(hasMilestone('b3',1)) a=a.add(tmp.b3.mil1effect)
            if(hasMilestone('b3',8)) a=n(1e400)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    13: {
        title() {a='Muted Stone'
            return a
        },
        cost(x) { return n(0) },
        effect(x) {return n(1)},
        display() { return 'Re-unlock Muted Stone, mute duration gain x1.5 when having at least 1 Muted Stone.<br>Requirement: '+formatTimeR(3600)+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(3600) },
        unlocked(){return getBuyableAmount('j2',11).gte(1)},
        buy() {
            //player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        purchaseLimit(){return n(1)},
        style: {'height':'120px','width':'120px'},
    },
    14: {
        title() {a='Stronger Muting('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=player.s2.best.times(0.05).add(1)
            if(!hasMilestone('b3',7))a=a.min(5.55)
            return a
        },
        cost(x) { return x.add(1).pow(2).times(3600) },
        effect(x) {return this.base().pow(x)},
        display() { return "Multiply mute duration gain by "+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+' (based on max Muted Stone)<br>Cost: '+formatTimeR(this.cost())+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(this.cost()) },
        unlocked(){return getBuyableAmount('j2',13).gte(1)&&hasMilestone('s2',2)},
        buy() {
            if(!hasMilestone('s2',3))player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.j2.points.div(3600).max(0).pow(0.5).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(2)
            if(getBuyableAmount('s2',14).gte(1)) a=a.add(buyableEffect('s2',14))
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    21: {
        title() {a='Challenge Boost'
            return a
        },
        cost(x) { return n(86400) },
        effect(x) {a=n(1)
            if(hasChallenge('s2',11)) a=a.times(2)
            if(hasChallenge('s2',12)) a=a.times(2)
            if(getBuyableAmount('f2',14).gte(1)) a=a.pow(buyableEffect('f2',14))
            return a
        },
        display() { return 'Double mute duration gain for each completed Muted Stone Challenge.<br>Currently: x'+format(this.effect())+'<br>Cost: '+formatTimeR(this.cost())+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(this.cost()) },
        unlocked(){return hasChallenge('s2',11)},
        buy() {
            if(!hasMilestone('f2',3))player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.j2.points.gte(86400)
            if(a)setBuyableAmount(this.layer, this.id, n(1))
        },
        purchaseLimit(){return n(1)},
        style: {'height':'120px','width':'120px'},
    },
    22: {
        title() {a='Base Inflation('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(0.2)
            return a
        },
        cost(x) { return n(1e10).pow(x.add(1)).times(1e10*86400*365) },
        effect(x) {return this.base().times(x)},
        display() { return " The base of 'Double Muting' +"+format(this.base())+'x'+format(getBuyableAmount(this.layer,this.id))+"="+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+formatTimeR(this.cost())+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',5)},
        buy() {
            if(!hasMilestone('s2',3))player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.j2.points.div(1e10*86400*365).max(1).log(1e10).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(2)
            if(hasMilestone('f2',9)) a=a.add(1)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    23: {
        title() {a='Exponentially Muting('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(1.01)
            if(hasChallenge('f2',12)) a=a.add(0.01)
            return a
        },
        cost(x) { return n(10).pow(x.add(1).pow(2)).times(year(1e34)) },
        effect(x) {return this.base().pow(x)},
        display() { return "Power mute duration gain to ^"+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+' (in seconds)<br>Cost: '+formatTimeR(this.cost())+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',5)},
        buy() {
            if(!hasMilestone('s2',3))player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.j2.points.div(year(1e34)).max(1).log(10).pow(0.5).floor()
            if(!hasMilestone('b3',9))setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
            if(hasMilestone('b3',9))setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a))
        },
        purchaseLimit(){a=n(2)
            if(hasChallenge('f2',14)) a=a.add(98)
            if(hasMilestone('b3',4)) a=a.add(tmp.b3.mil4effect)
            if(hasMilestone('b3',9)) a=n(1e400)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    24: {
        title() {a='Anti-Boost('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=player.j2.points.add(2).log(2).pow(0.5)
            return a
        },
        cost(x) { return n(1e6).pow(x.add(1)).times(year(1e48)) },
        effect(x) {return this.base().pow(x)},
        display() { return "Multiply Airplane Ticket gain by "+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+' (based on mute duration)<br>Cost: '+formatTimeR(this.cost())+' seconds of mute duration' },
        canAfford() { return player.j2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',5)},
        buy() {
            if(!hasMilestone('s2',3))player.j2.points = player.j2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.j2.points.div(year(1e48)).max(1).log(1e6).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(2)
            if(hasMilestone('f2',10)) a=a.add(98)
            if(hasMilestone('b3',1)) a=a.add(tmp.b3.mil1effect)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    },
    tabFormat: {
        "Main":{
        content: [ ["display-text", () => tmp.j2.resourceText],
        "buyables","upgrades","challenges"
    ],},
    },
    timeGain(){a=n(0)
        if(getBuyableAmount('j2',11).gte(1)) a=a.add(1)
        if(getBuyableAmount('j2',12).gte(1)) a=a.times(buyableEffect('j2',12))
        if(!inChallenge('f2',11)){
        if(getBuyableAmount('j2',13).gte(1)&&player.s2.best.gte(1)) a=a.times(1.5)
        if(getBuyableAmount('j2',14).gte(1)) a=a.times(buyableEffect('j2',14))
        if(getBuyableAmount('j2',21).gte(1)) a=a.times(buyableEffect('j2',21))}

        if(hasMilestone('s2',0)) a=a.times(tmp.s2.mil0eff)
        if(getBuyableAmount('s2',12).gte(1)) a=a.times(buyableEffect('s2',12))
        if(getBuyableAmount('s2',13).gte(1)) a=a.times(buyableEffect('s2',13))
        if(hasChallenge('s2',11)) a=a.times(challengeEffect('s2',11))
        if(hasChallenge('s2',12)) a=a.times(2)

        if(hasMilestone('f2',0)) a=a.times(tmp.f2.mil0eff)
        if(getBuyableAmount('f2',11).gte(1)) a=a.times(buyableEffect('f2',11))
        if(getBuyableAmount('f2',13).gte(1)) a=a.times(buyableEffect('f2',13))

        if(inChallenge('f2',14)&&!hasMilestone('b3',4)) a=a.div(player.f2.points.max(1))
        if((inChallenge('f2',14)||hasChallenge('f2',14))&&hasMilestone('b3',4)) a=a.times(player.f2.points.max(1))

        if(hasMilestone('b3',6)) a=a.times(100)

        if(getBuyableAmount('j2',23).gte(1)&&!inChallenge('f2',11)) a=a.pow(buyableEffect('j2',23))
        if(hasMilestone('b3',0)&&a.gte(1)) a=a.pow(tmp.b3.mil0effect)
        if(inChallenge('f2',12)) a=a.pow(1.5)

        if(inChallenge('s2',11)) a=a.max(0).pow(0.5).div(10)
        if(inChallenge('f2',13)) a=a.max(0).pow(0.05)
        if(player.j2.points.gte(3600)&&inChallenge('s2',12)) a=a.div(player.j2.points.div(3600).pow(2))

        if(player.B2.points.gte(2)) a=n(0)
        return a
    },
    resourceText(){a='You have '+formatTimeR(player.j2.points)+' seconds of mute duration.<br>'
        a=a+'You will gain '+formatTimeR(tmp.j2.timeGain)+' seconds of mute duration per second.<br>'
        //if(player.j2.points.gte(3600))a=a+'在禁言时长超过1小时后，禁言时长获取将减少！<br>'
        a=a+'<br>'
        return a
    },
})

addLayer("s2", {
    name: "jinyanstone2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        best:n(0),
    }},
    color: "#00FFFB",
    requires() {a=new Decimal(3600)
        if(inChallenge('f2',12)) a=n(1e333)
        return a
    }, // Can be a function that takes requirement increases into account
    resource: "Muted Stones", // Name of prestige currency
    baseResource: "seconds of mute duration", // Name of resource prestige is based on
    baseAmount() {return player.j2.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    base(){a=n(2)
        if(hasChallenge('s2',12)) a=a.sub(0.1)
        if(hasMilestone('s2',6)) a=a.sub(0.05)
        if(hasMilestone('b3',5)) a=a.sub(0.25)
        return a
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        
        return mult
    },
    branches:['j2'],
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    hotkeys: [
        {key: "s", description: "S: Reset for Muted Stone", onPress(){if (canReset(this.layer)) doReset(this.layer)},unlocked(){return (getBuyableAmount('j2',13).gte(1)||hasAchievement('A',25))}},
    ],
    update(diff){
        
    },
    doReset(resettingLayer){
        if(resettingLayer=='f2'){kept=[]
            if(hasChallenge('f2',11)) kept.push('milestones')
            layerDataReset(this.layer, kept)
        }
        if(resettingLayer=='b3'){kept=[]
            if(hasMilestone('b3',5)) kept.push('milestones')
            layerDataReset(this.layer, kept)
        }
    },
    automate(){
        if(hasMilestone('s2',4)&&hasMilestone('f2',2)&&player.f2.autos2c) player[this.layer].challenges[11]=1
        if(hasMilestone('s2',5)&&hasMilestone('f2',2)&&player.f2.autos2c) player[this.layer].challenges[12]=1
        if((hasMilestone('f2',5))&&player.f2.autos2u1) {
            if(layers.s2.buyables[11].canAfford())layers.s2.buyables[11].buy()
            if(layers.s2.buyables[12].canAfford())layers.s2.buyables[12].buy()
            layers.s2.buyables[13].buyMax()
            layers.s2.buyables[14].buyMax()
        }
        //if(hasMilestone('f2',3)&&player.f2.autoj2b) {
       //     if(layers.j2.buyables[21].unlocked()) layers.j2.buyables[21].buy()
        //}
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (getBuyableAmount('j2',13).gte(1)||hasAchievement('A',25))&&!hasMilestone('B2',19)},
    autoUpgrade(){return false},
    canBuyMax(){return true},
    autoPrestige(){return (hasMilestone('f2',4))&&player.f2.autos2},
    resetsNothing(){return hasMilestone('f2',4)},
    milestones: {
        0: {
        requirementDescription: "1 Muted Stone",
        effectDescription() {return "Boost mute duration gain based on best Muted Stone.<br>Currently: x"+format(tmp.s2.mil0eff)},
        done() { return player.s2.points.gte(1) }
    },
    1: {
        requirementDescription: "2 Muted Stones",
        effectDescription() {return "Unlock Muted Stone upgrades."},
        done() { return player.s2.points.gte(2) },
        unlocked(){return hasMilestone('s2',0)},
    },
    2: {
        requirementDescription: "3 Muted Stones",
        effectDescription() {return "Unlock more Muting upgrades."},
        done() { return player.s2.points.gte(3) },
        unlocked(){return hasMilestone('s2',1)},
    },
    3: {
        requirementDescription: "5 Muted Stones",
        effectDescription() {return "Automatically buy the first row of Muting upgrades without spending anything."},
        toggles:[['s2','autoj2']],
        done() { return player.s2.points.gte(5) },
        unlocked(){return hasMilestone('s2',2)},
    },
    4: {
        requirementDescription: "10 Muted Stones",
        effectDescription() {return "Unlock the first Muted Stone challenge."},
        done() { return player.s2.points.gte(10) },
        unlocked(){return hasMilestone('s2',3)},
    },
    5: {
        requirementDescription: "12 Muted Stones",
        effectDescription() {return "Re-unlock Airplane Ticket, and unlock the second Muted Stone challenge when having at least 1 Airplane Ticket."},
        done() { return player.s2.points.gte(12) },
        unlocked(){return hasMilestone('s2',4)},
    },
    6: {
        requirementDescription: "100 Muted Stones",
        effectDescription() {return "Reduce the base of Muted Stone requirement by 0.05, and the base of 'Super Muting' is added by 0.05."},
        done() { return player.s2.points.gte(100) },
        unlocked(){return hasMilestone('s2',5)},
    },
	},
	upgrades: {
    },
    buyables: {
        11: {
        title() {a='More Muting'
            return a
        },
        cost(x) { return n(2) },
        effect(x) {return n(1)},
        display() { return 'The base of "Double Muting" +0.1, and the max purshase times of it +1<br>Cost: '+format(this.cost())+' Muted Stones' },
        canAfford() { return player.s2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('s2',1)},
        buy() {
            if(!hasMilestone('f2',3))player.s2.points = player.s2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        purchaseLimit(){return n(1)},
        style: {'height':'120px','width':'120px'},
    },
     12: {
        title() {a='Time Boost'
            return a
        },
        cost(x) { return n(3) },
        effect(x) {return n(player.timePlayed).div(86400).add(1)},
        display() { return 'Boost mute duration gain based on total playtime.<br>Currently: x'+format(this.effect())+'<br>Cost: '+format(this.cost())+' Muted Stones' },
        canAfford() { return player.s2.points.gte(this.cost()) },
        unlocked(){return getBuyableAmount('s2',11).gte(1)},
        buy() {
            if(!hasMilestone('f2',3))player.s2.points = player.s2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        purchaseLimit(){return n(1)},
        style: {'height':'120px','width':'120px'},
    },
    13: {
        title() {a='Mute Self-Boost('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=player.j2.points.max(1).log(10).times(0.1).add(1)
            if(hasChallenge('f2',13)) a=a.max(player.j2.points.max(2).log(2).pow(2))
            return a
        },
        cost(x) { return x.add(1).pow(2).times(5) },
        effect(x) {return this.base().pow(x)},
        display() { return "Mute duration gain x"+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+' (based on mute duration)<br>Cost: '+format(this.cost())+' Muted Stones' },
        canAfford() { return player.s2.points.gte(this.cost()) },
        unlocked(){return getBuyableAmount('s2',12).gte(1)},
        buy() {
            if(!hasMilestone('f2',3))player.s2.points = player.s2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.s2.points.div(5).max(0).pow(0.5).floor()
            if(player.s2.points.lt(5)) a=n(0)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(2)
            if(hasMilestone('f2',4))a=a.add(2)
            if(hasMilestone('f2',9)) a=a.add(10)
            if(hasMilestone('b3',2)) a=a.add(86)
            if(hasMilestone('b3',5)) a=a.add(tmp.b3.mil5effect)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    14: {
        title() {a='More Buyables('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(1)
            if(getBuyableAmount('f2',12).gt(0)) a=a.add(buyableEffect('f2',12)) 
            return a
        },
        cost(x) { return n(2).pow(x.add(3)) },
        effect(x) {return x.times(this.base())},
        display() { return "The max purshase times of 'Double Muting' and 'Stronger Muting' +"+format(this.base())+'x'+format(getBuyableAmount(this.layer,this.id))+"="+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' Muted Stones' },
        canAfford() { return player.s2.points.gte(this.cost()) },
        unlocked(){return getBuyableAmount('s2',12).gte(1)},
        buy() {
            if(!hasMilestone('f2',3))player.s2.points = player.s2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.s2.points.div(8).max(0.5).log(2).add(1).floor()
            if(player.s2.points.lt(5)) a=n(0)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(2)
            if(hasMilestone('f2',3)) a=a.add(1)
            if(hasChallenge('f2',12)) a=a.add(2)
            if(hasMilestone('f2',9)) a=a.add(10)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    },
    challenges: {
        11: {
        name: "Mute Weakened",
        challengeDescription: "Power mute duration to ^0.5, than divide it by 10.",
        goalDescription(){return formatTimeR(900)+' mute duration'},
        rewardDescription(){return 'Boost mute duration gain based on current Muted Stone, and unlock a new Mute upgrade.<br>Currently: x'+format(challengeEffect(this.layer,this.id))},
        rewardEffect(){a=player.s2.points.add(1).pow(0.5)
            return a
        },
        unlocked(){return hasMilestone('s2',4)},
        onEnter(){},
        canComplete: function() {return player.j2.points.gte(900)},
    },
    12: {
        name: "Mute Weakened II",
        challengeDescription: "Reduce mute duration gain based on mute duration.",
        goalDescription(){return formatTimeR(43200)+' mute duration'},
        rewardDescription(){return 'Double mute duration gain, and reduce the base of Muted Stone requirement by 0.05.'},
        unlocked(){return hasMilestone('s2',5)&&player.f2.total.gte(1)},
        onEnter(){},
        canComplete: function() {return player.j2.points.gte(43200)},
    },
    },
    tabFormat: {
        "Main":{
        content: [ "main-display","prestige-button","resource-display",'milestones',
        "buyables","upgrades","challenges"
    ],},
    },
    mil0eff(){a=player.s2.best.add(1).pow(0.5)
        if(hasMilestone('b3',4)) a=a.pow(19)
        return a
    },
})

addLayer("f2", {
    name: "planeticket2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        best:n(0),
    }},
    color: "#cbff11",
    requires: new Decimal(12), // Can be a function that takes requirement increases into account
    resource: "Airplane Tickets", // Name of prestige currency
    baseResource: "Muted Stones", // Name of resource prestige is based on
    baseAmount() {return player.s2.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 10, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if(getBuyableAmount('j2',24).gte(1)) mult=mult.times(buyableEffect('j2',24))
        if(getBuyableAmount('f2',21).gte(1)) mult=mult.times(buyableEffect('f2',21))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    directMult() {a=n(1)
        return a
    },
    branches:['s2'],
    update(diff){
    },
    canBuyMax(){return false},
    autoPrestige(){return false},
    resetsNothing(){return false},
    autoUpgrade(){return false},
    row: 2, // Row the layer is in on the tree (0 is the first row)
    doReset(resettingLayer){
        if(resettingLayer=='b3'){kept=[]
            if(hasMilestone('b3',5)) kept.push('milestones','challenges')
            layerDataReset(this.layer, kept)
        }
    },
    hotkeys: [
        {key: "f", description: "F: Reset for Airplane Ticket", onPress(){if (canReset(this.layer)) doReset(this.layer)},unlocked(){return (hasMilestone('s2',5)||hasAchievement('A',35))}},
    ],
    tabFormat: {
        "Main":{
        content: [ "main-display","prestige-button","resource-display",
        "milestones","buyables","challenges"
    ],},
    },
    layerShown(){return (hasMilestone('s2',5)||hasAchievement('A',35))&&!hasMilestone('B2',19)},
    passiveGeneration()
    {
        a = new Decimal(0)
        if(hasMilestone('b3',0)) a=a.add(0.01)
        if(hasMilestone('b3',1)) a=a.add(0.99)
        return a
    },
    automate(){
        if(hasMilestone('b3',2)&&player.b3.autof2u) {
            layers.f2.buyables[11].buyMax()
            layers.f2.buyables[12].buyMax()
            layers.f2.buyables[13].buyMax()
            layers.f2.buyables[14].buyMax()
            layers.f2.buyables[21].buyMax()
        }
    },
	milestones: {
        0: {
        requirementDescription: "1 Airplane Ticket",
        effectDescription() {return "Boost mute duration gain based on total Airplane Tickets.<br>Currently: x"+format(tmp.f2.mil0eff)},
        done() { return player.f2.points.gte(1) }
    },
    1: {
        requirementDescription: "1,000 Airplane Tickets",
        effectDescription() {return "Unlock a Airplane Ticket upgrade."},
        done() { return player.f2.points.gte(1000) },
        unlocked(){return hasMilestone('f2',0)},
    },
    2: {
        requirementDescription: "5,000 Airplane Tickets",
        effectDescription() {return "Unlock the second Airplane Ticket upgrade, automatically complete Muted Stong challenges upon unlocking them."},
        done() { return player.f2.points.gte(5000) },
        unlocked(){return hasMilestone('f2',1)},
        toggles:[['f2','autos2c']],
    },
    3: {
        requirementDescription: "100,000 Airplane Tickets",
        effectDescription() {return "Muted Stone upgrades no longer cost Muted Stones, keep autobuyer for the first row of Muting upgrades and unlock autobuyer for the second row of them, and the max purshase times of 'More Buyables' +1."},
        done() { return player.f2.points.gte(100000) },
        unlocked(){return hasMilestone('f2',2)},
        toggles:[['s2','autoj2'],['f2','autoj2b']],
    },
    4: {
        requirementDescription: "10,000,000 Airplane Tickets",
        effectDescription() {return "Muted Stone resets nothing, unlock Muted Stones autobuyer, and the max purshase times of 'Mute Self-Boost' +2."},
        done() { return player.f2.points.gte(10000000) },
        unlocked(){return hasMilestone('f2',3)},
        toggles:[['f2','autos2']],
    },
    5: {
        requirementDescription: "1.00e9 Airplane Tickets",
        effectDescription() {return "Unlock autobuyer for Muted Stone upgrade, and unlock more Mute upgrades."},
        done() { return player.f2.points.gte(1e9) },
        unlocked(){return hasMilestone('f2',4)},
        toggles:[['f2','autos2u1']],
    },
    6: {
        requirementDescription: "5.00e10 Airplane Tickets",
        effectDescription() {return "Unlock the third Airplane Ticket upgrade and a Airplane Ticket challenge."},
        done() { return player.f2.points.gte(5e10) },
        unlocked(){return hasMilestone('f2',5)},
    },
    7: {
        requirementDescription: "1.00e12 Airplane Tickets",
        effectDescription() {return "Unlock the second Airplane Ticket challenge."},
        done() { return player.f2.points.gte(1e12) },
        unlocked(){return hasMilestone('f2',6)},
    },
    8: {
        requirementDescription: "1.00e15 Airplane Tickets",
        effectDescription() {return "Unlock 2 more Airplane Ticket upgrades."},
        done() { return player.f2.points.gte(1e15) },
        unlocked(){return hasMilestone('f2',7)},
    },
    9: {
        requirementDescription: "1.00e18 Airplane Tickets",
        effectDescription() {return "The max purshase times of 'Mute Self-Boost' and 'More Buyables' +10, the max purshase times of 'Base Inflation' +1"},
        done() { return player.f2.points.gte(1e18) },
        unlocked(){return hasMilestone('f2',8)},
    },
    10: {
        requirementDescription: "1.00e19 Airplane Tickets",
        effectDescription() {return "The max purshase times of 'Anti-Boost' +98"},
        done() { return player.f2.points.gte(1e19) },
        unlocked(){return hasMilestone('f2',9)},
    },
    11: {
        requirementDescription: "1.00e28 Airplane Tickets",
        effectDescription() {return "Unlock the third Airplane Ticket challenge."},
        done() { return player.f2.points.gte(1e28) },
        unlocked(){return hasMilestone('f2',10)},
    },
    12: {
        requirementDescription: "1.33e154 Airplane Tickets",
        effectDescription() {return "Unlock the fourth Airplane Ticket challenge."},
        done() { return player.f2.points.gte(1.33e154) },
        unlocked(){return hasMilestone('f2',11)},
    },
    13: {
        requirementDescription: "1.80e308 Airplane Tickets",
        effectDescription() {return "Re-unlock blacklist."},
        done() { return player.f2.points.gte('1.8e308') },
        unlocked(){return hasMilestone('f2',12)},
    },
    },
    buyables: {
        11: {
        title() {a='Super Muting('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(1.1)
            if(hasMilestone('s2',6)) a=a.add(0.05)
            if(hasMilestone('b3',2)) a=a.add(tmp.b3.mil2effect)
            return a
        },
        cost(x) { return n(2).pow(x.add(1)) },
        effect(x) {return this.base().pow(x)},
        display() { return "Mute duration gain x"+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' Airplane Tickets' },
        canAfford() { return player.f2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',1)},
        buy() {
            player.f2.points = player.f2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.f2.points.max(1).log(2).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(1024)
            if(hasMilestone('b3',3)) a=a.add(tmp.b3.mil3effect)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    12: {
        title() {a='Buyable Frenzy('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(1)
            return a
        },
        cost(x) { return n(100).pow(x.add(1)) },
        effect(x) {return this.base().times(x)},
        display() { return "The base effect of 'More Buyables' +"+format(this.base())+'x'+format(getBuyableAmount(this.layer,this.id))+"="+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' Airplane Tickets' },
        canAfford() { return player.f2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',2)},
        buy() {
            player.f2.points = player.f2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.f2.points.max(1).log(100).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(5)
            if(hasMilestone('b3',5)) a=a.add(tmp.b3.mil5effect)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    13: {
        title() {a='Challenge Boost II('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(2)
            if(hasChallenge('f2',11)) a=a.add(2)
            if(hasChallenge('f2',12)) a=a.add(2)
            if(hasChallenge('f2',13)) a=a.add(2)
            if(hasChallenge('f2',14)) a=a.add(2)
            return a
        },
        cost(x) { return n(10).pow(x.add(1)).times(5e9) },
        effect(x) {return this.base().pow(x)},
        display() { return "Mute duration gain x"+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+' (based on completed Airplane Ticket challenges)<br>Cost: '+format(this.cost())+' Airplane Tickets' },
        canAfford() { return player.f2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',6)},
        buy() {
            player.f2.points = player.f2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.f2.points.div(5e9).max(1).log(10).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(297)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    14: {
        title() {a='Super Buyable('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=n(2)
            return a
        },
        cost(x) { return n(1e5).pow(x.add(1)).times(1e10) },
        effect(x) {return this.base().pow(x)},
        display() { return "The effect of 'Challenge Boost' ^"+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+'<br>Cost: '+format(this.cost())+' Airplane Tickets' },
        canAfford() { return player.f2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',8)},
        buy() {
            player.f2.points = player.f2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.f2.points.div(1e10).max(1).log(1e5).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(3)
            if(hasMilestone('b3',4)) a=a.add(tmp.b3.mil4effect)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    21: {
        title() {a='Anti-Boost II('
            a=a+formatWhole(getBuyableAmount(this.layer,this.id))+'/'+formatWhole(this.purchaseLimit())
            a=a+')'
            return a
        },
        base(){a=player.s2.points.pow(0.75)
            return a
        },
        cost(x) { return n(1e5).pow(x.add(1)).times(1e10) },
        effect(x) {return this.base().pow(x)},
        display() { return "Airplane Ticket gain x"+format(this.base())+'<sup>'+format(getBuyableAmount(this.layer,this.id))+"</sup>="+format(buyableEffect(this.layer,this.id))+' (based on Muted Stone)<br>Cost: '+format(this.cost())+' Airplane Tickets' },
        canAfford() { return player.f2.points.gte(this.cost()) },
        unlocked(){return hasMilestone('f2',8)},
        buy() {
            player.f2.points = player.f2.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(this.purchaseLimit()))
        },
        buyMax(){if(!this.unlocked()) return 
            a=player.f2.points.div(1e10).max(1).log(1e5).floor()
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(a).min(this.purchaseLimit()))
        },
        purchaseLimit(){a=n(58)
            if(hasMilestone('b3',6)) a=a.add(tmp.b3.mil6effect)
            return a
        },
        style: {'height':'120px','width':'120px'},
    },
    },
    challenges: {
        11: {
        name: "Disabled Upgrade",
        challengeDescription: "All Mute upgrades are disabled except 'Begin Muting' and 'Double Muting'.",
        goalDescription(){return formatTimeR(86400*365*50)+' mute duration'},
        rewardDescription(){return 'The effect of milestone "1 Airplane Ticket" is powered to ^5, and keep Muted Stone milestones on Airplane Ticket reset.'},
        unlocked(){return hasMilestone('f2',6)},
        onEnter(){},
        canComplete: function() {return player.j2.points.gte(86400*365*50)},
    },
    12: {
        name: "Inflation",
        challengeDescription: "You can't gain Muted Stone, but mute duration gain ^1.5",
        goalDescription(){return formatTimeR(year(1e15))+' mute duration'},
        rewardDescription(){return "The max purshase times of 'More Buyables' +2, the base of 'Exponentially Muting' +0.01"},
        unlocked(){return hasMilestone('f2',7)},
        onEnter(){},
        canComplete: function() {return player.j2.points.gte(year(1e15))},
    },
    13: {
        name: "You are gone",
        challengeDescription: "Power mute duration gain to ^0.05.",
        goalDescription(){return formatTimeR(43200)+' mute duration'},
        rewardDescription(){return "The base of 'Mute Self-Boost' is stronger."},
        unlocked(){return hasMilestone('f2',11)},
        onEnter(){},
        canComplete: function() {return player.j2.points.gte(43200)},
    },
    14: {
        name: "No More Challenges",
        challengeDescription: "Mute duration gain is divided by the number of Airplane Ticket.",
        goalDescription(){return formatTimeR(year(1e125))+' mute duration'},
        rewardDescription(){return "Add 98 to the max purshase times of 'Exponential Mute'."},
        unlocked(){return hasMilestone('f2',12)},
        onEnter(){},
        canComplete: function() {return player.j2.points.gte(year(1e125))},
    },
    },
    mil0eff(){a=player.f2.total.add(1).log(2).add(1)
        if(hasChallenge('f2',11)) a=a.pow(5)
        return a
    },
})

addLayer("b3", {
    name: "blacklist2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        //best:n(0),
    }},
    color: "#f122ba",
    requires() {a=n(2).pow(1024)
        return a
    }, // Can be a function that takes requirement increases into account
    resource: "times blacklisted", // Name of prestige currency
    baseResource: "Airplane Ticket", // Name of resource prestige is based on
    baseAmount() {return player.f2.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    base(){a=n(2).pow(128)
        return a
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        
        return mult
    },
    branches:['f2','B2'],
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    hotkeys: [
        {key: "b", description: "B: get blacklisted", onPress(){if (canReset(this.layer)) doReset(this.layer)},unlocked(){return hasMilestone('f2',13)||hasAchievement('A',45)}},
    ],
    update(diff){
        
    },
    doReset(resettingLayer){
    },
    automate(){
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (hasMilestone('f2',13)||hasAchievement('A',45))&&!hasMilestone('B2',19)},
    autoUpgrade(){return false},
    canBuyMax(){return hasMilestone('b3',8)},
    autoPrestige(){return hasMilestone('b3',8)&&player.b3.autoreset},
    resetsNothing(){return hasMilestone('b3',7)},
    milestones: {
    0: {
        requirementDescription: "Get blacklisted once",
        effectDescription() {return "Gain 1% Airplane Ticket on reset per second, and each time blacklisted makes mute duration gain ^+0.01.<br>Currently: ^"+format(tmp.b3.mil0effect)},
        done() { return player.b3.points.gte(1) },
        unlocked(){return true},
    },
    1: {
        requirementDescription: "Get blacklisted twice",
        effectDescription() {return "Gain 100% Airplane Ticket on reset per second, and add 50 to the max purshase times of 'Double Mute' and 'Anti-Boost' for each time blacklisted.<br>Currently: +"+format(tmp.b3.mil1effect)},
        done() { return player.b3.points.gte(2) },
        unlocked(){return hasMilestone('b3',0)},
    },
    2: {
        requirementDescription: "Get blacklisted 3 times",
        effectDescription() {return "Unlock an autobuyer for Airplane Ticket upgrades, the max purshase times of 'Mute Self-Boost' +86, and each time blacklisted makes the base of 'Super Muting' +0.05.<br>Currently: +"+format(tmp.b3.mil2effect)},
        done() { return player.b3.points.gte(3) },
        unlocked(){return hasMilestone('b3',1)},
        toggles:[['b3','autof2u']],
    },
    3: {
        requirementDescription: "Get blacklisted 4 times",
        effectDescription() {return "Add 512 to the max purshase times of 'Super Muting' for each time blacklisted.<br>Currently: +"+format(tmp.b3.mil3effect)},
        done() { return player.b3.points.gte(4) },
        unlocked(){return hasMilestone('b3',2)},
    },
    4: {
        requirementDescription: "Get blacklisted 5 times",
        effectDescription() {return "The effect of '1 Muted Stone' is powered to ^19, the effect of Airplane Ticket challenge 'No More Challenges' is reversed and active even out of challenge, and add 3 to the max purshase times of 'Super Buyables' and 'Exponential Muting' for each time blacklisted.<br>Currently: +"+format(tmp.b3.mil4effect)},
        done() { return player.b3.points.gte(5) },
        unlocked(){return hasMilestone('b3',3)},
    },
    5: {
        requirementDescription: "Get blacklisted 6 times",
        effectDescription() {return "Keep Airplane Ticket milestones and challenges on reset, the base of Muted Stone requirement -0.25, and add 10 to the max purshase times of 'Buyable Frenzy' and 'Mute Self-Boost' for each time blacklisted.<br>Currently: +"+format(tmp.b3.mil5effect)},
        done() { return player.b3.points.gte(6) },
        unlocked(){return hasMilestone('b3',4)},
    },
    6: {
        requirementDescription: "Get blacklisted 7 times",
        effectDescription() {return "Mute duration gain x100, add 58 to the max purshase times of 'Anti-Boost II' for each time blacklisted.<br>Currently: +"+format(tmp.b3.mil6effect)},
        done() { return player.b3.points.gte(7) },
        unlocked(){return hasMilestone('b3',5)},
    },
    7: {
        requirementDescription: "Get blacklisted 25 times",
        effectDescription() {return "The base of 'Stronger Muting' is no longer capped, and getting blacklisted resets nothing."},
        done() { return player.b3.points.gte(25) },
        unlocked(){return hasMilestone('b3',6)},
    },
    8: {
        requirementDescription: "Get blacklisted 100 times",
        effectDescription() {return "Unlock auto-blacklisted, you can get as many times blacklisted as possible, and the max purshase times of 'Double Muting' is no longer limited."},
        done() { return player.b3.points.gte(100) },
        unlocked(){return hasMilestone('b3',7)},
        toggles:[['b3','autoreset']],
    },
    9: {
        requirementDescription: "Get blacklisted 9.00e15 times",
        effectDescription() {return "The max purshase times of 'Exponential Muting' is no longer limited."},
        done() { return player.b3.points.gte(9e15) },
        unlocked(){return hasMilestone('b3',8)},
    },
	},
	upgrades: {
    },
    buyables: {
    },
    challenges: {
    },
    tabFormat: {
        "Main":{
        content: [ "main-display","prestige-button","resource-display",'milestones',
        "buyables","upgrades","challenges"
    ],},
    },
    mil0effect(){a=player.b3.points.times(0.01).add(1)
            return a
    },
    mil1effect(){a=player.b3.points.times(50)
            return a
    },
    mil2effect(){a=player.b3.points.times(0.05)
            return a
    },
    mil3effect(){a=player.b3.points.times(512)
            return a
    },
    mil4effect(){a=player.b3.points.times(3)
            return a
    },
    mil5effect(){a=player.b3.points.times(10)
            return a
    },
    mil6effect(){a=player.b3.points.times(58)
            return a
    },
})