angular.module('fragment')
	.component('fragmentList', {
		templateUrl : 'app/fragment/fragmentList/fragmentList.component.html',
		controller : function() {
			var vm = this;
			
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
		},
		controllerAs : 'vm'
	});