angular.module('fragment')
	.component('fragmentList', {
		templateUrl : 'app/fragment/fragmentList/fragmentList.component.html',
		controller : function() {
			var vm = this;
			
			vm.uvt = 0;
			
			vm.fragments = [
				{
					startTime : 1,
					endTime : 1000
				},
				{
					startTime : 1001,
					endTime : 2000
				}
			];
			
			vm.add = function(fragment) {
				vm.fragments.push(angular.copy(fragment));
			};
			
			vm.clearFragments = function() {
				vm.fragments = [];
				vm.uvt = 0;
			};
			
			vm.calculateUVT = function() {
				let millisecondsViewed = new Map();
				
				for (let fragment of vm.fragments) {
					for (let i = fragment.startTime; i <= fragment.endTime; i++) {
						if (!millisecondsViewed.has(i.toString())) {
							millisecondsViewed.set(i.toString(), true);
						}
					}
				}
				
				vm.uvt = millisecondsViewed.size;
			}
		},
		controllerAs : 'vm'
	});