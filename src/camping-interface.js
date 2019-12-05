// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
// import { findTrails } from './apis/trails';
// // import { findWeather } from './apis/weather';
// import { findCampgrounds } from './apis/camping';
//
// $(document).ready(function() {
//
//   $("#find-campgrounds").click(function () {
//     $("#resultsDiv2").slideDown("ease");
//     $("#campgroundsNearby").hide();
//     let maxHikeDistance = $("input#campground-distance").val();
//     $("input#campground-distance").val("");
//     let hikingDate = $('input#dateInput').val();
//     $("input#dateInput").val("");
//
//     findCampgrounds()
//       .then((response) => {
//
//         $("#display-results2").empty();
//         const body = JSON.parse(response);
//         const campgrounds = body.campgrounds;
//         console.log(campgrounds);
//         for (let i in campgrounds){
//           if (campgrounds[i].length < maxHikeDistance){
//
//             let campgroundCoordinates = `${campgrounds[i].latitude},${campgrounds[i].longitude}`;
//
//             // findWeather(campgroundCoordinates, hikingDate)
//             //   .then((response) => {
//             //
//             //     let weatherBody = JSON.parse(response);
//             //     let weatherSummary = weatherBody.daily.data[0].summary;
//             //     let temperature = weatherBody.daily.data[0].temperatureHigh;
//             //     temperature = parseInt(temperature);
//
//                 $("#display-results2").append(`${campgrounds[i].name}<br>Bookable Campground: ${campgrounds[i].isBookable}<br>Campsites: ${campgrounds[i].numCampsites}<br>${campgrounds[i].location}<br>${campgrounds[i].latitude},${campgrounds[i].longitude}<br><a href="https://www.google.com/maps/dir/${origins}/${campgroundCoordinates}">Get Directions</a><p></p><br><hr>`);
//               },
//               function(error) {
//                 $("#display-results2").append(`I am the error message: ${error.message}`);
//               });
//           }
//         }
//       },
//       function(error) {
//         $("#display-results2").empty().append(`<h5>There was an error processing your request: ${error.message}</h5>`);
//         $("#display-div2").show();
//       });
//
//     $("#homeButton").click(function() {
//       window.location.reload()
//     });
//   });
// });
