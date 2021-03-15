import React, {Component} from 'react';


export function Recording () {

        return(
            <main className="main-container">
            {/* <form className="card login-form" onSubmit={onSubmit}> */}
            <div className="row">
                <label>Select a Recording</label>
                <select
                name="recordingSelect"
                value="recording"
                >
                    <option key="1" value="recoridng1">
                    Recording 1
                    </option>
                    <option key="2" value="recoridng2">
                    Recording 2
                    </option>
                </select>
            </div>
            {/* </form> */}
        </main>
        )
    }