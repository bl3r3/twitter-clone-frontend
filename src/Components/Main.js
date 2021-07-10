import React from 'react'
import {Sidebar} from './Sidebar.js';
import {Feed} from './Feed.js';
import {Widget} from './Widget.js';


export const Main = () => {
	return (
		<>
			<Sidebar />
			<Feed />
			<Widget />
		</>
	)
}
