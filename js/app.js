var image = React.createElement('img', { src: 'https://facebook.github.io/react/img/logo.svg' });
var title = React.createElement('h1', null, 'Привет React!');
var subTitle = React.createElement('p', null, 'Библиотека React');
var container = React.createElement('div', {className: 'container'}, image, title, subTitle);
ReactDOM.render(container, document.getElementById('root'));
