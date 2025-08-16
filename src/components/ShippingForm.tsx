import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ShippingFormInputs,shippingFormSchema } from '@/types';


const ShippingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  });
  return <form className='flex flex-col gap-4'>

    <div className='flex flex-col gap-1 '>
      <label htmlFor="">Name</label>
      <input type="text" id='name' placeholder='john Doe' {...register('name')} />
      {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
    </div>

  </form>
}

export default ShippingForm