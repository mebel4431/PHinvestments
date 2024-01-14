let introUl = document.getElementById('intro_ul')

let footer = document.getElementById('footer')


window.addEventListener('scroll', function(element) {

	

	let x = document.documentElement.scrollTop
	

    if (x  > 600) {

        footer.style.width = " 100%"

    }

    if (x  < 600) {

        footer.style.width = " 0px"

    }



})