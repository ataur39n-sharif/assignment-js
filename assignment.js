//kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    if (kilometer>=0) {
    return meter;
    }
    else if(kilometer<0) {
        return "Distance can never be negative ."
    }
    else {
        return "Wrong input ."
    }
}

//budgetCalculator

function budgetCalculator(ghori, mobile, laptop) {
    var totalGhoriPrice = ghori * 50;
    var totalMobilePrice = mobile * 100;
    var totalLaptopPrice = laptop * 500;
    if (ghori > 0 && mobile > 0 && laptop > 0) {
        var totalCost = totalGhoriPrice + totalMobilePrice + totalLaptopPrice;
        return totalCost;
    }
    else {
        return "Please input correct item number ."
    }
}

//hotelcost

function hotelcost(days) {
    var totalcost = 0;
    if (days > 0 && days <= 10) {
        totalcost = days * 100;
        return totalcost;
    }
    else if (days > 0 && days <= 20) {
        var first10DaysCost = 10 * 100;
        var remainingDays = days - 10;
        remainingDaysCost = remainingDays * 80;
        totalcost = first10DaysCost + remainingDaysCost;
        return totalcost;
    }
    else if (days > 0 && days >= 21) {
        var first10DaysCost = 10 * 100;
        var second10DaysCost = 10 * 80;
        var remainingDays = days - 20;
        remainingDaysCost = remainingDays * 50;
        totalcost = first10DaysCost + second10DaysCost + remainingDaysCost;
        return totalcost;
    }
    else {
        return "Please input correct value ."
    }
}

//megaFriend

function megaFriend(FriendName) {
    var maxCharacters = FriendName[0];
    for (var i = 0; i < FriendName.length; i++) {
        var storeName = FriendName[i];
        if (typeof storeName != 'string') {
            return "Please input valid name.";
        }
        else {
            if (storeName.length > maxCharacters.length) {
                maxCharacters = storeName;
            }
        }
    }
    return maxCharacters;
}



// End