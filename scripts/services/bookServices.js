app.factory('bookServices', ['$http', function($http) {

	var Book=function (bookServer){
    	var title=bookServer.titleItem;
    	var artist=bookServer.artistName;
    	var image=bookServer.image;
    	var price=bookServer.price;
    	this.added=false;
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



    function _getItems() {
    	return $http.get("api/buytable.json").then(function(data){
    		var books=[];
    		$.each(data.data.buyTable,function(index,book){
    			books.push(new Book(book));
    		});
    		return books;
    	});
    }

    
    return { 
    	getItems: _getItems 
    };

}]);
