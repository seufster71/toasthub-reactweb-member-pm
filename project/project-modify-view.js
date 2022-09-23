import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../../coreView/common/form-builder';

export default function PMProjectModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange, onBlur}) {

	let formName = "PM_PROJECT_FORM";
	let formTitle = "Projects";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup}
		appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange}/>
    );
}


PMProjectModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  onBlur: PropTypes.func
};
