const FFO = require('fontfaceobserver');

const Fonts = () => {
    const link = document.createElement('link');
    link.href = '/css/fonts.css';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const Town10 = new FFO("Town 10 Regular");

    Town10.load().then(() =>{
        document.documentElement.classList.add("town10regular");
    })
};

export default Fonts;