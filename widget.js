$(document).ready(function() {
  var element = document.getElementById("hitmarker-jobs-feed");
  var spinner = document.createElement("img");
  spinner.src = 'https://i1.wp.com/cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif'
  element.appendChild(spinner);
  $.get("http://localhost:8888/hitmarker/jobs.json", function(data) {
    spinner.style.display = 'none';
    var jobs = data.data;
    for (var i = 0; i < jobs.length; i++) {
      var jobWrapper = document.createElement("div");
      var jobLink = document.createElement("a");
      jobLink.target = "_blank";
      jobLink.href = jobs[i].url;
      jobLink.innerHTML = jobs[i].title;
      jobWrapper.appendChild(jobLink);
      element.appendChild(jobWrapper);
    }
  });
});
