var deutschland = "Deutschland (2021): ";
var frankreich = "Frankreich (2021): ";
var italien = "Italien (2021): ";
var dänemark = "Dänemark (2021): ";
var deutschland_2008 = "Deutschland (2008-2021): ";
var frankreich_2008 = "Frankreich (2008-2021): ";
var italien_2008 = "Italien (2008-2021): ";
var dänemark_2008 = "Dänemark (2008-2021): ";
var textbefore_einwohner = "Gesamtzahl Einwohner*innen in ";
var textbefore_rel = "Relation Einwohner*innen zur EU in ";
var textbefore_growth = "Wachstumsrate Einwohner*innen in ";
var textbefore_growthall = "Wachstumsrate (gesamt) zwischen 2008 und 2021 in ";
var mio = " Mio.";
var prozent = " %";
var einwohner_ger = 83.16;
var einwohner_fr = 67.44;
var einwohner_it = 59.26;
var einwohner_den = 5.84;
var einwohner_ger2008 = 82;
var einwohner_fr2008 = 62.14;
var einwohner_it2008 = 59;
var einwohner_den2008 = 5.48;
var fläche_ger = 357.022;
var fläche_fr = 643.801;
var fläche_it = 301.340;
var fläche_den = 43.094;
var fläche_eu = 4233000;
var multiplikator = 100;
var einwohner_eu = 447.1;
console.log(textbefore_einwohner + deutschland + einwohner_ger + mio);
console.log(textbefore_rel + deutschland + einwohner_ger / einwohner_eu * multiplikator + prozent);
console.log(textbefore_growth + deutschland_2008 + ((einwohner_ger - einwohner_ger2008) / einwohner_ger2008) * multiplikator + prozent);
console.log(textbefore_growthall + "Deutschland: " + (einwohner_ger - einwohner_ger2008) + mio);
console.log(textbefore_einwohner + frankreich + einwohner_fr + mio);
console.log(textbefore_rel + frankreich + einwohner_fr / einwohner_eu * multiplikator + prozent);
console.log(textbefore_growth + frankreich_2008 + ((einwohner_fr - einwohner_fr2008) / einwohner_fr2008) * multiplikator + prozent);
console.log(textbefore_growthall + "Frankreich: " + (einwohner_fr - einwohner_fr2008) + mio);
console.log(textbefore_einwohner + italien + einwohner_it + mio);
console.log(textbefore_rel + italien + einwohner_it / einwohner_eu * multiplikator + prozent);
console.log(textbefore_growth + italien_2008 + ((einwohner_it - einwohner_it2008) / einwohner_it2008) * multiplikator + prozent);
console.log(textbefore_growthall + "Italien: " + (einwohner_it - einwohner_it2008) + mio);
console.log(textbefore_einwohner + dänemark + einwohner_den + mio);
console.log(textbefore_rel + dänemark + einwohner_den / einwohner_eu * multiplikator + prozent);
console.log(textbefore_growth + dänemark_2008 + ((einwohner_den - einwohner_den2008) / einwohner_den2008) * multiplikator + prozent);
console.log(textbefore_growthall + "Dänemark: " + (einwohner_den - einwohner_den2008) + mio);
//# sourceMappingURL=L06.js.map