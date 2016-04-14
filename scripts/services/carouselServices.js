app.factory('carouselServices', ['$http', function($http) {

	var CarouselItem=function (carouselItemServer){
    	var image=carouselItemServer.source;
    	var title=carouselItemServer.title;
        var caption=carouselItemServer.caption;
    	var that=this;
    	this.getImage=function(){
    		return image;
    	};

    	this.getTitle=function(){
    		return title;
    	};
    	this.getCaption=function(){
    		return caption;
    	};
    };

    var loaded=false;
    var items=[];


    var deferred=jQuery.Deferred();
    var promise=deferred.promise();
    function _getItems() {
    	if(loaded){
    		deferred.resolve(items);	
    		
    	}
    	else{
    		_fetchItems();
    	}
    	return promise;
    }

    function _fetchItems(){
    	$http.get("api/carousel.json").then(function(data){
    		$.each(data.data.slides,function(index,item){
    			items.push(new CarouselItem(item));
    		});
    		deferred.resolve(items);
    	});
    	loaded=true;	
    }

    
    return { 
    	getItems: _getItems 
    };

}]);
