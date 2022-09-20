import React from 'react';
import { Link } from "react-router-dom";

function Error(){
    return(
        <div id="ErrorPage">
    	<div className="fof">
        		<h1>Error 404 <span role='img' aria-label="Emoji"> 🤔</span></h1>
                <h3>Page Not Found</h3>
        <Link to=""  ><i className="fa fa-undo rollBack mt-5" aria-hidden="true"></i></Link>
        <div className='mt-5'>
        <Link to=""  > Go Back</Link>
        </div>
    	</div>
        
</div>
    )
}
export default Error;