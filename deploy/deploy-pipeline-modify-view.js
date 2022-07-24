import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMDeployPipelineModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange, onBlur, onClick}) {

	let formName = "PM_DEPLOY_PIPELINE_FORM";
	let formTitle = "Deploy Pipeline";
	let formGroup = "FORM1";
	if (itemState.view == "SETTINGS") {
		formName = "PM_DEPLOY_PIPELINE_SETTINGS_FORM";
		formTitle = "Deploy Pipeline Settings";
	}
	
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup}
    	appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange} onClick={onClick}/>
    );
}


PMDeployPipelineModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onClick: PropTypes.func,
  inputChange: PropTypes.func,
  onBlur: PropTypes.func
};
