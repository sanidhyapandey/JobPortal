var myData;
var jobInFocus;

async function gettingData() {
    const fileData = await fetch('data.json');
    myData = await fileData.json();
}
gettingData();

function populateData() {
    var querySelector = decodeURIComponent(window.location.search);
    jobId = querySelector.split("=")[1];
    var jobs = [...myData.jobs];

    console.log(jobs);

    for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].id === jobId) {
            jobInFocus = jobs[i];
        }
    }

    console.log(JSON.stringify(jobInFocus));

    console.log(querySelector + " jobId = = " + jobId);
}