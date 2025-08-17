import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PaymentFormInputs, paymentFormSchema, ShippingFormInputs, shippingFormSchema } from '@/types';
import { ArrowRight, ShoppingCartIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';


const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema)
  });
  const router = useRouter()
  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
   
  };
  return <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)}>

    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="cardHolder">Name on card</label>
      <input type="text" id='cardHolder' placeholder='john Doe' {...register('cardHolder')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.cardHolder && <p className='text-red-500 text-sm'>{errors.cardHolder.message}</p>}
    </div>
    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="cardNumber">Card Number</label>
      <input type="email" id='cardNumber' placeholder='email@email.com' {...register('cardNumber')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.cardNumber && <p className='text-red-500 text-sm'>{errors.cardNumber.message}</p>}
    </div>
    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="expirationDate">Expiration Date</label>
      <input type="text" id='expirationDate' placeholder='01/32' {...register('expirationDate')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.expirationDate && <p className='text-red-500 text-sm'>{errors.expirationDate.message}</p>}
    </div>
    <div className='flex flex-col gap-1 '>
      <label className='text-gray-500 font-medium' htmlFor="">cvv</label>
      <input type="text" id='cvv' placeholder='123' {...register('cvv')} className='border-b border-gray-200 py-2 outline-none text-sm' />
      {errors.cvv && <p className='text-red-500 text-sm'>{errors.cvv.message}</p>}
    </div>
    
    <div className=''></div>
  
    <button type='submit' className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
      Checkout
      <ShoppingCartIcon className="w-3 h-3" />
    </button>
  </form>
}

export default PaymentForm