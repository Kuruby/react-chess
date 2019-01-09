import Chessboard from '../components/chessboard'
import ChessPiece from '../components/chess_piece'

export default () => (<Chessboard>
    <ChessPiece color="white" type="rook" />
    <ChessPiece color="white" type="rook" position={1} />
    <ChessPiece color="white" type="knight" />
    <ChessPiece color="white" type="knight" position={1} />
    <ChessPiece color="white" type="bishop" />
    <ChessPiece color="white" type="bishop" position={1} />
    <ChessPiece color="white" type="queen" />
    <ChessPiece color="white" type="king" />
    {
        [...Array(8).keys()].map((i) => (
            <ChessPiece key={i} type="pawn" color="white" position={i} />
        ))
    }

    <ChessPiece color="black" type="rook" />
    <ChessPiece color="black" type="rook" position={1} />
    <ChessPiece color="black" type="knight" />
    <ChessPiece color="black" type="knight" position={1} />
    <ChessPiece color="black" type="bishop" />
    <ChessPiece color="black" type="bishop" position={1} />
    <ChessPiece color="black" type="queen" />
    <ChessPiece color="black" type="king" />
    {
        [...Array(8).keys()].map((i) => (
            <ChessPiece key={i} type="pawn" color="black" position={i} />
        ))
    }

</Chessboard>)