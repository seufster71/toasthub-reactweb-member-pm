import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMMemberRolesModifyView({itemState, appPrefs, onSave, onCancel, inputChange}) {
    
	let formName = "PM_MEMBER_ROLE_FORM";
	let formTitle = "Member Role";
	if (itemState.parentType != null && itemState.parentType === "TEAM") {
		formName = "PM_TEAM_ROLE_FORM";
		formTitle = "Team Role";
	}
	let formGroup = "FORM1";

    return (
    		<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} 
        	appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} 
        	inputChange={inputChange}/>
    );
}


PMMemberRolesModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
