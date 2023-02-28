import './button.css';

function Button() {

    const handelClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        window.location.reload()
    }
    
    return (
        <div className="">
            <button onClick={handelClick} className="button">Restart</button>
        </div>
    )
}

export default Button;