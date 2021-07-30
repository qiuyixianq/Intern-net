import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/profile/overview',
        icon: <BiIcons.BiGlobe />,
        iconClosed: <BiIcons.BiCaretDown />,
        iconOpened: <BiIcons.BiCaretUp />,
        subNav :[
            {
                title: 'Profile Info',
                path: '/profile/overview/profileinfo',
                icon: <BiIcons.BiUserCircle />,
            },
            {
                title: 'Education',
                path: '/profile/overview/education',
                icon: <IoIcons.IoSchool />,
            },
            {
                title: 'Experience',
                path: '/profile/overview/experience',
                icon: <BiIcons.BiBriefcase />,
            },
        ]
    },
    {
        title: 'Security',
        path: '/profile/security',
        icon: <BiIcons.BiLock />,
    },
    {
        title: 'Saved',
        path: '/profile/saved',
        icon: <BiIcons.BiBookmark />,
    },
    {
        title: 'Support',
        path: '/profile/support',
        icon: <BiIcons.BiHelpCircle />,
    },
    
]