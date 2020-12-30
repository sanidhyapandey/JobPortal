var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
var myData;

// Load JSON Data 

xhr.onload = function () {
    if (xhr.status === 200) {
        myData = JSON.parse(xhr.responseText);
        console.log(myData);
    }
}

var searchInput = document.getElementById('search');   // Get Search Input Value
var keyword = searchInput.value.toLowerCase();
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
function searchResult() {
    console.log(searchInput.value);
   // document.getElementById('holder1').innerHTML = "";

    for (i = 0; i < myData.jobs.length; i++) {
        var data = JSON.stringify(myData.jobs[i]).toLowerCase();
        
        if (data.search(searchInput.value.toLowerCase()) != -1) {
            console.log(myData.jobs[i]);
            var elem = document.createElement('div');
            elem.setAttribute("id", "job");

            elem.innerHTML = '<h2 id="profile">' + "Profile : " + myData.jobs[i].profile + '</h2>' + '<h3 id="company">' + "Company : " + myData.jobs[i].company + '</h3>' + '<h3 id="salary">' + "Salary : " + myData.jobs[i].salary + '</h3>' + '<h3 id="location">' + "Location : " + myData.jobs[i].location + '</h3>' + ' <a id="apply" href="./job_description.html">Apply Now</a>';

            document.getElementById('holder1').appendChild(elem);
        }
    }

}

xhr.send();
