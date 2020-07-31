import React from 'react';
import {Redirect} from 'react-router-dom'; 

function NoMatch(props) {
    const checkPath = (props) => {
        const path = props.history.location
        if (path.hash) {
            let active = path.hash.replace(/\/|!|#/g, '')
            active = '/' + active
            return <Redirect push to={active}></Redirect>
        }
        // if (path.pathname) {
        //     let active = path.pathname.replace(/\//g, '')
        //     props.setActive(active)
        // }
        console.log(props)
    }
    return (

        <div>
            <div className="flex-container-column centered">
                {checkPath(props)}
                <div className='short'>
                    <p>Hmm, There doesn't seem to be anything here... Go back</p>
                </div>
            </div>

        </div>
    )
}

export default NoMatch;