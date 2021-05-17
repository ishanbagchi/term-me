const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        // top: 50,
        // right: 0,
        // bottom: 0,
        // left: 50,
        mount: aboutContent.cloneNode(true),
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        },
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        // top: 100,
        // right: 0,
        // bottom: 0,
        // left: 100,
        mount: contactContent.cloneNode(true),
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        },
    })
})