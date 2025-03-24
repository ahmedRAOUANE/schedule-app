import { Span } from 'next/dist/trace'
import React from 'react'

const TaskCheckbox = ({checked, onChange, textStyle, checkboxStyle, taskName, children}: {
    checked: boolean,
    onChange: () => void,
    textStyle?: string,
    checkboxStyle?: string,
    taskName?: string,
    children?: React.ReactNode
}) => {
  return (
    <label className="flex items-center space-x-2 mt-4 cursor-pointer">
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={`w-5 h-5 cursor-pointer ${checkboxStyle}`}
        />

        {taskName && <span className={textStyle}>{taskName}</span>}
        {children && <div>{children}</div>}
    </label>
  )
}

export default TaskCheckbox