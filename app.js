var initialCats = [
	{	
		clickCount: 0,
		name: 'Catty',
		imgSrc: 'cuteCats/Catty.jpg',
		nicknames: ['Cutie', 'Catsy', 'Billi']
	},
	{
		clickCount: 0,
		name: 'Pushy',
		imgSrc: 'cuteCats/Pushy.jpg',
		nicknames: ['Cutie', 'Catsy', 'Billi']
	},
	{
		clickCount: 0,
		name: 'Meowth',
		imgSrc: 'cuteCats/Meowth.jpg',
		nicknames: ['Cutie', 'Catsy', 'Billi']
	},
	{
		clickCount: 0,
		name: 'Syndy',
		imgSrc: 'cuteCats/Syndy.jpg',
		nicknames: ['Cutie', 'Catsy', 'Billi']
	},
	{
		clickCount: 0,
		name: 'Tom',
		imgSrc: 'cuteCats/Tom.jpg',
		nicknames: ['Cutie', 'Catsy', 'Billi']
	}];

var Cat = function(data) {
	this.clickCount = ko.observable(0);
	this.imgSrc = data.imgSrc;
	this.name = data.name;
	this.nicknames = data.nicknames;

	this.level = ko.computed(function() {
		if(this.clickCount < 10) {
			return "Infant";
		}
		else if(this.clickCount >= 10 && this.clickCount < 50) {
			return('Teen');
		}
		else if(this.clickCount >= 50) {
			return('Elder');
		}
	}, this); 
};

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});
	this.currentCat = ko.observable(this.catList()[0]);

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
	
	//knockout willl handle the view to model and model to view synchronisation for us
	this.increamentCounter = function() {
		/******One Way********/
		/*we don't need to write this.currentCat().clickCount here 
		because we are already in the binding context of currentCat
		this.clickCount(this.clickCount() + 1);*/

		/********Other Way*********/
		/*another way of doing this is declaring 'this' as 'self' 
		which represents the viewModel and not the currentCat bindings*/
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);

	};
};
ko.applyBindings(new ViewModel());

