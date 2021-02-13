import React from 'react';

import {ChatEngine} from 'react-chat-engine'

import './css/App.css'

const App = () => {
    return (
        <ChatEngine height='100vh'
                    projectID='4c545b3f-4d5f-4e34-9cfa-ab2dc70dddcc'
                    userName='Tyler'
                    userSecret='123454321'/>
    );
};

export default App;

