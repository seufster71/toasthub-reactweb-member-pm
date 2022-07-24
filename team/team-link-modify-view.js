import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMTeamLinkModifyView({itemState, appPrefs, onSave, onCancel, inputChange}) {
    
	let formName = "PM_TEAM_PRODUCT_FORM";
	let formTitle = "Team Product";
	let formGroup = "FORM1";

    return (
    		<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} 
        	appPrefs={appPrefs} prefForms={itemState.itemPrefForms} onSave={onSave} onCancel={onCancel} 
        	inputChange={inputChange}/>
    );
}


PMTeamLinkModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
