var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.status === 200) {
        var myData = JSON.parse(xhr.responseText);
        console.log(myData);
        // document.getElementById('message').innerHTML = myString;
        //ul = document.getElementById("users-list");

        // let render_lists = function(lists){
        //   let li = "";
        //   for(index in lists){
        //     li += "<li>" + lists[index] + "</li>";
        //   }
        //   //ul.innerHTML = li;
        // }

        //render_lists(myData.jobs);
        function savefn() {
        var myString = "";
        var input = document.getElementById('search');
        var keyword = input.value.toLowerCase();
        console.log(keyword);

        for (i=0; i<myData.jobs.length; i++) {
            if(keyword === myData.jobs.profile[i])
            {
                myString = myData.jobs[i];
            }
            document.getElementById('message').innerHTML = myString;
        }

        let filterUsers = function (event) {
            
            filtered_users = myData.jobs.filter(function (user) {
                console.log(myData.jobs);
                //  user = user.toLowerCase();
                // return user.indexOf(keyword) > -1; 
            });

            //render_lists(filtered_users);
        }

        input.addEventListener('keyup', filterUsers);
    }
    }
}


xhr.send();
// var mydata = JSON.parse(jobs);
// alert(mydata[0].profile);