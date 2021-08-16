const Images = [
    { image: require("../assets/banners/food-banner11.jpg") },
    { image: require("../assets/banners/food-banner22.jpg") },
    { image: require("../assets/banners/food-banner33.jpg") },
    { image: require("../assets/banners/food-banner44.jpg") },
    { image: require("../assets/banners/download.jpg") },
];

export const markers = [
  {
    coordinate: {
      latitude: 6.580380,
      longitude: 3.358830,
    },
    title: 'Jevinik Restaurant',
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    coordinate: {
      latitude: 6.602567,
      longitude: 3.354326,
    },
    title: 'Commint Buka Ikeja',
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    coordinate: {
      latitude: 6.601600,
      longitude: 3.343940,
    },
    title: 'Krispy Kreme Nigeria',      
    image: Images[2].image,
    rating: 3,
    reviews: 220,
    categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
  },
  {
    coordinate: {
      latitude: 6.646838,
      longitude: 3.309486,
    },
    title: 'Calabar Kitchen',
    image: Images[3].image,
    rating: 4,
    reviews: 48,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    coordinate: {
      latitude:  6.596010,
      longitude: 3.350920,
    },
    title: 'Dominos Pizza Nigeria',
    image: Images[4].image,
    rating: 4,
    reviews: 178,
    categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner',],
  },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];