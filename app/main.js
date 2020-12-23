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
var myString = "";
var input = document.getElementById('search');
console.log(input.value);
var keyword = input.value.toLowerCase();
var display = document.getElementById('message');
function saveInput() {



    for (i = 0; i < myData.jobs.length; i++) {
        var data = JSON.stringify(myData.jobs[i]).toLowerCase();
        if (data.search(keyword) != -1) {
            console.log(myData.jobs[i]);
            myString += JSON.stringify(myData.jobs[i]).split();
        }
        display.innerHTML = myString;
    }

}

// const outputHtml = myString => {
//     if (myString.length > 0) {
//         const html = myString.map(match => `
//         <div class="details">
//         <h4>${match.name}</h4>
//         </div>
//         `
//         ).join('');
//         console.log(html);    }
// }


xhr.send();
