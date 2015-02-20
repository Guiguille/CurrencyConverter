var app = angular.module('MonApp', ['ui.select2', 'LocalStorageModule']);


app.config(['localStorageServiceProvider',function(localStorageServiceProvider){
	localStorageServiceProvider.setPrefix('currency');}])


app.controller('DevisesCtrl', ['$scope', '$http', 'localStorageService', function ($scope, $http, localStorageService) {

		$scope.erreur = false;
		$scope.resultat = false;

		$scope.calculate = function	() {
			if ($scope.deviseFrom === 'undefined' || $scope.deviseTo === 'undefined') {
				$scope.erreur = true;
				return;
			};

			if ($scope.online === true) {
				$http.jsonp('http://rate-exchange.appspot.com/currency?from='+ $scope.deviseFrom +'&to='+$scope.deviseTo+'&q='+$scope.price+'&callback=JSON_CALLBACK').
				  success(function(data, status, headers, config) {
				  		$scope.result = data.v;
				  		localStorageService.set($scope.deviseFrom + $scope.deviseTo,data.v);
				  		$scope.resultat = !$scope.resultat;
				  }).
				  error(function(data, status, headers, config) {
				    
				  });	
			} else {
				console.log("pas connecter");
				if (true) {};
			}
		}
		
		$scope.change = function () {
			var tmp = $scope.deviseFrom;
			$scope.deviseFrom = $scope.deviseTo;
			$scope.deviseTo = tmp;
		}

		$scope.devises = [
			{pays:'United Arab Emirates Dirham', code:'AED'},
			{pays:'Afghan Afghani', code:'AFN'},
			{pays:'Albanian Lek', code:'ALL'},
			{pays:'Armenian Dram', code:'AMD'},
			{pays:'Netherlands Antillean Guilder', code:'ANG'},
			{pays:'Angolan Kwanza', code:'AOA'},
			{pays:'Argentine Peso', code:'ARS'},
			{pays:'Australian Dollar', code:'AUD'},
			{pays:'Aruban Florin', code:'AWG'},
			{pays:'Azerbaijani Manat', code:'AZN'},
			{pays:'Bosnia-Herzegovina Convertible Mark', code:'BAM'},
			{pays:'Barbadian Dollar', code:'BBD'},
			{pays:'Bangladeshi Taka', code:'BDT'},
			{pays:'Bulgarian Lev', code:'BGN'},
			{pays:'Bahraini Dinar', code:'BHD'},
			{pays:'Burundian Franc', code:'BIF'},
			{pays:'Bermudan Dollar', code:'BMD'},
			{pays:'Brunei Dollar', code:'BND'},
			{pays:'Bolivian Boliviano', code:'BOB'},
			{pays:'Brazilian Real', code:'R$'},
			{pays:'Bahamian Dollar', code:'BSD'},
			{pays:'Bitcoin', code:'BTC'},
			{pays:'Bhutanese Ngultrum', code:'BTN'},
			{pays:'Botswanan Pula', code:'BWP'},
			{pays:'Belarusian Ruble', code:'BYR'},
			{pays:'Belize Dollar', code:'BZD'},
			{pays:'Canadian Dollar', code:'CAD'},
			{pays:'Congolese Franc', code:'CDF'},
			{pays:'Swiss Franc', code:'CHF'},
			{pays:'Chilean Unit of Account (UF)', code:'CLF'},
			{pays:'Chilean Peso', code:'CLP'},
			{pays:'CNH', code:'CNH'},
			{pays:'Chinese Yuan', code:'CNY'},
			{pays:'Colombian Peso', code:'COP'},
			{pays:'Costa Rican Colón', code:'CRC'},
			{pays:'Cuban Peso', code:'CUP'},
			{pays:'Cape Verdean Escudo', code:'CVE'},
			{pays:'Czech Republic Koruna', code:'CZK'},
			{pays:'German Mark', code:'DEM'},
			{pays:'Djiboutian Franc', code:'DJF'},
			{pays:'Danish Krone', code:'DKK'},
			{pays:'Dominican Peso', code:'DOP'},
			{pays:'Algerian Dinar', code:'DZD'},
			{pays:'Egyptian Pound', code:'EGP'},
			{pays:'Eritrean Nakfa', code:'ERN'},
			{pays:'Ethiopian Birr', code:'ETB'},
			{pays:'Euro', code:'EUR'},
			{pays:'Finnish Markka', code:'FIM'},
			{pays:'Fijian Dollar', code:'FJD'},
			{pays:'Falkland Islands Pound', code:'FKP'},
			{pays:'French Franc', code:'FRF'},
			{pays:'British Pound Sterling', code:'GBP'},
			{pays:'Georgian Lari', code:'GEL'},
			{pays:'Ghanaian Cedi', code:'GHS'},
			{pays:'Gibraltar Pound', code:'GIP'},
			{pays:'Gambian Dalasi', code:'GMD'},
			{pays:'Guinean Franc', code:'GNF'},
			{pays:'Guatemalan Quetzal', code:'GTQ'},
			{pays:'Guyanaese Dollar', code:'GYD'},
			{pays:'Hong Kong Dollar', code:'HK$'},
			{pays:'Honduran Lempira', code:'HNL'},
			{pays:'Croatian Kuna', code:'HRK'},
			{pays:'Haitian Gourde', code:'HTG'},
			{pays:'Hungarian Forint', code:'HUF'},
			{pays:'Indonesian Rupiah', code:'IDR'},
			{pays:'Irish Pound', code:'IEP'},
			{pays:'Israeli New Sheqel', code:'ILS'},
			{pays:'Indian Rupee', code:'INR'},
			{pays:'Iraqi Dinar', code:'IQD'},
			{pays:'Iranian Rial', code:'IRR'},
			{pays:'Icelandic Króna', code:'ISK'},
			{pays:'Italian Lira', code:'ITL'},
			{pays:'Jamaican Dollar', code:'JMD'},
			{pays:'Jordanian Dinar', code:'JOD'},
			{pays:'Japanese Yen', code:'JPY'},
			{pays:'Kenyan Shilling', code:'KES'},
			{pays:'Kyrgystani Som', code:'KGS'},
			{pays:'Cambodian Riel', code:'KHR'},
			{pays:'Comorian Franc', code:'KMF'},
			{pays:'North Korean Won', code:'KPW'},
			{pays:'South Korean Won', code:''},
			{pays:'Kuwaiti Dinar', code:'KWD'},
			{pays:'Cayman Islands Dollar', code:'KYD'},
			{pays:'Kazakhstani Tenge', code:'KZT'},
			{pays:'Laotian Kip', code:'LAK'},
			{pays:'Lebanese Pound', code:'LBP'},
			{pays:'Sri Lankan Rupee', code:'LKR'},
			{pays:'Liberian Dollar', code:'LRD'},
			{pays:'Lesotho Loti', code:'LSL'},
			{pays:'Lithuanian Litas', code:'LTL'},
			{pays:'Latvian Lats', code:'LVL'},
			{pays:'Libyan Dinar', code:'LYD'},
			{pays:'Moroccan Dirham', code:'MAD'},
			{pays:'Moldovan Leu', code:'MDL'},
			{pays:'Malagasy Ariary', code:'MGA'},
			{pays:'Macedonian Denar', code:'MKD'},
			{pays:'Myanmar Kyat', code:'MMK'},
			{pays:'Mongolian Tugrik', code:'MNT'},
			{pays:'Macanese Pataca', code:'MOP'},
			{pays:'Mauritanian Ouguiya', code:'MRO'},
			{pays:'Mauritian Rupee', code:'MUR'},
			{pays:'Maldivian Rufiyaa', code:'MVR'},
			{pays:'Malawian Kwacha', code:'MWK'},
			{pays:'Mexican Peso', code:'MXN'},
			{pays:'Malaysian Ringgit', code:'MYR'},
			{pays:'Mozambican Metical', code:'MZN'},
			{pays:'Namibian Dollar', code:'NAD'},
			{pays:'Nigerian Naira', code:'NGN'},
			{pays:'Nicaraguan Córdoba', code:'NIO'},
			{pays:'Norwegian Krone', code:'NOK'},
			{pays:'Nepalese Rupee', code:'NPR'},
			{pays:'New Zealand Dollar', code:'NZD'},
			{pays:'Omani Rial', code:'OMR'},
			{pays:'Panamanian Balboa', code:'PAB'},
			{pays:'Peruvian Nuevo Sol', code:'PEN'},
			{pays:'Papua New Guinean Kina', code:'PGK'},
			{pays:'Philippine Peso', code:'PHP'},
			{pays:'PKG', code:'PKG'},
			{pays:'Pakistani Rupee', code:'PKR'},
			{pays:'Polish Zloty', code:'PLN'},
			{pays:'Paraguayan Guarani', code:'PYG'},
			{pays:'Qatari Rial', code:'QAR'},
			{pays:'Romanian Leu', code:'RON'},
			{pays:'Serbian Dinar', code:'RSD'},
			{pays:'Russian Ruble', code:'RUB'},
			{pays:'Rwandan Franc', code:'RWF'},
			{pays:'Saudi Riyal', code:'SAR'},
			{pays:'Solomon Islands Dollar', code:'SBD'},
			{pays:'Seychellois Rupee', code:'SCR'},
			{pays:'Sudanese Pound', code:'SDG'},
			{pays:'Swedish Krona', code:'SEK'},
			{pays:'Singapore Dollar', code:'SGD'},
			{pays:'St. Helena Pound', code:'SHP'},
			{pays:'Sierra Leonean Leone', code:'SLL'},
			{pays:'Somali Shilling', code:'SOS'},
			{pays:'Surinamese Dollar', code:'SRD'},
			{pays:'São Tomé &amp; Príncipe Dobra', code:'STD'},
			{pays:'Salvadoran Colón', code:'SVC'},
			{pays:'Syrian Pound', code:'SYP'},
			{pays:'Swazi Lilangeni', code:'SZL'},
			{pays:'Thai Baht', code:'THB'},
			{pays:'Tajikistani Somoni', code:'TJS'},
			{pays:'Turkmenistani Manat', code:'TMT'},
			{pays:'Tunisian Dinar', code:'TND'},
			{pays:'Tongan Paʻanga', code:'TOP'},
			{pays:'Turkish Lira', code:'TRY'},
			{pays:'Trinidad &amp; Tobago Dollar', code:'TTD'},
			{pays:'New Taiwan Dollar', code:'TWD'},
			{pays:'Tanzanian Shilling', code:'TZS'},
			{pays:'Ukrainian Hryvnia', code:'UAH'},
			{pays:'Ugandan Shilling', code:'UGX'},
			{pays:'US Dollar', code:'USD'},
			{pays:'Uruguayan Peso', code:'UYU'},
			{pays:'Uzbekistan Som', code:'UZS'},
			{pays:'Venezuelan Bolívar', code:'VEF'},
			{pays:'Vietnamese Dong', code:'VND'},
			{pays:'Vanuatu Vatu', code:'VUV'},
			{pays:'Samoan Tala', code:'WST'},
			{pays:'CFA Franc BEAC', code:'FCFA'},
			{pays:'East Caribbean Dollar', code:'XCD'},
			{pays:'Special Drawing Rights', code:'XDR'},
			{pays:'CFA Franc BCEAO', code:'CFA'},
			{pays:'CFP Franc', code:'CFPF'},
			{pays:'Yemeni Rial', code:'YER'},
			{pays:'South African Rand', code:'ZAR'},
			{pays:'Zambian Kwacha (1968 à 2012)', code:'ZMK'},
			{pays:'Zambian Kwacha', code:'ZMW'},
			{pays:'Zimbabwean Dollar (2009)', code:'ZWL'}
		];
	}]);



app.run(function($window, $rootScope) {
      $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);
      $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
});