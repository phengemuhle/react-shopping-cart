import React from 'react';

const Submit = (props) => {
    return (
        <>
            <button type="button" onClick={props.submit} className="submitbtn btn btn-danger btn-lg">Submit</button>
        </>
    )
}
export default Submit