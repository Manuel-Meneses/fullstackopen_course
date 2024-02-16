const Button = ({ opinion, text }) => {
    return(
        <button onClick={opinion}>{text}</button>
    );
}

export default Button