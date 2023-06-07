
import React, { useState, useEffect } from "react";
import Checkbox from './Checkbox'


const CheckboxTable: React.FC<CheckboxTableProps> = ({ cols, onChange, data }) => {
    const [checks, setChecks] = useState<CheckboxState[]>(data);
    const [allCheck, setAllCheck] = useState(false);

    const handleCheckboxChange = (key: number) => () => {
        setChecks(origin => {
            const data = Array.from(origin)
            data[key].checked = !data[key].checked
            return data
        })
    };
    const handleAllCheckChange = () => {
        // 全选和反全选处理
        if (allCheck) {
            setChecks(origin => {
                return origin.map(item => ({ name: item.name, checked: false }))
            })
        } else {
            setChecks(origin => {
                return origin.map(item => ({ name: item.name, checked: true }))
            })
        }
        setAllCheck(!allCheck)
    };
    useEffect(() => {
        // 联动全选
        setAllCheck(checks.every(item => item.checked))
        onChange(checks)
    }, [checks]);



    return (
        <div className='grid' style={{gridTemplateColumns: `repeat(${cols}, minmax(0, ${cols}fr))`}}>
            <Checkbox label="全选" checked={allCheck} onChange={handleAllCheckChange} />
            {checks.map((item, key) => {
                return <Checkbox key={key} label={item.name} checked={item.checked} onChange={handleCheckboxChange(key)} />
            })}
        </div>
    );
};

export default CheckboxTable