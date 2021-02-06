import React from 'react';
import {FocusTrap } from focus-trap-react

const Trigger = ({ triggerText, buttonRef, showModal }) => {
return (
    <FocusTrap>
        <button
        className="btn btn-lg btn-danger center modal-button"
        ref={buttonRef}
        onClick={showModal}
        >
        {triggerText}
        </button>
    </FocusTrap>
    );
 };
export default Trigger;