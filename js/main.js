/**
 * AngularJS Tutorial
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('ConstructionApp',['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partial/home.html", controller: "slideShowController"})
    .when("/OngoingProjects", {templateUrl: "partial/OngoingProjects.html", controller: "OngoingProjectsCtrl"})
    .when("/CompletedProjects", {templateUrl: "partial/CompletedProjects.html",  controller: "CompletedProjectsCtrl"})
  .when("/AboutUs", {templateUrl: "partial/AboutUs.html",  controller: "AboutUsCtrl"})
  .when("/ContactUs", {templateUrl: "partial/ContactUs.html",  controller: "AboutUsCtrl"})
  .when("/nextpage", {templateUrl: "partial/nextpage.html",  controller: "AboutUsCtrl"})
}]);

/*Below filter is used to get filtered Unique value in Projects*/
app.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});

/*Below Control is for Completed Projects*/
function CompletedProjectsCtrl($scope){
    
     $('#sidebar').affix({
      offset: {
        top: 0
      }
});

    $scope.tabDetails = [
      {
      tab:'Overview'
      },
    {
      tab:'Amenities'
      }
        
        
    ];
     $scope.currenttab = $scope.tabDetails[0];
        $scope.setpage1 = function(page){
        $scope.currenttab = page;
        };
    
    $scope.images = [
        {
            id:'1',
            url: '/partial/nextpage.html',
            title: '2BHK House @ RaghavendraNagar, Meerpet',
            image: 'img/9.jpg',
            bigImage: 'img/9-1.jpg',
            location: 'Meerpet',
            HouseType: 'Independent',
            builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        },
        {
            id:'2',
         url: '/partial/nextpage.html',
         title: 'G+2 Building @ Badangpet',
         image: 'img/10.jpg',
         bigImage: 'img/10-1.jpg',    
         location: 'Badangpet',
         HouseType: 'Independent',
            builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        },
        
        {
            id:'3',
         url: '/partial/nextpage.html',
         title: 'G+2 House with Commercial shops @ Tirumala Hills, Meerpet',
         image: 'img/11.jpg',
         bigImage: 'img/11-1.jpg',    
         location: 'Meerpet',
        HouseType: 'Independent',
            builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        },
        
        {
            id:'4',
         url: '/partial/nextpage.html',
         title: 'G+1 House @ Madhapur, HitechCity',
         image: 'img/12.jpg',
         bigImage: 'img/12-1.jpg',    
         location: 'HitechCity',
        HouseType: 'Independent',
            builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        },
        {
            id:'5',
         url: '/partial/nextpage.html',
         title: 'G+1 House @ Jail Colony, Meerpet',
         image: 'img/13.jpg',
         bigImage: 'img/13-1.jpg',    
         location: 'Meerpet',
         HouseType: 'Independent',
            builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        },
         {
             id:'6',
         url: '/partial/nextpage.html',
         title: 'G+1 House @ Meerpet',
         image: 'img/14.jpg',
         bigImage: 'img/14-1.jpg',
         location: 'Meerpet',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        },
         {
             id:'7',
         url: '/partial/nextpage.html',
         title: 'Apartment @ Old City',
         image: 'img/15.jpg',
         bigImage: 'img/15-1.jpg',     
         location: 'Old City',
         HouseType: 'Apartments',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'8',
         url: '/partial/nextpage.html',
         title: '2BHK House with Commercial Shops @ Tirumala Hills, Meerpet',
         image: 'img/16.jpg',
         bigImage: 'img/16-1.jpg',     
         location: 'Meerpet',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'9',
         url: '/partial/nextpage.html',
         title: 'G+3 Building @ Prashanthi Hills, Meerpet',
         image: 'img/17.jpg',
         bigImage: 'img/17-1.jpg',     
         location: 'Meerpet',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'10',
         url: '/partial/nextpage.html',
         title: 'G+3 Building @ Madannapet, Saidabad',
         image: 'img/18.jpg',
         bigImage: 'img/18-1.jpg',     
         location: 'Saidabad',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'11',
         url: '/partial/nextpage.html',
         title: 'Apartment @ Shamshabad',
         image: 'img/19.jpg',
         bigImage: 'img/19-1.jpg',     
         location: 'Shamshabad',
         HouseType: 'Apartments',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'12',
         url: '/partial/nextpage.html',
         title: 'G+3 Commercial Complex @ SR Nagar, Ameerpet',
         image: 'img/20.jpg',
         bigImage: 'img/20-1.jpg',     
         location: 'SR Nagar',
         HouseType: 'Apartments',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'13',
         url: '/partial/nextpage.html',
         title: 'G+3 Commercial Complex @ SR Nagar, Ameerpet',
         image: 'img/21.jpg',
         bigImage: 'img/21-1.jpg',     
         location: 'SR Nagar',
         HouseType: 'Apartments',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'14',
         url: '/partial/nextpage.html',
         title: 'G+3 Building @ Meerpet',
         image: 'img/22.jpg',
         bigImage: 'img/22-1.jpg',     
         location: 'Meerpet',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'15',
         url: '/partial/nextpage.html',
         title: 'G+3 Duplex House with Commercial shop @ RaghavendraNagar, Meerpet',
         image: 'img/23.jpg',
         bigImage: 'img/23-1.jpg',     
         location: 'Meerpet',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'16',
         url: '/partial/nextpage.html',
         title: 'G+2 House with Commercial Shop @ Tulasinagar, Golnaka',
         image: 'img/24.jpg',
         bigImage: 'img/24-1.jpg',     
         location: 'Golnaka',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'17',
         url: '/partial/nextpage.html',
         title: 'G+3 Bulding @ Uppal',
         image: 'img/25.jpg',
         bigImage: 'img/25-1.jpg',     
         location: 'Uppal',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
        ,
         {
             id:'18',
         url: '/partial/nextpage.html',
         title: '2BHK House @ Jillelguda, Meerpet',
         image: 'img/26.jpg',
         bigImage: 'img/26-1.jpg',     
         location: 'Jillelguda',
         HouseType: 'Independent',
             builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        }
    ];
     $scope.currentImage = $scope.images[0];
        $scope.setpage = function(page){
        $scope.currentImage = page;
        };
}

/*Below control is for Ongoing Projects*/
function OngoingProjectsCtrl($scope){
    $('#sidebar').affix({
      offset: {
        top: 0
      }
});

    $scope.tabDetails = [
      {
        tab:'Overview',
      },
    {
      tab:'Amenities'
      } 
        
    ];
    
    $scope.currenttab = $scope.tabDetails[0];
        $scope.setpage1 = function(page){
        $scope.currenttab = page;
        };
    
    $scope.images = [
        {
         id: '1',
         url: 'partial/nextpage.html',
         title: 'Consultancy Project- 9  Fortune Anupama Arcade @ Dhathu Nagar, Balapur',
         image: 'img/27.jpg',
         bigImage: 'img/27-1.jpg',
         location: 'Midhani Township',
         HouseType: 'Apartments',
         amenities: 'Near to Outerring road', 
         tab1: 'About project',
         builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        
        },
        {
         id: '2',
         url: 'partial/nextpage.html',
         title: 'Material Contract - G+4 Apartment @ Agricultural Colony, Hastinapur',
         image: 'img/28.jpg',
         bigImage: 'img/28-1.jpg',
         location: 'Hastinapur',
         HouseType: 'Apartments',
         amenities: 'Near to Outerring road',
         tab1:'amenities',
         builtUpArea: '1663 Sq. ft.',
         floor:'Middle of 2 Floor',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',   
        
        },
        {
         id: '3',
         url: 'partial/nextpage.html',
         title: 'Consultancy Project-G+1 Home @ Uppal',
         image: 'img/29.jpg',
         bigImage: 'img/29-1.jpg',
         location: 'Uppal',
         HouseType: 'Independent',
         amenities: 'Near to Outerring road',
         tab1:'Spec',
         builtUpArea: '1663 Sq. ft.',
         floor:'2 Floors',
         bathroom:'2',
         facing:'East',
         bedroom:'3',
         parking: '1',
        },
        
        {
         id: '4',
         url: 'partial/nextpage.html',
         title: 'Own Project- 2BHK Home @ Badangpet',
         image: 'img/30.jpg',
         bigImage: 'img/30-1.jpg',
         location: 'Bandangpet',
         HouseType: 'Independent',
         amenities: 'Near to Outerring road',
         tab1:'Spec',
         builtUpArea: '1000 Sq. ft.',
         floor:'Ground',
         bathroom:'2',
         facing:'West',
         bedroom:'2',
         parking: '1',
         status: 'For Sale !!!',
        },
        {
         id: '5',
         url: 'partial/nextpage.html',
         title: 'Own Project- 2BHK Home @ Badangpet',
         image: 'img/31.jpg',
         bigImage: 'img/31-1.jpg',
         location: 'Bandangpet',
         HouseType: 'Independent',
         amenities: 'Near to Outerring road',
         tab1:'Spec',
         builtUpArea: '1000 Sq. ft.',
         floor:'Ground',
         bathroom:'2',
         facing:'West',
         bedroom:'2',
         parking: '1',
         status: 'For Sale !!!',
        },
];
     $scope.currentImage = $scope.images[0];
        $scope.setpage = function(page){
        $scope.currentImage = page;
        };
    
    
}

/*Below control is for Slide Show for Home Page*/
function slideShowController($scope, $timeout) {
 var slidesInSlideshow = 10;
 var slidesTimeInterval = 1000; 
  $scope.slideshow = 1;
  var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeInterval);
    }, slidesTimeInterval);
    
}


/*Below control is for About Us Page*/
function AboutUsCtrl($scope){
    
    $scope.sideMenuContent = [
        {
            name : 'About Us',
            content: 'Swasri Infra is a Construction company formed from the merger of Swasri Associates and Swasri Enterprises. The company has successfully operated in the Hyderabad area for the past 6 years working on both small and large scale construction, repair, and alteration projects focusing on residential contracting. With the business boom that is occurring in our local area and the desire to improve overall profit margins, the company is planning to shift its target market from residential clients to the larger commercial customers. This business plan will lay out our goals and tasks to make this transition successful and create enough market share to succeed in this highly competitive market.'
            ,
        },
        {
            name : 'Our Mission',
            content: 'Swasri Infra strives to offer the finest quality design, site preparation, cost estimates, construction, repair, and alteration to clients needing large scale construction services, whether it be office buildings, warehouses, large apartment complexes, public works, etc. Swasri maintains the highest standards of service in the commercial construction industry.',
        },
        {
            name : 'Vision',
            content: 'To become pioneers in swasri infra contracting in our field of expertise and from it expand to become a Mega Projects Contractor. This will be achieved through being daring and persistent in finding new business opportunities around the world; Promoting a culture of reliability, customer satisfaction and social integrity; Developing and Inspiring our workforce.',
        },
        {
            name : 'Values',
            content: 'The confidence of our investors enables us to achieve excellence in construction, architecture and design and draw new benchmarks in the Indian real estate company. Customers trust on us is our most valuable asset. Whatever commitment we have made to you as our valued customer, we are determined to perform and prove the same. Customers are the central focus for us. Without them and their continued support, we could not have achieved whatever we have been able to achieve so far. We are very much sure that our customer support and trust for us will continue to strengthen us in future too. On our part, we once again promise that we will never let their trust down.',
        },
        {
            name : 'Quality Policy',
            content: 'We are committed to meet the expectations of our customers, through our Well experienced and established service delivery system, that is sensitive and accommodative to continuous technology up gradation and value analysis. Create world-class eco friendly homes with the highest standards of professionalism, ethics, quality and customer service. ',
        },
        {
            name : 'Management',
            content: 'Our country is known for its culture and tradition. Today, a more modern India is on the move to become a global leader in various sectors. However what remains constant is the dream to possess a home. This is a dream because it involves planning, budget and finally owning one, and this process is a long and tedious journey. A developed nation is always judged by the infrastructure it has. And it is Swasri dream to provide landmark creations that add value to Indias global stature. It is our dream to provide world class townships with the best architecture that can leave behind a lasting impression. It is our dream to provide hi-quality residences and commercial spaces. Therefore what you see in all our creations are a testimony to our commitment and passion in creating aesthetic landmarks that speak of exquisite quality throughout.',
        },
        {
            name : 'Services',
            content: 'Swasri infra provides a comprehensive range of services that include design, development, construction, Architectural Design, Engineering and Building Services Design, Interior Design and Construction Management with a strong emphasis on transport-related projects. To honor our service credo of "concept to commissioning". We aim to provide quality services by employing an integrated and innovative approach to design and project delivery. Together with the experienced & qualified workforce, superior skills and deployment of reliable & efficient equipment.'+
            'Swasri infra has developed a reputation of completing projects on time within budget without compromising on safety & quality.'+

            'Swasri infra has been executing various civil projects in all over city. The company has made an outstanding contribution to civil engineering projects around the city in widely divergent areas such as High rise buildings, commercial complexes and other environment related projects. '+
            'Expertise in construction works for higher magnitude i.e. Factories, corporate, IT Park, Commercial, Residential complexes, Malls, Hotels, Hospital and Educational Institutions etc. '+
            'Expertise in high-end hotel design encompassing a full range of luxury interiors from pied – a terrace to Penthouse, Gourmet Kitchens, Banquet halls, and more.,'
        },
         {
            name : 'Careers',
            content: 'Swasri infra group values its people as one of its most important resources. The company prides itself on being an employer of choice and supports all staff to reach their full potential. It attracts the best talent from across the globe and provides considerable scope for career development and skill enhancement.\u2029We are passionate about our work and believe in leaving a mark in every sector we step in. But at the end of the day it’s really all about our people. In swasri infra it’s "us" not "me". Our success in not only attributed to our visionaries and core management but to every individual who believes in the company and enriches it with their experience and expertise.',
        },
        ];
        $scope.currentContent = $scope.sideMenuContent[0];
        $scope.setpage = function(page){
        
        $scope.currentContent = page;
        };
    $scope.myFunction= function(){
        var name = document.form.contact_name.value,
 
  femail = document.form.contact_email.value,
  fphonenumber = document.form.contact_phone.value;
         if(name != '' && femail != '' && fphonenumber != ''){
     document.getElementById("submitBox").innerHTML = "Successfully submitted";
             return true;
   }
       
    };
    
    
    
    
}

function ContactUsCtrl($scope){
    
}

function blinker() {
	$('.blinking').fadeOut(500);
	$('.blinking').fadeIn(500);
}
setInterval(blinker, 1000);

$( function () {

    var height_diff = $( window ).height() - $( 'body' ).height();
    if ( height_diff > 0 ) {
        $( '#footer' ).css( 'margin-top', height_diff );
    }

});

