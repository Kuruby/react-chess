import React from 'react'


//A square on the board, with helper methods for piece moving, etc
class ChessSquare extends React.Component {

    onClick = () => {

    }

    onMouseEnter = ()=>{

    }

    onMouseLeave = ()=>{

    }
    
    render() {
        //simplify X and Y location values
        const xvalue = this.props.location.xvalue
        const yvalue = this.props.location.yvalue
        return (<div onClick={this.onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <style jsx>{`
                        grid-column: ${xvalue + 1};
                        grid-row: ${yvalue + 1};
                        width: 100px;
                        height: 100px;
                        background-color: ${ (xvalue % 2 == yvalue % 2) ?
                    "aquamarine" : "steelblue"};
                        ${/*decide background colour if the x 
                            and y components are aligned*/ ""}
                        border: 1px solid violet;
            `}</style>
        </div>)
    }
}

export default ChessSquare