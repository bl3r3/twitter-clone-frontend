import React from 'react';

const UserContext = React.createContext({
	id: null,
	name: null,
	last_name: null,
	email: null,
	username: null

});

export default UserContext;