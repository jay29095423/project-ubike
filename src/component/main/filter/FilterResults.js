import React from 'react'

const FilterResults = props => {

     const render_results = () => {
          const area_filtered_data = props.data.filter(item => props.search_array.includes(item.sarea))
          let filtered_data;
          if (props.search_string) {
               // console.log(area_filtered_data)
               filtered_data = area_filtered_data.filter(val => val.sna.includes(props.search_string))
               // console.log(filtered_data)
          } else {
               filtered_data = area_filtered_data;
          }
          const results = filtered_data?.map((val, ind) => {
               let backgroundColor = '';
               // console.log(props.data.length)
               // console.log(ind+1)
               if (ind % 2 === 1) {
                    backgroundColor = 'bg-[#f6f6f6]'
               };

               return (
                    <tr key={ind} className={` ${backgroundColor}`}>
                         <td className={`text-[16px]  border-t  sm:text-base text-sm  font-semibold text-[#323232] text-center sm:py-5 py-3 `}>{val.county}</td>
                         <td className='text-[16px]  border-t sm:text-base text-sm font-semibold text-[#323232] text-center sm:py-5 py-3'>{val.sarea}</td>
                         <td className='text-[16px]  border-t sm:text-base text-sm font-semibold text-[#323232] text-center sm:py-5 py-3'>{val.sna}</td>
                         <td className='text-[16px]  border-t  sm:text-base text-sm font-semibold text-[#323232] text-center sm:py-5 py-3'>{val.sbi}</td>
                         <td className={`text-[16px]  border-t   sm:text-base text-sm font-semibold text-[#323232] text-center sm:py-5 py-3 `}>{val.bemp}</td>
                    </tr>

               )
          })
          return results;
     }

     return (
          <div className='rounded-3xl m-2 border mt-4  sm:mt-20 sm:overflow-y-visible overflow-y-scroll'>
               <table className=' rounded-full sm:w-full w-[150vw]'>
                    <thead className=' text-[12px] sm:overflow-scroll overflow-x-scroll  sm:text-[18px]'>
                         <tr className=''>
                              <th className='sm:p-5 text-lg w-[10px] bg-[#B5CC22]  text-white font-semibold rounded-tl-3xl'>縣市</th>
                              <th className='sm:p-5 text-lg w-[10px] bg-[#B5CC22] text-white font-semibold'>區域</th>
                              <th className='sm:p-5 text-lg w-[10px] bg-[#B5CC22] text-white font-semibold'>站點名稱</th>
                              <th className='sm:p-5 text-lg w-[10px] bg-[#B5CC22] text-white font-semibold'>可借車輛</th>
                              <th className='sm:p-5 text-lg w-[10px] bg-[#B5CC22] text-white font-semibold rounded-tr-3xl'>可還空位</th>
                         </tr>
                    </thead>
                    <tbody>


                         {render_results()}


                    </tbody>
               </table>
          </div>

     )
}

export default FilterResults