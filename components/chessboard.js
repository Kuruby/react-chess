import React from 'react'
import ChessSquare from './chess_square'

const width = 8
const height = 8

class Chessboard extends React.Component {
    render() {    

        return (
            <div>
                {[...Array(width).keys()].map((xvalue) => {
                    return [...Array(height).keys()].map((yvalue) => (
                        <ChessSquare key={`@(${xvalue},${yvalue})`} location={{ xvalue, yvalue }} />)
                    )
                })}
                
                {this.props.children
                /*Children includes chess pieces */}
                <style jsx>
                    {/*Position chessboard neatly into squares */
                        `display:grid;
                        grid-template-columns:8;
                        grid-template-rows:8;
                        grid-gap:0;
                        width:100px;
                    `/*100px width is a hack to keep it from having gaps*/}
                </style>
            </div>
        )
    }
}

export default Chessboard