// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 43.0386, lng: -85.6700},
//         zoom: 15,
//         mapID: '1af97f39b99c0dee'
//     })
// }

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.0386, lng: -85.6700},
    zoom: 15,
    mapId: '1af97f39b99c0dee',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
    });

    //Name
    //Latitude, Longitude
    //Image URL
    //scaledSize
    const markers = [
        [
        "Eric and Laura\'s House",
        43.03824722208466,
        -85.66757076693426,
        "mariostar.ico",
        38,
        31
        ]
    ];

    for(let i = 0; i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map, 
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
        });


        const infowindow = new google.maps.InfoWindow({
        content: currMarker[0],
        })

        marker.addListener("click", () => {
        infowindow.open(map, marker);
        })
    }


}
