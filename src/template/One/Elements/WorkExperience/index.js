import React from 'react';

import { Toast, Util } from '@lib';
import { Text, Dnd } from '@component';

import { useDispatch } from 'react-redux';

import { addNewWorkExperience, updateWorkExperience, deleteWorkExperienceData } from '../../../../redux/core/actions';

import styles from './experience.module.scss';

function WorkExperience(props) {
    const dispatch = useDispatch();

    const _updateWorkExperience = (data) => {
        const storeReorder = Util.mapOrder(props.data, data, 'id');
        dispatch(updateWorkExperience(storeReorder));
    };

    const _addNewItem = () => {
        dispatch(addNewWorkExperience());
    };

    const _removeItem = (id, data) => {
        Toast.showUndo(id, data, 'workExperience', 'Work Item Removed');
        dispatch(deleteWorkExperienceData(id));
    };

    const { data, color } = props;
    return (
        <Dnd
            data={data}
            reorder={(e) => _updateWorkExperience(e)}
            additem={_addNewItem}
            removeitem={(e) => _removeItem(e, data)}
            renderItem={(item) => (
                <div className={styles.workBox}>
                    <div>
                        <Text
                            value={item.date}
                            statename="workExperience.date"
                            stateid={item.id}
                            placeholder="We are looking for _________the ask ________________ to help us______what you would be ask____________"
                            customclass={styles.workDate}
                            tag="div"
                        />
                    
                        <Text
                            value={item.companyName}
                            statename="workExperience.companyName"
                            stateid={item.id}
                            placeholder=""
                            customclass={styles.workCompany}
                            tag="div"
                        />
                        
                        
                    </div>
                </div>
            )}
        />
    );
}

/* Export Component =============================== */
export default WorkExperience;
