class Hello extends React.Component {
    render() {
        console.log(this.props)
        // props are immutable
        return <p>Hi {this.props.to} From {this.props.from}</p>;
    }
}