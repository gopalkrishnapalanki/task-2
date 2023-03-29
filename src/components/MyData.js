import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ContactModal from './ContactModal';
import { Modal } from 'react-bootstrap';
import { getTableData } from '../apis/TableDataGetter';
import { hover } from '@testing-library/user-event/dist/hover';
import BriefContact from './BriefContact';



const customStyles = {

    rows: {
        style: {
            // minHeight: '72px', // override the row height
            // paddingTop:"20px"
            backgroundColor: 'white',
        },
    },
    headCells: {
        style: {

            backgroundColor: 'white',
            color: "#0E374B",
            fontWeight: "700",
            fontSize: "15px"

        },


    },



    columns: {
        style: {
            color: "red",
        }
    }
};





export default function MyData() {

    const [tableData, setTableData] = useState([])
    const [contactModal, setContactModal] = useState({ modal: false })
    const [contactType, setContactType] = useState()
    const[contactId,setContactId] = useState("")
    const navigate = useNavigate()



 
    const columns = [
        // {
        //     name: 'ID',
        //     selector: row => row.title,
        // },
        // {
        //     name: 'Status',
        //     selector: (cellInfo) => <div className="form-check form-switch">
        //         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        //     </div>

        // },
        {
            name: 'Contact Name',
            selector: row => row.first_name,
        },

        {
            name: 'Company Name',
            selector: row => "KENEDY",
        },


        {
            name: ' Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone_number,
        },

        {
            name: 'Contact Owner',
            selector: row => `Rachel`,
        },
        {
            name: 'Last Updated',
            selector: (row) => row.updated_at
        },


        {
            name: 'Actions',
            selector: (item) => {

                return (
                    <div className=''> <ModeEditOutlineOutlinedIcon sx={{ marginRight: 2, color: 'green' }} onClick={() => { setContactModal({ modal: true, }); setContactType('edit');setContactId(item.id) }} /><DeleteOutlineOutlinedIcon sx={{ color: "brown" }} onClick={() => { setContactModal({ modal: true, }); setContactType('delete');setContactId(item.id) }}/></div>

                )
            }
        },

        // {
        //     name: 'Actions',
        //     selector: (cellInfo) => <DeleteOutlineOutlinedIcon />
        // },

    ];


    useEffect(() => {
        contactData()
        console.log("HHHHH")

    }, [1])


    const contactData = async () => {
        const { data, status } = await getTableData();
        // console.log(data,'data');
        setTableData(data?.Data)
    }



    const onRowClicked = (e) => {
        navigate(`/briefcard/${e.id}`)
        // console.log(e,'id');
        // <Link to ='/briefcard'></Link>

    }



    console.log(tableData, "tableData")

    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn my-btn-bg mt-3 mb-3 " onClick={() => { setContactModal({ modal: true, }); setContactType('create') }}><AddOutlinedIcon />Add Contact</button></div>

                <DataTable
                    columns={columns}
                    data={tableData}
                    selectableRows
                    customStyles={customStyles}
                    onRowClicked={(e) => onRowClicked(e)}
                    highlightOnHover
                    pointerOnHover

                    pagination
                />

                <ContactModal
                    setContactModal={(doc) => setContactModal(doc)}
                    show={contactModal.modal}
                    onHide={() => setContactModal({ modal: false, modalType: "", type: "", details: {}, })}
                    params={contactModal}
                    type={contactType}
                    contact_Id={contactId}
                    getData={contactData}

                />

                {/* <BriefContact inData = {tableData}/> */}

            </div>
        </>
    )
}
