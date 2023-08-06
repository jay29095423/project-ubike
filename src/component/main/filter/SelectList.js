import React, { useState } from 'react'
import {BsXLg, BsSearch, BsTriangleFill } from "react-icons/bs";
const SelectList = props => {
     const [focus, setFocus] = useState(false);
     // const [input, setInput] = useState(null)
     const toggle_list = () => {
          setFocus(x => !x)
     };


     const changeInputValue = (event) => {

          props.search_input(event.target.value);
          // setInput(event.target.value);

     }
     const setInputValue = (val) => {

          props.search_input(val);


     }


     const [selectedValue, setSelectValue] = useState(null)

     const changeSelectedValue = val => {
          setSelectValue(val);
          setFocus(false)
     }

     const render_symbol = () => {
          if (props.type === 'select') {
               return (
                    <>
                         <button type='button' className=' text-start px-2 relative rounded-lg bg-gray-100 text-lg sm:w-[200px] w-full font-bold py-[9px] text-[#A1A8B3] ' >{selectedValue ? selectedValue : '選擇縣市'}</button>
                         <BsTriangleFill onClick={toggle_list} className={`${focus ? 'scale-[1]' : 'scale-[-1]'}   top-[17px] right-[8px] font-bold text-xs hover:text-gray-500 cursor-pointer text-[#BCBCBC] absolute `} />
                    </>
               )
          } else {
               // console.log(props.search_string)
               return (
                    <>
                         <input value={props.search_string} onInput={changeInputValue} onBlur={toggle_list} type='input' onFocus={toggle_list} placeholder='搜尋站點' className=' relative rounded-lg bg-gray-100 text-lg w-full sm:w-[200px]  font-bold px-[8px] py-[9px] ' />
                         {!props.search_string ? 
                         <BsSearch className='top-[15px] right-[5px] font-bold text-base hover:text-gray-500 cursor-pointer text-[#BCBCBC] absolute' />
                         :
                         <BsXLg onClick={()=>{props.search_input('')}} className='top-[15px] right-[5px] font-bold text-base hover:text-gray-500 cursor-pointer text-[#BCBCBC] absolute' />
                         
                         }
                    </>

               )
          }
     };

     const render_list = () => {
          if (props.type === 'input') {
               let items = props.data.filter(val => val.sna.includes(props.search_string))

               // console.log(sarea_array);

               return (items.map((item, ind) => <li key={ind} onMouseDown={() => { setInputValue(item.sna) }} className=' cursor-pointer m-2 font-medium active:text-[#B5CC22] hover:font-bold'>{item.sna}</li>))
          } else {
               return (
                    <>
                         <li onClick={() => { changeSelectedValue('台北市') }} className=' cursor-pointer m-2 font-medium active:text-[#B5CC22] hover:font-bold'>台北市</li>
                         <li onClick={() => { changeSelectedValue('新竹科學園區') }} className=' cursor-pointer m-2 font-medium active:text-[#B5CC22] hover:font-bold'>新竹科學園區</li>
                         <li onClick={() => { changeSelectedValue('台北市') }} className=' cursor-pointer m-2 font-medium active:text-[#B5CC22] hover:font-bold'>台北市</li>
                         <li onClick={() => { changeSelectedValue('台北市') }} className=' cursor-pointer m-2 font-medium active:text-[#B5CC22] hover:font-bold'>台北市</li>
                         <li onClick={() => { changeSelectedValue('台北市') }} className=' cursor-pointer m-2 font-medium active:text-[#B5CC22] hover:font-bold'>台北市</li>
                    </>)
          }

     }
     return (
          <div className={`block  sm:inline-block ${props.type==='input'?'sm:ml-2 mt-2':''}`}>
               <div className='sm:w-[200px] relative '>
                    {/* <input type='select' placeholder='搜尋站點' className=' relative rounded-lg bg-gray-100 text-lg w-[200px]  font-bold px-[8px] py-[9px] ml-4' /> */}
                    {render_symbol()}
               </div>
               {focus ? <ul className='z-10 max-h-[232px] overflow-y-scroll mt-3 absolute rounded-lg bg-gray-100 text-lg w-[200px]  font-bold  py-[9px] ml-4 text-[#323232]'>
                    {render_list()}
               </ul> : ''}
          </div>

     )
}

export default SelectList