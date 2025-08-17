import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ShippingFormInputs, shippingFormSchema } from '@/types';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';


const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs)=>void}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  });
  const router =useRouter()
  const handleShippingForm:SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data)
    router.push("/cart?step=3"),{scroll:false}
    // Here you can handle the form submission, e.g., send data to an API or update the state
  };
  return <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)}>

    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="">Name</label>
      <input type="text" id='name' placeholder='john Doe' {...register('name')} className='border-b border-gray-200 py-2 outline-none text-sm'/>
      {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
    </div>
    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="">Email</label>
      <input type="email" id='email' placeholder='email@email.com' {...register('email')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
    </div>
    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="">Phone Number</label>
      <input type="text" id='phone' placeholder='+1234567890' {...register('phone')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
    </div>
    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="">Adress</label>
      <input type="adress" id='adress' placeholder='Enter Your Adress' {...register('address')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.address && <p className='text-red-500 text-sm'>{errors.address.message}</p>}
    </div>
    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="">city</label>
      <input type="adress" id='adress' placeholder='Enter Your city' {...register('city')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.city && <p className='text-red-500 text-sm'>{errors.city.message}</p>}
    </div>
    <button type='submit' className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
      Continue
      <ArrowRight className="w-3 h-3" />
    </button>
  </form>
}

export default ShippingForm