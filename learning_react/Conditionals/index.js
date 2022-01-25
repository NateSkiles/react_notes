function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

// Refactored
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>CONGRATS - YOU WIN!!</h2>
                    <img src="https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif" alt="Boart Great Success" ></img>
                </div>
        } else {
            msg = <p>Sorry, you lose!</p>
        }
        return (
            <div>
                <h1>Your number is... {num}</h1>
                {msg}
            </div>
        )
    }
}

// Primitive
// class NumPicker extends React.Component {
//     render() {
//         const num = getNum();

//         return (
//             <div>
//                 <h1>Your number is... {num}</h1>
//                 <p>{num === 7 ? 'Congrats' : 'Unlucky'}</p>
//                 {
//                     num === 7 && <img src="https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif"
//                         alt="Boart Great Success" />
//                 }
//             </div>
//         )
//     }
// }


ReactDOM.render(<NumPicker />, document.getElementById('root'));