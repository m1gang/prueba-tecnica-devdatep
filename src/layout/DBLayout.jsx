import React from 'react'
import { Outlet } from 'react-router'
import { Nav } from '../components/Nav'

export const DBLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}
