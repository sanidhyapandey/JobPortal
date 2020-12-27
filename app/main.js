var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
var myData;

xhr.onload = function () {
    if (xhr.status === 200) {
        myData = JSON.parse(xhr.responseText);
        console.log(myData);
    }
}
var searchInput = document.getElementById('search');
searchInput.addEventListener('input', updateValue);

function updateValue(e) {
    document.getElementById('holder').innerHTML = "";
    if (e.target.value.length > 2) {
        for (i = 0; i < myData.jobs.length; i++) {
            var data = JSON.stringify(myData.jobs[i]).toLowerCase();
            console.log(e.target.value);
            if (data.search(e.target.value) != -1) {
                console.log(myData.jobs[i]);
                var elem = document.createElement('div');
                elem.setAttribute("id", "job");

                elem.innerHTML = '<h2 id="profile">' + "Profile : " + myData.jobs[i].profile + '</h2>' + '<h3 id="company">' + "Company : "  + myData.jobs[i].company + '</h3>' + '<h4 id="salary">' + "Salary : "  + myData.jobs[i].salary + '</h4>' + '<h4 id="salary">' + "Location : "  + myData.jobs[i].location + '</h4>';

                document.getElementById('holder').appendChild(elem);
            }
        }
    }
}
xhr.send();
