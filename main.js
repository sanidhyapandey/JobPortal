var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.status === 200) {
        var myData = JSON.parse(xhr.responseText);
        console.log(myData);

        var myString = "";
        for (i = 0; i < myData.jobs.length; i++) {
            console.log(myData.jobs[i].profile)
            myString = myData.jobs[i].profile;
        }
        document.getElementById('message').innerHTML = myString;
    }
}

 xhr.send();
// var mydata = JSON.parse(jobs);
// alert(mydata[0].profile);