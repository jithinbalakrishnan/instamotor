angular.module('myApp', ['route'])
    .controller('myCtrl', function ($scope, appConfig) {
        //Controller Code


        $scope.cars = [{
            carImage: "images/cars/10.jpg",
            model: "Audi A4 2.0T",
            price: 11995,
            year: 2008,
            miles: 7600,
            location: "Elk Grove, CA",
            ownerImage: "images/owner-images/10.jpg"
        },
            {
                carImage: "images/cars/4.jpg",
                model: "Jeep Grand Cherokee Laredo",
                price: 3600,
                year: 2000,
                miles: 7600,
                location: "Galt, CA",
                ownerImage: "images/owner-images/4.jpg"
            },
            {
                carImage: "images/cars/5.jpg",
                model: "BMW 5 Series 530i",
                price: 7800,
                year: 2007,
                miles: 12800,
                location: "Seaside, CA",
                ownerImage: "images/owner-images/5.jpg"
            },
            {
                carImage: "images/cars/9.jpg",
                model: "Hyundai Elantra GLS",
                price: 2000,
                year: 2006,
                miles: 15500,
                location: "Alameda, CA",
                ownerImage: "images/owner-images/9.jpg"
            },
            {
                carImage: "images/cars/6.jpg",
                model: "Mercedes-Benz CLA-Class CLA250",
                price: 25500,
                year: 2016,
                miles: 20000,
                location: "San Francisco, CA",
                ownerImage: "images/owner-images/6.jpg"
            },
            {
                carImage: "images/cars/7.jpg",
                model: "Honda Accord LX",
                price: 3250,
                year: 2000,
                miles: 167500,
                location: "Santa Clara, CA",
                ownerImage: "images/owner-images/7.jpg"
            },
            {
                carImage: "images/cars/8.jpg",
                model: "Mercedes-Benz S-Class S420",
                price: 3450,
                year: 1994,
                miles: 165000,
                location: "Elk Grove, CA",
                ownerImage: "images/owner-images/8.jpg"
            }
        ];

    });