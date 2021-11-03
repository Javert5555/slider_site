import React, { useState, Component, Fragment } from "react";
import '../css/cursor.css';


class Cursor extends Component {
    state = {
        left: 0,
        top: 0,
        cursorClassName: ''
    }
    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            if (e.target.closest('a')) {
                this.setState({left: e.pageX, top: e.pageY, cursorClassName: 'follow-cursor_inner_active'});
            } else {
                this.setState({left: e.pageX, top: e.pageY, cursorClassName: ''});
            }
        });
    }
    render() {
        return (
            <Fragment>
                <div style={{left: this.state.left, top: this.state.top}} className='follow-cursor follow-cursor_external'></div>
                <div style={{left: this.state.left, top: this.state.top}} className={`follow-cursor follow-cursor_inner ${this.state.cursorClassName}`}></div>
            </Fragment>
        )
    }
}

// const Cursor = () => {
//     let [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
//     const onMouseMoveL = e => {
//         console.log(`${e.pageY}  ${e.pageX}`);
//         setCursorPosition({ top: e.pageY + 'px', left: e.pageX + 'px'});
//     };
  
//     return <div
//         onMouseMove={onMouseMoveL}
//         className='follow-cursor'
//         style={{left:cursorPosition.left , top: cursorPosition.top}}>123</div>
// };

export default Cursor;