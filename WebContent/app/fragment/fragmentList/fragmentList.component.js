angular.module('fragment')
	.component('fragmentList', {
		templateUrl : 'app/fragment/fragmentList/fragmentList.component.html',
		controller : function() {
			var vm = this;
			
			vm.uvt = 0;
			
			vm.fragments = [
				{
					startTime : 0,
					endTime : 10000
				},
				{
					startTime : 10000,
					endTime : 20000
				},
				{
					startTime : 20000,
					endTime : 30000
				}
			];
			
			vm.add = function(fragment) {
				vm.fragments.push(angular.copy(fragment));
			};
			
			vm.clearFragments = function() {
				vm.fragments = [];
			};
			
			vm.calculateUVT = function() {
				let millisecondsViewed = new Map();
				
				for (let fragment of vm.fragments) {
					for (let i = fragment.startTime; i <= fragment.endTime; i++) {
						if (!millisecondsViewed.has(i)) {
							millisecondsViewed.set(i, true);
						}
					}
				}
				
				vm.uvt = millisecondsViewed.size;
			}
		},
		controllerAs : 'vm'
	});