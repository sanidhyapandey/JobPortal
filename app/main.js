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
function saveInput() {
    var myString = "";
    var input = document.getElementById('search');
    console.log(input.value);
    var keyword = input.value.toLowerCase();


    for (i = 0; i < myData.jobs.length; i++) {
        var data = JSON.stringify(myData.jobs[i]).toLowerCase();
        if (data.search(keyword) != -1) {
            console.log(myData.jobs[i]);
            myString += JSON.stringify(myData.jobs[i]);
        }
        document.getElementById('message').innerHTML = myString;
    }

}


xhr.send();
