$(document).ready(function () {
    console.log('here ')
    $('input.autocomplete').autocomplete({
        data: {
            'Alabama': null,
            'Alaska': null,
            'American Samoa': null,
            'Arizona': null,
            'Arkansas': null,
            'California': null,
            'Colorado': null,
            'Connecticut': null,
            'Delaware': null,
            'District Of Columbia': null,
            'Federated States Of Micronesia': null,
            'Florida': null,
            'Georgia': null,
            'Guam': null,
            'Hawaii': null,
            'Idaho': null,
            'Illinois': null,
            'Indiana': null,
            'Iowa': null,
            'Kansas': null,
            'Kentucky': null,
            'Louisiana': null,
            'Maine': null,
            'Marshall Islands': null,
            'Maryland': null,
            'Massachusetts': null,
            'Michigan': null,
            'Minnesota': null,
            'Mississippi': null,
            'Missouri': null,
            'Montana': null,
            'Nebraska': null,
            'Nevada': null,
            'New Hampshire': null,
            'New Jersey': null,
            'New Mexico': null,
            'New York': null,
            'North Carolina': null,
            'North Dakota': null,
            'Northern Mariana Islands': null,
            'Ohio': null,
            'Oklahoma': null,
            'Oregon': null,
            'Palau': null,
            'Pennsylvania': null,
            'Puerto Rico': null,
            'Rhode Island': null,
            'South Carolina': null,
            'South Dakota': null,
            'Tennessee': null,
            'Texas': null,
            'Utah': null,
            'Vermont': null,
            'Virgin Islands': null,
            'Virginia': null,
            'Washington': null,
            'West Virginia': null,
            'Wisconsin': null,
            'Wyoming': null
        },
    });
});

document.getElementById("header-button").addEventListener("click", function () {
    var x = document.getElementById("nav");
    var h = "hidden";
    var s = "show";
    if (x.classList.contains(h)) {
        x.classList.remove(h);
        x.classList.add(s);
    } else if (x.classList.contains(s)) {
        x.classList.remove(s);
        x.classList.add(h);
    } else {
        x.classList.add(s);
    }
});
