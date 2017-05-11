(function (){
  var element = document.getElementById("hitmarker-jobs-feed");
  var spinner = document.createElement("img");
  spinner.src = 'https://i1.wp.com/cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif'
  element.appendChild(spinner);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8888/hitmarker/jobs.json');
  xhr.send(null);

  xhr.onreadystatechange = function () {
    var DONE = 4;
    var OK = 200;

    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        var jobs = JSON.parse(xhr.responseText).data;

        appendJobs(jobs);
      } else {
        // console.log('Error: ' + xhr.status); // An error occurred during the request.
      }
    }
  }
  function appendJobs (jobs) {
    spinner.style.display = 'none';
    for (var i = 0; i < jobs.length; i++) {
      var jobWrapper = document.createElement("div");
      var jobLink = document.createElement("a");
      jobLink.target = "_blank";
      jobLink.href = jobs[i].url;
      jobLink.innerHTML = jobs[i].title;
      jobWrapper.appendChild(jobLink);
      element.appendChild(jobWrapper);
    }
  }
})();
