import React, { useEffect, useState } from 'react'
import { Checkbox } from '@mui/material';
const CheckboxUI = props => {
     const [checked, setChecked] = useState(true);


     const check_handler = () => {

          setChecked(x => !x)

     };
     useEffect(() => {
          if (props.search_string) {
               // console.log(props.default)
               setChecked(props.default)
          } else {
               if (props.check_all) {
                    setChecked(true)
               } else {
                    setChecked(false)
               }
          }

     }, [props.check_all, props.default, props.search_string])

     useEffect(() => {
          if (!props.add_search) {
               return
          }
          if (checked) {
               props.add_search(props.label)
          } else {
               props.remove_search(props.label)
          }
     }, [checked, props])
     return (
          <div className={`${props.className} items-center`}>
               <Checkbox
                    onChange={check_handler}
                    checked={checked}
                    id={`${props.id}`}
                    sx={{
                         color: '#AEAEAE',
                         '&.Mui-checked': {
                              color: '#B5CC22',
                         },
                    }}
               />
               <label htmlFor={`${props.id}`} className='  text-center text-[#323232] tracking-wider font-bold sm:text-lg text-base'>{props.label}</label>
          </div >
     )
}

export default CheckboxUI;