import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
	        <div>
	        	<h2>Tenant Management</h2>
			        <p>
						Configurations to be visually split between Environment & Tenant Level.( The implementation would show only one env, and the config at that env level; The tenant filtering at this level remains as in scope) Each Configuration to have last updated date & user  who has updated it. All Mail Configuration to be grouped together Changing the Configuration - if it requires server restart should have visual icon or visually differentiate configurations from database and configurations files.
					</p>
					<p>
						Tenant management configurations that are togglable in nature should be managed by one API. There should be an audit log when that API to manage tenant management configurations that are togglable in nature is invoked. Simplify the number of configurations by reviewing the existing collection and identifying the ones that need to in scope for this story. Conversation interfaces for effective query to get the configurations for all component
					</p>
					<p>
						Develop an UI to display configurations data for all the components in CK either from database or config file for any given tenant in an environment. UI to support filtering through the configurations data based on components for that specific tenant in an environment. UI to support filtering through the configurations data based on data source which can be from database or configurations files for that specific tenant in an environment. User/ L2 support need basic authentication to access this view from the domain.
					</p>
					<p>
						UI flow will be as follows:
						User will log into the domain using basic authentication to access the configurations dashboard view. After login user will be able to see a dashboard of all configurations in CK captured from database and configurations for any given tenants in an environment. User will then filter through the configurations data by choosing the tenant->components->database/ Configurations file 
					</p>
	        </div>
        );
    }
}

export default Home