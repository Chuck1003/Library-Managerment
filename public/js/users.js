console.log('React Demo Page');

class Welcome extends React.Component {
    render() {
        return (
            React.createElement("h1", null, "Hello, React!")
        )
    }
}

const element = React.createElement(Welcome, null);

ReactDOM.render(
    element,
    document.getElementById('root')
);