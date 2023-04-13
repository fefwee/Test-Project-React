import React from "react";

import { Routes, Route } from 'react-router-dom';
import { Profile } from "../components/Profile/Profile";
import { Dialog } from '../components/Dialogs/Dialog'
import { Users } from '../components/Users/Users'
import { News } from '../components/News/News'


export const Routing = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/dialog' element={<Dialog />} />
                <Route path='/users' element={<Users />} />
                <Route path='/news' element={<News />} />
            </Routes>
        </>
    )
}