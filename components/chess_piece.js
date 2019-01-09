import React from 'react'
import CreateChessPiece from '../lib/create_chess_piece'

//Renders a chess piece to the board
class ChessPiece extends React.Component {
    constructor(props) {
        super(props)
        //If a piece is not supplied in props then error
        if (this.props.piece) {
            this.piece = props.piece
        }
        else if (this.props.color
            && this.props.type) {
            this.piece = CreateChessPiece(
                this.props.color,
                this.props.type,
                this.props.position || 0
            )
        }
        else {
            throw "please provide a chess piece OR information to create one"
        }

    }

    render() {
        //Location in a shorter form
        const location = this.piece.location
        //Then return that container (mainly for style)
        //With the character it's rendered as
        return (
            <div>
                {this.piece.renderCharacter}
                <style jsx>
                    {`
                    div{
                        grid-column:${location.x + 1};
                        grid-row:${location.y + 1};
                        font-size: 60pt;
                        text-align: center;
                        width:100px;
                        height:100px;
                        user-select:none;
                    }`}
                </style>
            </div>
        )
    }
}

export default ChessPiece