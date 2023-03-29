import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from '@mui/material/Accordion';
import { useParams } from 'react-router-dom';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getTableDataById } from '../apis/TableDataGetter';

export default function BriefContact() {
    const [byIdData, setByIdData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        tableDataById()

    }, [])

    const tableDataById = async () => {
        const { data, status } = await getTableDataById(id)
        setByIdData(data?.Data)
    }

    return (
        <>
            <Container className='mt-4 '>
                <Row>
                <Col lg={4}>
                    <Typography variant='h5' sx={{ mb: 3 }}>{byIdData[0]?.first_name} </Typography>
                   
                        <Accordion>
                            <AccordionSummary expandIcon={<FormatAlignJustifyOutlinedIcon />}>
                                <Typography>Contact<KeyboardArrowDownIcon /></Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                borderTop: '1px solid #dbdbdb', height: '190px', overflowY: 'scroll', scrollbarWidth: 'thin',

                                '&::-webkit-scrollbar': {
                                    width: '0.2em',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: "#f1f1f1",
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#888',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    background: '#555'
                                }

                            }}>

                                <div className="ms-2 ">
                                    {byIdData?.map((item, index) => (
                                        <Col sm={12} md={8} key={index}>

                                            <div className='pt-3 d-flex justify-content-between'>
                                                <p className='mb-0'>Name:</p> <span className=''>{item.first_name}</span>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-between'>
                                                <p className='mb-0'>Email:</p> <span className=''>{item.email}</span>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-between'>
                                                <p className='mb-0'>Company:</p> <span className=''>Rechond</span>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-between'>
                                                <p className='mb-0'>Tags:</p> <span className=''><button className='my-btn btn-secondary'>Tags</button></span>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-between'>
                                                <p className='mb-0'>Phone:</p> <span className=''>{item.phone_number}</span>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-between'>
                                                <p className='mb-0'>Source:</p> <span className=''>Owner</span>
                                            </div>

                                        </Col>
                                    ))}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </Col>
                    <Col lg={8}>

                    </Col>
                </Row>

                {/* static data */}
                <Row className='mt-3'>


                    <Col lg={4}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FormatAlignJustifyOutlinedIcon />}

                            >
                                <Typography>Company<KeyboardArrowDownIcon /></Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                borderTop: '1px solid #dbdbdb', height: '190px', overflowY: 'scroll', scrollbarWidth: 'thin',

                                '&::-webkit-scrollbar': {
                                    width: '0.2em',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: "#f1f1f1",
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#888',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    background: '#555'
                                }

                            }}>

                                <div className="ms-2 ">

                                    <Col sm={12} md={8} >

                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Name:</p> <span className=''>fwajpiej</span>
                                        </div>
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Email:</p> <span className=''>ijopi@gmail.com</span>
                                        </div>
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Company:</p> <span className=''>Rechond</span>
                                        </div>
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Tags:</p> <span className=''><button className='my-btn btn-secondary'>Tags</button></span>
                                        </div>
                                        {/* <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Phone:</p> <span className=''></span>
                                        </div> */}
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Source:</p> <span className=''>Owner</span>
                                        </div>

                                    </Col>

                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </Col>

                </Row>

                <Row className='mt-3'>


                    <Col lg={4}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FormatAlignJustifyOutlinedIcon />}

                            >
                                <Typography>Others<KeyboardArrowDownIcon /></Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                borderTop: '1px solid #dbdbdb', height: '190px', overflowY: 'scroll', scrollbarWidth: 'thin',

                                '&::-webkit-scrollbar': {
                                    width: '0.2em',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: "#f1f1f1",
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#888',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    background: '#555'
                                }

                            }}>

                                <div className="ms-2 ">

                                    <Col sm={12} md={8} >

                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Name:</p> <span className=''>fniwan</span>
                                        </div>
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Email:</p> <span className=''>jiw@hok.com</span>
                                        </div>
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Company:</p> <span className=''>Rechond</span>
                                        </div>
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Tags:</p> <span className=''><button className='my-btn btn-secondary'>Tags</button></span>
                                        </div>
                                        {/* <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Phone:</p> <span className=''></span>
                                        </div> */}
                                        <div className='pt-3 d-flex justify-content-between'>
                                            <p className='mb-0'>Source:</p> <span className=''>Owner</span>
                                        </div>

                                    </Col>

                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
