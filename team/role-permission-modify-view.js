import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMRolePermissionModifyView({itemState, appPrefs, onSave, onCancel, inputChange}) {
    
	let formName = "PM_ROLE_PERMISSION_FORM";
	let formTitle = "Role Permission";
	let formGroup = "FORM1";

    return (
    		<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} 
        	appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} 
        	inputChange={inputChange}/>
    );
}


PMRolePermissionModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
