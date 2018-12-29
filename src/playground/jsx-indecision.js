console.log('App.js is running!');

//JSX = JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'My life is in your hands now',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  console.log(option);
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderTemp();
};

const clearAll = (e) => {
  app.options = [];
  renderTemp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}
const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];
const renderTemp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={clearAll}>Clear All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemp();