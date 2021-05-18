const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
let aboutCounter = 0
let contactCounter = 0

about.addEventListener('click', () => {
	aboutCounter = aboutCounter + 1
	if (aboutCounter == 1) {
		const aboutBox = new WinBox({
			title: 'About Me',
			width: '300px',
			height: '450px',
			border: '0.1em',
			top: 50,
			right: 50,
			bottom: 0,
			left: 50,
			mount: aboutContent.cloneNode(true),
			onfocus: function () {
				this.setBackground('#00aa00')
			},
			onblur: function () {
				this.setBackground('#777')
			},
			onclose: function () {
				aboutCounter = 0
			},
		})
	}
})

contact.addEventListener('click', () => {
	contactCounter = contactCounter + 1
	if (contactCounter == 1) {
		const contactBox = new WinBox({
			title: 'Contact Me',
			width: '300px',
			height: '400px',
			border: '0.1em',
			top: 50,
			right: 50,
			bottom: 0,
			left: 50,
			mount: contactContent.cloneNode(true),
			onfocus: function () {
				this.setBackground('#00aa00')
			},
			onblur: function () {
				this.setBackground('#777')
			},
			onclose: function () {
				contactCounter = 0
			},
		})
	}
})
