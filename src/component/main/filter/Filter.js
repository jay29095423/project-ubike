import React, { useEffect, useState } from 'react'
import pic from '../../../media/image 11.jpg'
import CheckboxUI from '../../UI/Checkbox';

import FilterResults from './FilterResults';
import axios from 'axios';
import { Checkbox } from '@mui/material';
import SelectList from './SelectList';

const Filter = props => {
     const [search_string, set_serch_string] = useState('');

     const [check_all, set_check_all] = useState(true);
     const select_all_handler = () => {
          set_check_all(x => !x);
          set_serch_string();
     }
     const [data, setData] = useState([
          { county: '', sarea: '', sna: '', sbi: 0, bemp: 0 },

     ])
     const [search_array, set_serch_array] = useState(["大安區", "大同區", "士林區", "文山區", "中正區", "中山區", "內湖區", "北投區", "松山區", "南港區", "信義區", "萬華區", "臺大公館校區"])

     const add_search_item = val => {

          if (search_array.includes(val)) {
               return
          } else {
               set_serch_array(x => [...x, val])
          }

     };
     const remove_search_item = val => {
          if (search_array.includes(val)) {
               set_serch_array(x => x.filter(item => item !== val))
          } else {
               return
          }
     }

     const get_data = async () => {
          const results_json = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
          let config_data = [];
          config_data = results_json.data.map(item =>
               ({ county: '台北市', sarea: item.sarea, sna: item.sna.split('_')[1], sbi: item.sbi, bemp: item.bemp })
          );

          setData(config_data);

     }

     useEffect(() => {
          get_data();

          const interval = setInterval(get_data, 3 * 60 * 1000);

          return () => clearInterval(interval);
     }, []);
     // useEffect(() => { console.log(search_array) }, [search_array]);

     const render_checkbox = () => {
          let outcome_array = [];
          if (search_string) {
               let unfilter_sarea_array = data.filter(item => item.sna.includes(search_string));
               // console.log(unfilter_sarea_array)
               outcome_array = Array.from(new Set(unfilter_sarea_array.map(val => val.sarea)));
               // console.log(outcome_array)
          }
          const sarea_array = Array.from(
               new Set(data.map(item => item.sarea))
          )


          return sarea_array.map((val, ind) => {

               let exist;
               if (outcome_array.indexOf(val) !== -1) {
                    exist = true;
               } else {
                    exist = false;
               }
               // console.log(outcome_array)
               // console.log('///')
               // console.log(outcome_array.indexOf(val))
               return (<CheckboxUI search_string={search_string} key={ind} default={exist} check_all={check_all} remove_search={remove_search_item} add_search={add_search_item} label={val} id={ind} className='sm:inline-flex inline-block sm:w-1/3 ' />)

          })
     }

     return (
          <>
               <form className=' sm:mt-8 px-4 h-auto mt-5 '>

                    {/* <div className='p-2 rounded-lg text-lg w-[175px]  font-bold  py-[9px]  bg-gray-100' >


                    </div> */}

                    <SelectList type='select' />
                    <SelectList type='input' data={data} search_string={search_string} search_input={set_serch_string} />


                    <div className={`flex sm:mt-5 mt-1 items-center`}>
                         <Checkbox
                              onChange={select_all_handler}
                              checked={check_all}
                              id={`全部勾選`}
                              sx={{
                                   color: '#AEAEAE',
                                   '&.Mui-checked': {
                                        color: '#B5CC22',
                                   },
                              }}
                         />
                         <label htmlFor={`全部勾選`} className='  text-center text-[#323232] tracking-wider font-bold text-lg'>全部勾選</label>
                    </div >

                    <div className='h-full sm:mt-4 relative '>
                         <div className='sm:inline-flex sm:h-auto sm:w-[40%] w-full sm:flex-wrap '>
                              {render_checkbox()}

                         </div>
                         <img alt='pic' className='hidden  overflow-hidden w-[50%] sm:inline-block absolute right-20 top-[-40px]' src={pic} />
                    </div>



               </form>
               <FilterResults data={data} search_string={search_string} search_array={search_array} />
          </>


     )
}

export default Filter