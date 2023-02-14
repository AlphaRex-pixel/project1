import {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import React from "react";

import { forwardRef } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CheckIcon from '@mui/icons-material/Check';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import RemoveIcon from '@mui/icons-material/Remove';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SearchIcon from '@mui/icons-material/Search';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';



function UserDetails(){

   const [items, getItems] = useState([]);

   const tableIcons = {
    Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutlineIcon {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAltIcon {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpwardIcon {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <RemoveIcon {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumnIcon {...props} ref={ref} />)
    };

   useEffect(()=>{
      const item = JSON.parse(localStorage.getItem('logins'))
      if(item){
         getItems(item)
      }
   },[])

  //  const handleDeleteRows = (rowData) => {
    
  //   const updatedData = items.filter(row => !selectedRows.includes(row))
  //   getItems(updatedData)
    
    
  
  //  }


 return(
  <div>
         <MaterialTable
      title="User Details"
      icons={tableIcons}
      columns={[
        { title: 'First Name', field: 'FirstName'},
        { title: 'Last Name', field: 'LastName' },
        { title: 'Email', field: 'Email'},  
      ]}
      // onSelectionChange={(rows) => setSelectedRows(rows)}
      // options={{
      //   selection: true
      // }}
      data={items}
      editable={{
        onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => { 
            const dataUpdate = [...items];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            localStorage.setItem("logins", JSON.stringify(dataUpdate));
            getItems([...dataUpdate]);

            resolve();
          }, 1000)
        }),

         onRowDelete: (oldData) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...items];
                const target = dataDelete.find(
                  (el) => el.Email === oldData.Email
                );
                const index = dataDelete.indexOf(target);
                console.log(index)
                
                // let devicesArray  = JSON.parse(localStorage.getItem("logins"))
                // console.log(devicesArray.indexOf(index))
                // devicesArray.splice(devicesArray.indexOf(index), 1)
                // console.log(devicesArray)

                dataDelete.splice(index, 1);
                getItems([...dataDelete]);
                console.log(dataDelete);



                localStorage.setItem("logins", JSON.stringify(dataDelete));

                let devicesArray  = JSON.parse(localStorage.getItem("logins"))
                console.log(devicesArray)
               
               
               
               resolve();
              }, 1000);
            });
          }
      }}  
      />
     </div>
 )
}

export default UserDetails;
