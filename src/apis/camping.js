const API_KEY = process.env.API_KEY;

export function findCampgrounds(latitude, longitude){
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    const cors = "https://cors-anywhere.herokuapp.com/";
    const endPoint = "https://www.hikingproject.com/data/get-campgrounds?";
    let url = `${cors}${endPoint}latitude=${latitude}&longitude=${longitude}&maxDistance=50&key=${API_KEY}&maxResults=2&sort=distance`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      }
      else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}
