import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

type Props = {}

function Contact({}: Props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:me@iefosa.me?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    
  };
  
  return (
    <div className='relative flex flex-col items-center h-screen px-10 py-2 mx-auto text-center max-w-fit md:max-w-3xl md:text-left md:flex-row justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>Contact</h3>

        <article className='flex flex-col space-y-10'>
            <h4 className='text-3xl font-semibold text-center'>
                I've got just what you need.{' '}
                <span className="decoration-[#74a69a]/50 underline">Let's Talk.</span>
            </h4>

            <div className='space-y-8'>
                <div className='flex items-center justify-center pb-3 space-x-5'>
                    <PhoneIcon className='text-[#74a69a] h-7 w-7 animate-pulse' />
                    <p className="text-lg">+44 7368 616479</p>
                </div>

                <div className='flex items-center justify-center pb-3 space-x-5'>
                    <EnvelopeIcon className='text-[#74a69a] h-7 w-7 animate-pulse' />
                    <p className="text-lg">me@iefosa.me</p>
                </div>

                <div className='flex items-center justify-center pb-3 space-x-5'>
                    <MapPinIcon className='text-[#74a69a] h-7 w-7 animate-pulse' />
                    <p className="text-lg">Manchester, UK.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto space-y-2 w-fit'>
                <div className='flex space-x-2'>
                    <input {...register('name')} className='contact-input' type="text" name="name" id="" placeholder='Name' />
                    <input {...register('email')} className='contact-input' type="email" name="email" id="" placeholder='Email' />
                </div>

                <input {...register('subject')} className='contact-input' type="text" placeholder='Subject' />

                <textarea {...register('message')} className='contact-input' placeholder='Message' />

                <button type='submit' className='bg-[#74a69a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
            
        </article>
    </div>
  )
}

export default Contact;