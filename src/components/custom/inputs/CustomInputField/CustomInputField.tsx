'use client'

import  { ForwardedRef, forwardRef, useEffect, useState } from 'react';

// ** Styles
import './CustomInputField.css';


// ** Third Party
import { FieldValues, useFormContext } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';


type ICustomInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  disabled?: any;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  password?: boolean;
  onChange?: (value: string) => void;
  rules?: Partial<FieldValues>;
  formatAmountInput?: boolean;
  [key: string]: any;
} 




export const CustomTextField = forwardRef(function CustomTextField(
  {
    name,
    label,
    defaultValue,
    placeholder,
    type = 'text',
    maxLength,
    rules,
    formatAmountInput,
    password,
    onChange,
    
    ...rest
  }: ICustomInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [show, setShow] = useState(false);
  const { register, formState: { errors }, watch, setValue, trigger } = useFormContext<FieldValues>();
  const watchedValue = watch(name);



  useEffect(() => {
    register(name, rules);
  }, [name, register, rules]);

  const formatValue = (value: string | number) => {
    if (typeof value === 'string') {
      // Remove thousands separators before parsing the number
      const parsedValue = parseFloat(value.replace(/,/g, ''));
      if (!isNaN(parsedValue)) {
        // Format the parsed value with thousands separators
        return parsedValue.toLocaleString();
      }
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value); // Update the field value
    trigger(name); // Trigger validation for the field

    if (onChange) {
      onChange(value); // Call the onChange prop with the updated value
    }
  };

  const hasError = errors[name] !== undefined;

  return (
    <div className='form-field'>
      <label htmlFor={name} className="mb-4 md:text-[14px] text-[3.5vw]">{label}</label>
      <input
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={show ? 'text' : type}
        value={formatAmountInput ? formatValue(watchedValue): watchedValue}
        onChange={handleChange}
        maxLength={maxLength}
        style={{ borderColor: hasError ? 'red' : undefined, marginTop: 3}}
        inputMode="numeric" // Pass inputMode as a prop
                  pattern="[0-9]*"
        {...rest}
      />
      {password &&
      <span className={label ? "p_visible absolute right-2 top-10 mr-2": "p_visible absolute right-2 top-5 mr-2"} onClick={() => setShow(!show)}>
            {!show ? <EyeOff size={18}/> :   <Eye size={18} /> }
          </span>}
      {errors[name] && (
        <span role="alert" className='text-r800 md:text-xs text-[2.5vw] font-normal'>{String(errors[name]?.message)}</span>
      )}
    </div>
  );
});