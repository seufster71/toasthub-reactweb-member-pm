import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMRoleModifyView({itemState, appPrefs, onSave, onCancel, inputChange}) {
    
	let formName = "PM_TEAM_ROLE_FORM";
	if (itemState.parentType == "MEMBER") {
		formName = "PM_MEMBER_ROLE_FORM";
	}
	let formTitle = "Role";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} 
    	formGroup={formGroup} appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} 
    	inputChange={inputChange}/>
    );
}


PMRoleModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
