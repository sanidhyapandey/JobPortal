var myData;
var resultData;

async function gettingData() {
    const fileData = await fetch('data.json');
    myData = await fileData.json();
}

gettingData();

var searchInput = document.getElementById('search');   // Get Search Input Value
console.log(searchInput.value);



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

        elem.innerHTML = '<h2 id="profile">' + "Profile : " + resultData[i].profile + '</h2>' + '<h3 id="company">' + "Company : " + resultData[i].company + '</h3>' + '<h3 id="salary">' + "Salary : " + resultData[i].salary + '</h3>' + '<h3 id="location">' + "Location : " + resultData[i].location + '</h3>' + ' <button id="apply" onclick="showDescription(' + resultData[i].id + ')">Apply Now</button>';

        document.getElementById('holder1').appendChild(elem);
    }
}

function showDescription(id) {
    console.log(id);
    window.location.href = "job_description.html" + "?jobId=" + id;
}

function filterData(event) {
    resultData = [...myData.jobs];
    searchResult();
    locationFilter();
    salaryFilter();
    printResult();
}


// xhr.send();
