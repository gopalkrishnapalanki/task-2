import React from 'react'
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, Input, Label, FormGroup, Form, } from "reactstrap";
import { postTableData, updateTableData, DeleteTableData, getTableDataById } from '../apis/TableDataGetter';
import { SmartToaster, toast } from "react-smart-toaster";
import { useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import validator from 'validator';




export default function ContactModal(props) {


    const { id } = useParams()
    const initialFromData = { first_name: "", email: "", phone_number: "", owner: "", custom_contact_fields: [], department: 'joi' };
    const [formData, setFormData] = useState(initialFromData);
    const [error, setError] = useState(false);

    // form submission
    const SubmitForm = async (e) => {
        e.preventDefault();
        if (formData.first_name === "" || !validator.isEmail(formData.email) || formData.phone_number === '' || formData.owner === "") {
            setError(true);
            // newwwwwwww dummy
        } else {
            const newContact = { ...formData };
            if (props.type === "create") {
                const { data, status } = await postTableData(newContact);
                props.getData()
                toast.success("Created Succesfully");
                if (status !== 201) {
                    toast.error("Something went wrong");
                }
            }
            if (props.type === "edit") {
                const { data, status } = await updateTableData(formData)
                toast.success("Updated Succesfully");
            } props.onHide(e);
            setFormData(initialFromData);
            setError(false);
            props.getData()
        }

    }

    useEffect(() => {
        if (props.type === "edit") {
            tableDataById();
        }
    }, [props.contact_Id])

    // get call by Id
    const tableDataById = async () => {
        const { data, status } = await getTableDataById(props.contact_Id)
        setFormData(data?.Data[0])
    }

    // delete call
    const deleteContact = async () => {
        const { data, status } = await DeleteTableData(props.contact_Id);
        props.getData()
        toast.success("Deleted Succesfully");
        props.onHide()
    }
    // closeing of model
    const close = () => {
        props.onHide()
        setFormData(initialFromData);
        setError(false)
    }
    function isValidEmailAddress(address) {
        return !!address.match(/.+@.+/);
    }


    return (
        <>
            <Modal {...props} size="lg" >
                <Modal.Header closeButton>
                    {props.type === 'create' ? <Modal.Title className='flow-title'>Add Contact</Modal.Title> : null}
                    {props.type === 'edit' ? <Modal.Title className='flow-title'>Edit Contact</Modal.Title> : null}
                    {props.type === 'delete' ? <Modal.Title className='flow-title'>Delete Contact</Modal.Title> : null}
                </Modal.Header>
                <Modal.Body>
                    {props.type === 'delete' ? <div>
                        <div className='container'>
                            <div className="row">
                                <div className="col-lg-12 ">
                                    <p>Are you sure want to delete?</p>
                                    <div className='d-flex justify-content-end'>
                                        <button type="button" className="btn btn-dark mt-3 me-3" onClick={() => close()}>Cancel</button>
                                        <button type="button" className="btn btn-outline-danger mt-3 " onClick={() => deleteContact()}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div>
                        <div className='container'>
                            <Form onSubmit={SubmitForm}>

                                <div className="row">
                                    <div className='col-lg-6'>
                                        <FormGroup> <Label className="" for="name"> Name <span className="text-danger">*</span> </Label> <Input type="text" name="name" id="name" placeholder="Name.." className="" value={formData?.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} /> {formData?.first_name == "" && error ? (<span className="text-danger"> Please enter name </span>) : ("")} </FormGroup>
                                    </div>
                                    <div className='col-lg-6'>
                                        <FormGroup> <Label className="" for="email"> Email <span className="text-danger">*</span> </Label> <Input type="email" name="email" id="email" placeholder="Email.." className="" value={formData?.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })} /> {!validator.isEmail(formData.email) && error ? (<span className="text-danger"> Please enter Email </span>) : ("")} </FormGroup>
                                    </div>

                                    <div className='col-lg-6'>
                                        <FormGroup> <Label className="" for="phone_number"> Phone number <span className="text-danger">*</span> </Label> <PhoneInput country={'in'} inputClass='w-100'

                                            placeholder="Phone.." className="w-100" value={formData?.phone_number} onChange={(phone) => setFormData({ ...formData, phone_number: phone })} /> {formData?.phone_number == "" && error ? (<span className="text-danger"> Please enter phone number </span>) : ("")} </FormGroup>
                                    </div>

                                    <div className='col-lg-6'>
                                        <FormGroup> <Label className="" for="owner"> Owner <span className="text-danger">*</span></Label> <Input type="text" name="owner" id="owner" placeholder="Owner.." className="" value={formData?.owner} onChange={(e) => setFormData({ ...formData, owner: e.target.value })} />   {formData?.owner == "" && error ? (<span className="text-danger"> Please enter owner name </span>) : ("")}</FormGroup>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="button" className="btn btn-outline-danger mt-3 me-3" onClick={() => close()}>Cancle</button>
                                    <button type="button" className="btn btn-dark mt-3" onClick={SubmitForm} >Save</button>
                                </div>
                            </Form>
                        </div>
                    </div>}
                </Modal.Body>
            </Modal>


            {/* toaster */}
            <SmartToaster
                width={"250px"}
                store={toast}
                lightBackground={false}
                position={"bottom_right"}
            />
        </>
    )
}
