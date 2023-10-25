import React, { useState } from 'react';
import { Switch } from '@headlessui/react'
import { useFormContext, Controller } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'

export default function Form({ callback }) {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        defaultValues:{
            inScotland:false
        }
    });

    const onSubmit = (data) => {
        console.log('Submitted');

        callback(data);


    };

    const [formData, setFormData] = useState({
        salary: '',
        taxCode: '',
        bonus: '',
        pensionAmt: '',
        deductions: '',
        checkbox1: false,
        checkbox2: false,
        dropdownYear: '2023/24',
        dropdownLoan: 'noLoan',
    });

    const methods = useForm();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const [selectedOptionPension, setSelectedOptionPension] = useState('');
    const handleOptionChange = (e) => {
        setSelectedOptionPension(e.target.value);
    };

    const [enabled, setEnabled] = useState(false);

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <FormProvider {...methods}>
                <form className="rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <div className="mb-4 flex items-center">
                        <div className="mr-2 font-semibold text-slate-700 block text-gray-700 text-md font-bold" htmlFor="textInput">
                            In Scotland?
                        </div>
                        <div className="grid place-items-center">                  
                            <Controller
                                control={control}
                                name="inScotland"
                                render={({ field }) =>  
                                <Switch
                                {...field}
                                checked={field.value}
                                id="inScotland"
                                onChange={field.onChange}
                                className={`${field.value ? 'bg-gray-800' : 'bg-gray-200'}
          relative inline-flex h-[28px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">In Scotland toggle</span>
                                <span
                                    aria-hidden="true"
                                    className={`${field.value ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[23px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}

                                />
                            </Switch>}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="font-semibold text-slate-700 block text-gray-700 text-md font-bold mb-2" htmlFor="textInput">
                            Annual salary, before tax.
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            id="salary"
                            name="salary"
                            value={formData.textInput}
                            onChange={handleChange}
                            {...register('salary', {
                                required: true,
                            })}
                        />
                        {errors.salary && <p>Salary is required</p>}
                    </div>

                    <div className="mb-4">
                        <label className="font-semibold text-slate-700 block text-gray-700 text-md font-bold mb-2" htmlFor="dropdown">
                            Tax year
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dropdownYear"
                            name="dropdownYear"
                            value={formData.dropdownYear}
                            onChange={handleChange}
                            {...register('dropdownYear', {
                                required: false,
                            })}
                        >
                            <option value="2020/21">2020/21</option>
                            <option value="2021/22">2021/22</option>
                            <option value="2022/23">2022/23</option>
                            <option value="2023/24">2023/24</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="font-semibold text-slate-700 block text-gray-700 text-md font-bold mb-2" htmlFor="textInput">
                            Tax code (optional).
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="taxCode"
                            name="taxCode"
                            value={formData.textInput}
                            onChange={handleChange}
                            {...register('taxCode', {
                                required: false,
                            })}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="font-semibold text-slate-700 block text-gray-700 text-md font-bold mb-2" htmlFor="textInput">
                            Bonus amount (optional).
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="bonus"
                            name="bonus"
                            value={formData.textInput}
                            onChange={handleChange}
                            {...register('bonus', {
                                required: false,
                            })}
                        />
                    </div>

                    <h3 className='mb-1 font-semibold text-red-500'>Deductions</h3>

                    <div className="mb-4">
                        <label className="font-semibold text-slate-700 block text-gray-700 text-md font-bold mb-2" htmlFor="textInput">
                            Pension contribution.
                        </label>

                        <div className="grid grid-cols-2 pension-control-wrapper items-center">
                            <div className="columns">
                                <div className="column is-12">
                                    <div className="amt-percent-toggle">
                                        <input type="radio" id="pension-percent" value="yes" checked {...register('pensionToggle', {required:false })} />
                                        <label for="pension-percent">%</label>
                                        <input type="radio" id="pension-amount" value="no" {...register('pensionToggle', {required:false })} />
                                        <label for="pension-amount">£</label>
                                    </div>
                                </div>
                            </div>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id="pensionAmt"
                                name="pensionAmt"
                                value={formData.textInput}
                                onChange={handleChange}
                                {...register('pensionAmt', {
                                    required: false,
                                })}
                            />
                        </div>
                    </div>


                    <div className="mb-4">
                        <label className="font-semibold text-slate-700 block text-gray-700 text-md font-bold mb-2" htmlFor="dropdown">
                            Student loan (optional)
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dropdownLoan"
                            name="dropdownLoan"
                            value={formData.dropdown}
                            onChange={handleChange}
                            {...register('dropdownLoan', {
                                required: false,
                            })}
                        >
                            <option value="noLoan">No student loan</option>
                            <option value="plan1">England/Wales - Plan 1</option>
                            <option value="plan2">England/Wales - Plan 2</option>
                            <option value="plan4">Scotland - Plan 4</option>
                            <option value="planPostGrad">Postgrad loan</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="font-semibold text-slate-700 block text-gray-700 text-md font-bold mb-0" htmlFor="textInput">
                            Other annual deductions (optional)
                        </label>
                        <small className="mt-0">Enter any additional annual pre-tax deductions</small>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="deductions"
                            name="deductions"
                            value={formData.textInput}
                            onChange={handleChange}
                            {...register('deductions', {
                                required: false,
                            })}
                        />
                    </div>



                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-slate-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Calculate
                        </button>
                    </div>
                </form >
            </FormProvider>
        </div >
    );
}