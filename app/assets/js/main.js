(function getLoser() {

	this.applicants = [];

	this.init = function() {
		this.addApplicants();
	};


	function generateList(input) {
		var value = input.value;

		if(this.checkValid(value.toLowerCase())) {
			applicants.push(value.toLowerCase());
			input.value = '';
			showList();
		} else {
			alert('Something went wrong');
		}

	}


	function showList() {

		var parent = document.querySelector('.applicant_list_wrapper');
		var template = '';

		for(var i = 0; i < applicants.length; i++) {
			template += '<span class="name-tag" data-id="'+i+'">'+ applicants[i] +'</span>';
		}

		parent.innerHTML = '';
		parent.insertAdjacentHTML('afterbegin', template);
		deleteOne();
	}


	this.addApplicants = function() {

		var addBtn = document.querySelector('#add_applicant');

		addBtn.addEventListener('click', function() {

			var input = document.querySelector('#applicant_value');
			generateList(input);
		});
	};


	this.checkValid = function(value) {
		if(applicants.indexOf(value) < 0 &&  value != '') {
			return true;
		}

		return false;
	};


	this.deleteOne = function() {
		var item = document.querySelectorAll('.name-tag');

		function removeIt(element) {

			var attr = parseInt(element.getAttribute('data-id'));

			applicants.splice(attr, 1);
			showList();


		}

		for(var i = 0; i < item.length; i++) {

			item[i].addEventListener('click', function(e) {
				removeIt(this)
			});
		}
	}


	this.init();
})();