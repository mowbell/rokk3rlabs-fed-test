app.factory('bookServices', ['$http', function($http) {

	var Book=function (bookServer){
    	var title=bookServer.titleItem;
    	var artist=bookServer.artistName;
    	var image=bookServer.image;
    	var price=bookServer.price;
    	this.added=false;
    	this.removed=false;
    	var that=this;
    	this.setAsAdded=function(){
    		that.added=true;
    	};
    	this.getPrice=function(){
    		return parseInt(price);
    	};

    	this.getTitle=function(){
    		return title;
    	};
    	this.getArtist=function(){
    		return artist;
    	};
    	this.getImage=function(){
    		return image;
    	};
    	this.isAdded=function(){
    		return this.added;
    	};
    };

    var loaded=false;
    var books=[];


    var deferred=jQuery.Deferred();
    var promise=deferred.promise();
    function _getItems() {
    	if(loaded){
    		deferred.resolve(books);	
    		
    	}
    	else{
    		_fetchItems();
    	}
    	return promise;
    }

    function _fetchItems(){
    	$http.get("api/buytable.json").then(function(data){
    		$.each(data.data.buyTable,function(index,book){
    			books.push(new Book(book));
    		});
    		deferred.resolve(books);
    	});
    	loaded=true;	
    }

    
    return { 
    	getItems: _getItems 
    };

}]);
