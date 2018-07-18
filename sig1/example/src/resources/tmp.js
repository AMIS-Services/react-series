class Title extends React.Component {
  render() {
    const variable = 'dit is een tekst';
    const jsxVar = <p>tekst in jsx</p>;
    const functionVar = () => <p>jsx uit een functie</p>;

    return (
      <div>
        <h1>dit is een titel</h1>
        <p>{variable}</p>
        {jsxVar}
        {functionVar()}
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    return <Child someProp={'doorgegeven tekst'} />;
  }
}

class Child extends React.Component {
  render() {
    const variable = 'tekst uit een variabele';
    return (
      <div>
        <h1>tekst van de child</h1>
        <h2>{this.props.someProp}</h2>
        <h3>{variable}</h3>
      </div>
    );
  }
}

class StatefulComponent extends React.Component {
  state = { text: 'wat tekst' };

  changeText = () => {
    this.setState({ text: 'een nieuwe tekst' });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeText}>Klik me!</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
