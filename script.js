const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
	console.log(2)
	panel.addEventListener('click', (e) => {
		panels.forEach((panel) => {
			if (panel.classList.contains('active')) panel.classList.remove('active')
		})
		if (!e.target.classList.contains('active')) e.target.classList.add('active')
	})
})
