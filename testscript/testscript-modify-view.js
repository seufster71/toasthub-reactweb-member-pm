import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../../coreView/common/form-builder';

export default function PMTestScriptModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange, selectChange}) {

	let formName = "PM_TESTSCRIPT_FORM";
	let formTitle = "Test Scripts";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} 
    	appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange} selectChange={selectChange}/>
    );
}


PMTestScriptModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  selectChange: PropTypes.func
};
