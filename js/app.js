var image = React.createElement('img', { src: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png' });
var title = React.createElement('h1', null, 'Привет React!');
var subTitle = React.createElement('p', null, 'Библиотека React');
var container = React.createElement('div', {className: 'container'}, image, title, subTitle);
ReactDOM.render(container, document.getElementById('root'));
