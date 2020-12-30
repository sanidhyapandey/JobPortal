var myData;
var resultData;

async function gettingData() {
    const fileData = await fetch('data.json');
    myData = await fileData.json();
}

gettingData();

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'data.json');
// xhr.responseType = 'text';
// var myData;

// // Load JSON Data 
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         myData = JSON.parse(xhr.responseText);
//         console.log(myData);
//     }
// }

var searchInput = document.getElementById('search');   // Get Search Input Value
console.log(searchInput.value);

// searchInput.addEventListener('input', updateValue);

// function updateValue(e) {
//     document.getElementById('holder1').innerHTML = "";
//     if (e.target.value.length > 2) {
//         for (i = 0; i < myData.jobs.length; i++) {
//             var data = JSON.stringify(myData.jobs[i]).toLowerCase();
//             console.log(e.target.value);
//             if (data.search(e.target.value) != -1) {
//                 console.log(myData.jobs[i]);
//                 var elem = document.createElement('div');
//                 elem.setAttribute("id", "job");

//                 elem.innerHTML = '<h2 id="profile">' + "Profile : " + myData.jobs[i].profile + '</h2>' + '<h3 id="company">' + "Company : " + myData.jobs[i].company + '</h3>' + '<h3 id="salary">' + "Salary : " + myData.jobs[i].salary + '</h3>' + '<h3 id="location">' + "Location : " + myData.jobs[i].location + '</h3>' + ' <a id="apply" href="./job_description.html">Apply Now</a>';

//                 document.getElementById('holder1').appendChild(elem);
//             }
//         }
//     }
// }

console.log(myData);

function searchResult() {
    console.log(searchInput.value);
    var arrLen = resultData.length;
    for (i = 0; i < resultData.length; i++) {
        var data = JSON.stringify(resultData[i]).toLowerCase();

        if (data.search(searchInput.value.toLowerCase()) === -1) {
            resultData.splice(i, 1);
            i--;
        }
    }
}

function locationFilter() {
    var locationElements = document.getElementsByClassName('filterLocation');

    for (var i = 0; locationElements[i]; ++i) {
        if (locationElements[i].checked) {
            for (j = 0; j < resultData.length; j++) {
                var data = JSON.stringify(resultData[j].location).toLowerCase();

                if (data.search(locationElements[i].value.toLowerCase()) < 0) {
                    resultData.splice(j, 1);
                    j--;
                }
            }
        }
    }
}

function salaryFilter() {
    var salaryElements = document.getElementsByClassName('filterSalary');

    for (var i = 0; salaryElements[i]; ++i) {
        if (salaryElements[i].checked) {
            for (j = 0; j < resultData.length; j++) {
                var dataSalary = parseInt(resultData[j].salary);

                if (dataSalary < parseInt(salaryElements[i].value)) {
                    resultData.splice(j, 1);
                    j--;
                }
            }
        }
    }
}

function printResult() {
    document.getElementById('holder1').innerHTML = "";

    for (i = 0; i < resultData.length; i++) {
        console.log(resultData[i]);
        var elem = document.createElement('div');
        elem.setAttribute("id", "job");

        elem.innerHTML = '<h2 id="profile">' + "Profile : " + resultData[i].profile + '</h2>' + '<h3 id="company">' + "Company : " + resultData[i].company + '</h3>' + '<h3 id="salary">' + "Salary : " + resultData[i].salary + '</h3>' + '<h3 id="location">' + "Location : " + resultData[i].location + '</h3>' + ' <a id="apply" href="./job_description.html">Apply Now</a>';

        document.getElementById('holder1').appendChild(elem);
    }
}

function filterData(event) {
    resultData = [...myData.jobs];
    searchResult();
    locationFilter();
    salaryFilter();
    printResult();
}


// xhr.send();
