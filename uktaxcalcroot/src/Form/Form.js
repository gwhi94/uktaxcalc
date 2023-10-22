import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        textInput: '',
        checkbox1: false,
        checkbox2: false,
        dropdown: '2023/24',
    });

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

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <h3 className='mb-1 font-semibold text-green-500'>Income</h3>

                <div className="mb-4">
                    <div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="checkbox0"
                                name="checkbox0"
                                className="mr-2 leading-tight"
                                checked={formData.checkbox0}
                                onChange={handleChange}
                            />
                            <label htmlFor="plan1">I live in Scotland</label>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="font-semibold text-slate-700 block text-gray-700 text-sm font-bold mb-2" htmlFor="textInput">
                        Annual salary, before tax.
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="textInput"
                        name="textInput"
                        value={formData.textInput}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="font-semibold text-slate-700 block text-gray-700 text-sm font-bold mb-2" htmlFor="textInput">
                        Tax code, if you know it.
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="textInput"
                        name="textInput"
                        value={formData.textInput}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="font-semibold text-slate-700 block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown">
                        Tax year
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="dropdown"
                        name="dropdown"
                        value={formData.dropdown}
                        onChange={handleChange}
                    >
                        <option value="2020/21">2020/21</option>
                        <option value="2021/22">2021/22</option>
                        <option value="2022/23">2022/23</option>
                        <option value="2023/24">2023/24</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="font-semibold text-slate-700 block text-gray-700 text-sm font-bold mb-2" htmlFor="textInput">
                        Bonus amount (optional).
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="textInput"
                        name="textInput"
                        value={formData.textInput}
                        onChange={handleChange}
                    />
                </div>

                <h3 className='mb-1 font-semibold text-red-500'>Deductions</h3>

                <div className="mb-4">
                    <label className="font-semibold text-slate-700 block text-gray-700 text-sm font-bold mb-2" htmlFor="textInput">
                        Pension contribution.
                    </label>


                    <div className="mb-4 grid grid-cols-2 pension-control-wrapper">
                        <div className="columns">
                            <div className="column is-12">
                                <div className="amt-percent-toggle">
                                    <input type="radio" id="switch_left" name="switch_2" value="yes" />
                                    <label for="switch_left">%</label>
                                    <input type="radio" id="switch_right" name="switch_2" value="no" checked />
                                    <label for="switch_right">£</label>
                                </div>
                            </div>
                        </div>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="textInput"
                            name="textInput"
                            value={formData.textInput}
                            onChange={handleChange}
                        />
                    </div>

                </div>


                <div className="mb-4">
                    <label className="font-semibold text-slate-700 block text-gray-700 text-sm font-bold mb-2">
                        Student loan (optional)
                    </label>
                    <div >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="checkbox1"
                                name="checkbox1"
                                className="mr-2 leading-tight"
                                checked={formData.checkbox1}
                                onChange={handleChange}
                            />
                            <label htmlFor="plan1">England/Wales - Plan 1</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="checkbox2"
                                name="checkbox2"
                                className="mr-2 leading-tight"
                                checked={formData.checkbox2}
                                onChange={handleChange}
                            />
                            <label htmlFor="plan2">England/Wales - Plan 2</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="checkbox3"
                                name="checkbox3"
                                className="mr-2 leading-tight"
                                checked={formData.checkbox2}
                                onChange={handleChange}
                            />
                            <label htmlFor="plan4">Scotland - Plan 4</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="checkbox4"
                                name="checkbox4"
                                className="mr-2 leading-tight"
                                checked={formData.checkbox2}
                                onChange={handleChange}
                            />
                            <label htmlFor="plan5">Postgrad loan</label>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="font-semibold text-slate-700 block text-gray-700 text-sm font-bold mb-2" htmlFor="textInput">
                        Other deductions.
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="textInput"
                        name="textInput"
                        value={formData.textInput}
                        onChange={handleChange}
                    />
                </div>



                <div className="mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-slate-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Calculate
                    </button>
                </div>
            </form >
        </div >





    );
}