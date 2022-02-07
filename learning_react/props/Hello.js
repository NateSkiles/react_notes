class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hi {this.props.to} From: {this.props.from}</p>
                {this.props.to === 'Paul' &&
                    <img src="https://media.giphy.com/media/xT8qB0EVxA1DBt0n96/giphy.gif" alt="" />
                }
            </div>
        )
    }
}