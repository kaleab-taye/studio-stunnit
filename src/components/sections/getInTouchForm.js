import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Button from '../button'

export default function GetInTouchForm() {
    const [status, setStatus] = useState("idl")
    const [message, setMessage] = useState("")
    const sendEmail = async () => {
        setStatus("loading")
        try {
            let name = document.getElementById("name-field").value
            if (name.length < 1) {
                setStatus("error")
                setMessage("Name field can't be empty*")
                return
            }
            let email = document.getElementById("email-field").value
            if (email.length < 1) {
                setStatus("error")
                setMessage("Email field can't be empty*")
                return
            }
            let phone = document.getElementById("phone-field").value
            if (phone.length < 1) {
                setStatus("error")
                setMessage("Phone Number field can't be empty*")
                return
            }
            let message = document.getElementById("message-field").value
            if (message.length < 1) {
                setStatus("error")
                setMessage("Message field can't be empty*")
                return
            }
            let whatsapp = document.getElementById("whatsapp-field").value
            let response = await fetch(`${process.env.url}/get-in-touch-email`, {
                method: "POST",
                body: JSON.stringify({ name, email, phone, message, whatsapp }),
            });
            if (response.ok) {
                setStatus("success")
                setMessage("Email has been sent successfully")
            } else {
                setStatus("error")
                setMessage("sending message failed, please try again.")
            }

        } catch (error) {
            console.log(error)
            setStatus("error")
            setMessage("sending message failed, please try again.")
        }

    }
    return (
        <div className='lg:min-w-[900px] gap-10 grid border-[2px] border-primary/70 relative py-10 px-3 sm:px-5 md:p-12 md:m-5 rounded'>
            <div className='absolute top-[-25px] grid w-full  mx-auto  text-primaryColor font-light '>
                <div className=' grid relative text-center  w-[45px] h-[45px] bg-primary rounded-full m-auto'>
                    <div className='m-auto'>
                        OR
                    </div>
                </div>
            </div>
            <div className='mx-auto font-bold text-lg text-center'>Enter your details below and we’ll contact you within 24 hours</div>
            <div className='grid grid-flow-row md:grid-flow-col gap-4'>
                <div className='grid grid-flow-row gap-3'>
                    <input id="name-field" placeholder='NAME' className='!focus:ring-primary !focus:ring-0 !focus:border-10 !focus:border-red-500  text-xs border-2 border-primary/70 rounded p-3 bg-surface focus:bg-surface' />
                    <input id="email-field" placeholder='EMAIL' className='focus:ring-primary  text-xs border-2 border-primary/70 rounded p-3 bg-surface' />

                    <div className='relative'>
                        <input id="phone-field" placeholder='PHONE NUMBER' className='focus:ring-primary focus:border-primary focus:border-2 ring-primary w-full text-xs border-2 border-primary/70 rounded p-3 bg-surface' />
                        <div className='absolute hidden md:grid ml-5'>

                            <FormControlLabel
                                className='text-xs'
                                label={<div className='text-xs text-primary'>Contact Us On Whatsapp</div>}
                                control={<Checkbox
                                    defaultChecked
                                    id='whatsapp-field'
                                    checkedIcon={<FaCheckCircle className='text-primary w-[14px] h-[14px]' />}
                                    icon={<div className='border border-primary w-[14px] mr-auto h-[14px] rounded-full'></div>} />}
                            />
                        </div>

                    </div>

                </div>
                <div className='grid gap-2'>
                    <textarea id="message-field" placeholder='MESSAGE' className='focus:ring-primary focus:border-primary focus:border-2 w-[100%] h-[100%] min-h-[100px] text-xs border-2 border-primary/70 rounded p-3 bg-surface' />
                    <div className='grid md:hidden ml-5'>

                        <FormControlLabel
                            className='text-xs'
                            label={<div className='text-xs text-primary'>Contact Us On Whatsapp</div>}
                            control={<Checkbox
                                defaultChecked
                                id='whatsapp-field'
                                checkedIcon={<FaCheckCircle className='text-primary w-[14px] h-[14px]' />}
                                icon={<div className='border border-primary w-[14px] mr-auto h-[14px] rounded-full'></div>} />}
                        />
                    </div>
                </div>
            </div>
            {status == "loading" || status == "error" || status == "success" ? <div className='mb-[-16px] mt-[-30px] md:mt-[-16px] h-0 m-auto h-fit grid'>
                {status == "loading" ? <div className='text-sm mt-5 text-primary bg-surface'>Sending Email . . .</div> : null}
                {status == "error" ? <div className='text-sm mt-5 text-dangerColor bg-surface'>{message}</div> : null}
                {status == "success" ? <div className='text-sm mt-5 text-primary bg-surface'>Your Email Has Been Sent Successfully!</div> : null}
            </div> : null}
            <div className='mx-auto' onClick={() => status != 'loading' ? sendEmail() : null}>
                <Button padding='px-14' name='Submit' status={status} />
            </div>
        </div>
    )
}
