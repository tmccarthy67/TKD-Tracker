//
//geo-location-javascript v0.4.8
//http://code.google.com/p/geo-location-javascript/
//
//Copyright (c) 2009 Stan Wiechers
//Licensed under the MIT licenses.
//
//Revision: $Rev: 77 $:
//Author: $Author: whoisstan@gmail.com $:
//Date: $Date: 2011-01-11 14:57:50 -0500 (Tue, 11 Jan 2011) $:
//
var bb_success;
var bb_error;
var bb_blackberryTimeout_id=-1;

var geo_position_js=function() {

        var pub = {};
        var provider=null;
		var u="undefined";

        pub.getCurrentPosition = function(success,error,opts)
        {
                provider.getCurrentPosition(success, error,opts);
        }


        pub.init = function()
        {
                try
                {
                        if (typeof(geo_position_js_simulator)!=u)
                        {
                                provider=geo_position_js_simulator;
                        }
                        else if (typeof(navigator.geolocation)!=u)
                        {
                                provider=navigator.geolocation;
                                pub.getCurrentPosition = function(success, error, opts)
                                {
                                        function _success(p)
                                        {
                                                //for mozilla geode,it returns the coordinates slightly differently
                                                if(typeof(p.latitude)!=u)
                                                {
                                                        success({timestamp:p.timestamp, coords: {latitude:p.latitude,longitude:p.longitude}});
                                                }
                                                else
                                                {
                                                        success(p);
                                                }
                                        }
                                        provider.getCurrentPosition(_success,error,opts);
                                }
                        }
                        else if(typeof(window.google)!=u && typeof(google.gears)!=u)
                        {
                                provider=google.gears.factory.create('beta.geolocation');
                        }
                        else if ( typeof(Mojo) !=u && typeof(Mojo.Service.Request)!="Mojo.Service.Request")
                        {
                                provider=true;
                                pub.getCurrentPosition = function(success, error, opts)
                                {

                                parameters={};
                                if(opts)
                                {
                                         //http://developer.palm.com/index.php?option=com_content&view=article&id=1673#GPS-getCurrentPosition
                                         if (opts.enableHighAccuracy && opts.enableHighAccuracy==true)
                                         {
                                                parameters.accuracy=1;
                                         }
                                         if (opts.maximumAge)
                                         {
                                                parameters.maximumAge=opts.maximumAge;
                                         }
                                         if (opts.responseTime)
                                         {
                                                if(opts.responseTime<5)
                                                {
                                                        parameters.responseTime=1;
                                                }
                                                else if (opts.responseTime<20)
                                                {
                                                        parameters.responseTime=2;
                                                }
                                                else
                                                {
                                                        parameters.timeout=3;
                                                }
                                         }
                                }


                                 r=new Mojo.Service.Request('palm://com.palm.location', {
                                        method:"getCurrentPosition",
                                            parameters:parameters,
                                            onSuccess: function(p){success({timestamp:p.timestamp, coords: {latitude:p.latitude, longitude:p.longitude,heading:p.heading}});},
                                            onFailure: function(e){
                                                                if (e.errorCode==1)
                                                                {
                                                                        error({code:3,message:"Timeout"});
                                                                }
                                                                else if (e.errorCode==2)
                                                                {
                                                                        error({code:2,message:"Position unavailable"});
                                                                }
                                                                else
                                                                {
                                                                        error({code:0,message:"Unknown Error: webOS-code"+errorCode});
                                                                }
                                                        }
                                            });
                                }

                        }

                }
                catch (e){
					if(typeof(console)!=u)
					{
						console.log(e);
					}
					return false;
				}
                return  provider!=null;
        }


        return pub;
}();