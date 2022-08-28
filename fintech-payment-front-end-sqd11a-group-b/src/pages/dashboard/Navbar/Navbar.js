import React, { Component } from 'react';
import {Nav, NavLink, StackLink, NameLink} from './NavbarElements'
import { Stack, Badge, Avatar } from "@mui/material"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './navbar.css';



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to ="/dashboard">
                    <p className='text'>Fintech.africa</p>
                </NavLink>

                <div className='notification-profile_container'>
                    <StackLink to ="/notifications">
                        <Stack>
                            <Badge badgeContent={1} color='error'>
                                <NotificationsNoneIcon/>
                            </Badge>
                        </Stack>
                    </StackLink>

                    <NameLink to ="/profile">
                        <Avatar alt="Adetutu" src="" />
                        <h5 className ='name'>Adetutu</h5>
                    </NameLink>
                </div>

            </Nav>
        </>
    )
}

export default Navbar