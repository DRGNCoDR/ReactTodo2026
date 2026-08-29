import React from "react"
function Header (props) {
    return(
        <div id="header-Container"
            style={{
                background:props.bgColor,
                color: props.txtColor,
                height: "50px",
                top: "0px",
                left: "0px",
                width: "100%",
                padding: "3px",
                fontFamily: "cursive"
            }}
        >
            <ul
                style={{
                    display:"flex",
                    justifyContent:"space-around",
                    listStyleType:"none"
                }}
            >
                <li>Technolobyte</li>
                <li>{props.title}</li>
                <li><button>Load</button></li>
                <li><button>Save</button></li>
                <li>{new Date().toDateString()}</li>
            </ul>
        </div>
    )
}

export default Header