// Javascript "class" - to create tapioca objects
function Tapioca(date, establishment, drink, addressShort, addressLong, image, description) {
    this.date = date;
    this.establishment = establishment;
    this.drink = drink;
    this.addressShort = addressShort;
    this.addressLong = addressLong;
    this.image = image;
    this.description = description;
}

// Take .csv file of tapioca and parse the data similar to Master Pixel property addition
// 1. Import .csv file to var
var csvTap = "tapiocount_sheet";
// 2. Create new tapioca object and add to tapiocount
// for(var i=0; i<csvTap.length; i++){
// 	//delimiter is comma ,
// 	tapiocount[i] = (csvTap[i][0],csvTap[i][1],csvTap[i][2],csvTap[i][3],csvTap[i][4],csvTap[i][5],csvTap[i][6]);
// }

// A list of all tapioca drank this year
var tapiocount = [
    // Each of these lines of code makes a new Tapioca record from the Tapioca class
    new Tapioca("2017-01-01","Purple Kow","Jasmine milk tea","SF","3232 Balboa St, San Francisco, CA 94132","img/test.png", ""),
    new Tapioca("2017-01-15","i-Tea","Jasmine milk tea","SF","3232 Balboa St, San Francisco, CA 94132","img/IMG_3999.JPG", ""),
    new Tapioca("2017-01-31","Wonderful Foods Co.","Jasmine milk tea","SF","3232 Balboa St, San Francisco, CA 94132","img/test.png", "")
];

/* showTapiocount
    Populates the movies div with each individual movie
    Input: An array of Movie objects
 */
function showTapiocount(tapiocount) {
    $("#tapiogallery").empty(); // A jQuery method which clears the div
    for(var i=0; i<tapiocount.length; i++) {
    	// Create a new row for every 2nd tapioca image
        if(i%2==0) {
            $("#tapiogallery").append("<div class='row'></div>");
        }
        // Display
        // Uses tapiocount[i] attributes so that each cell has unique data
        var tapiocountHTML = "<div>" +
            "<img style='max-width:200px' class='tapiocaImage' src='" + tapiocount[i].image + "' />" +
            "<h3 class='moviename'>" + tapiocount[i].date + " - " + tapiocount[i].establishment + "</h3>" +
            "<a href='" + tapiocount[i].addressLong + "'><p class='description'>" + tapiocount[i].addressShort + "</p></a>"; //*****Need to add maps address
        
        // Adds the HTML to the last cell in the gallery div
        $(" #tapiogallery .row:last-child").append(tapiocountHTML); 

        if(i%3==2) { $("#tapiogallery").append("</div>"); } //closes row div
    }
}

/* sortButtonClicked
    Calls appropriate sort method based on which link was clicked and
        repopulates movie grid.
    Input: String representing which button was clicked on

 */
function sortButtonClicked(link) {
    if (link === "date") {
        sortByDate(tapiocount);
    }
    else if (link == "title") {
        sortByLocationAlphabetical(tapiocount);
    }
    else if(link == "shuffle") {
        shuffle(tapiocount);
    }
    showTapiocount(tapiocount);
}

/* shuffle
   Input: Array
   Output: Shuffled array
   Function courtesy of http://jsfromhell.com/array/shuffle
 */
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

/* sortMoviesByYear
 You must implement a basic bubble sort algorithm to sort
 the movies based on it's year attribute.

    Input: a list of Movie objects.
    Output: Returns a list of Movie objects after they have been sorted by year.
*/
function sortByDate(tap) {
	for(var i=0; i<tap.length; i++){
		//mergeSort?
		//check tap[i][0]
	}
    return tap;
}

/* sortMoviesByTitle
 You must implement a basic bubble sort algorithm to sort
 the movies based on it's title attribute.

  Input: a list of Movie objects.
  Output: returns a list of Movie objects after they have been sorted by title.
 */
function sortByLocationAlphabetical(tap) {
	
    return tap;
}

// Run after page loads
$(document).ready(function () {
    shuffle(tapiocount);
    showTapiocount(tapiocount);
});











/* Source: Andy VanWagoner https://github.com/thetalecrafter/excel.js/blob/master/src/csv.js */
/**
 * Functions to parse and stringify csv files.
 **/
(function() {
"use strict";

var CSV = {
    parse: function(csv, reviver) {
        reviver = reviver || function(r, c, v) { return v; };
        var chars = csv.split(''), c = 0, cc = chars.length, start, end, table = [], row;
        while (c < cc) {
            table.push(row = []);
            while (c < cc && '\r' !== chars[c] && '\n' !== chars[c]) {
                start = end = c;
                if ('"' === chars[c]){
                    start = end = ++c;
                    while (c < cc) {
                        if ('"' === chars[c]) {
                            if ('"' !== chars[c+1]) { break; }
                            else { chars[++c] = ''; } // unescape ""
                        }
                        end = ++c;
                    }
                    if ('"' === chars[c]) { ++c; }
                    while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && ',' !== chars[c]) { ++c; }
                } else {
                    while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && ',' !== chars[c]) { end = ++c; }
                }
                end = reviver(table.length-1, row.length, chars.slice(start, end).join(''));
                row.push(isNaN(end) ? end : +end);
                if (',' === chars[c]) { ++c; }
            }
            if ('\r' === chars[c]) { ++c; }
            if ('\n' === chars[c]) { ++c; }
        }
        return table;
    },

    stringify: function(table, replacer) {
        replacer = replacer || function(r, c, v) { return v; };
        var csv = '', c, cc, r, rr = table.length, cell;
        for (r = 0; r < rr; ++r) {
            if (r) { csv += '\r\n'; }
            for (c = 0, cc = table[r].length; c < cc; ++c) {
                if (c) { csv += ','; }
                cell = replacer(r, c, table[r][c]);
                if (/[,\r\n"]/.test(cell)) { cell = '"' + cell.replace(/"/g, '""') + '"'; }
                csv += (cell || 0 === cell) ? cell : '';
            }
        }
        return csv;
    }
};

return CSV;

}());