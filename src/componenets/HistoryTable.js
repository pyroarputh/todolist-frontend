import React from 'react';
import MUIDataTable from "mui-datatables";

const axios = require('axios');
const moment = require('moment');

const columns = [
    {
        name: 'createdAt',
        label: 'created Date',
        options: {
            sort: true,
            customSort: (a, b) => moment(a.createdAt).isAfter(b.createdAt),
            customBodyRender: (value, tableMeta, updateValue) => {
                return moment(value).format("YYYY-MM-DD HH:mm:ss");
            }
        }
    },
    {
        name: 'name',
        label: 'action',
        options: {
            sort: true,
        }
    },
    {
        name: 'task',
        label: 'task',
        options: {
            sort: true,
            sortCompare: (order) => {
                return (obj1, obj2) => {
                  let val1 = obj1.data.name.toString();
                  let val2 = obj2.data.name.toString();
                  return val1.localeCompare(val2) * (order === 'asc' ? 1 : -1);
                };
            },
            customBodyRender: (value, tableMeta, updateValue) => {
                return value.name;
            }
        }
    },
];



const HistoryTable = ({data}) => {
    const options = {
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        sortOrder: {
            name: 'createdAt',
            direction: 'desc'
        },
        onRowsDelete: (rowsDeleted) => {
            const selectedIds = rowsDeleted.data.map(row => {
                return data[row.dataIndex]._id;
            })
            (async () => {
                try {
                    const response2 = await axios({
                        method: 'delete',
                        url: 'http://localhost:9000/task-log',
                        data: {
                            selectedIds: selectedIds
                        }
                    })
                    if (response2.data.deletedCount > 0) {
                        alert('deleted rows count = ' + response2.data.deletedCount)
                    } else {
                        alert(JSON.stringify(response2.data))
                    }
                } catch (error) {
                  alert(error.message);
                }
            })();
        },
    }

    return (
      <div className='container'>
        <MUIDataTable
            columns={columns}
            data={data}
            options={options}
        ></MUIDataTable>
      </div>
    );
  }
  
  export default HistoryTable