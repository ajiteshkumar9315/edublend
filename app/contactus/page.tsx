"use client";
import React, { useState } from 'react';
import styles from './ContactUsForm.module.css';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    inquiryType: string;
}

const ContactUsForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'General Inquiry'
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                inquiryType: 'General Inquiry'
            });
        } else {
            setErrors(validationErrors);
        }
    };

    if (submitted) {
        return (
            <h2 className={styles.thankYou}>
                Thank you for your message! We will get back to you shortly.
            </h2>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            action="https://fabform.io/f/xxxxx"
            method="post"
            className="py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:mb-0 mb-10">
                        <div className="group w-full h-full">
                            <div className="relative h-full">
                                <img
                                    src="https://pagedone.io/asset/uploads/1696488602.png"
                                    alt="ContactUs tailwind section"
                                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                                />
                                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                                    Contact us
                                </h1>
                                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                    <div className="bg-white rounded-lg p-6 block">
                                        <a href="javascript:;" className="flex items-center mb-6">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                                                    stroke="#4F46E5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                +91 xxxxxx-xxxx
                                            </h5>
                                        </a>
                                        <a
                                            href="https://google.com"
                                            className="flex items-center mb-6"
                                        >
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                                                    stroke="#4F46E5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                https://veilmail.io/irish-geoff
                                            </h5>
                                        </a>
                                        <a href="javascript:;" className="flex items-center">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 10H20M10 15H20M10 20H14M27.5 15C27.5 20.714 27.5 23.0711 26.0355 24.5355C24.5711 26 22.214 26 17.5 26H12.5C7.78595 26 5.42893 26 3.96447 24.5355C2.5 23.0711 2.5 20.714 2.5 15C2.5 9.28595 2.5 6.92893 3.96447 5.46447C5.42893 4 7.78595 4 12.5 4H17.5C22.214 4 24.5711 4 26.0355 5.46447C27.5 6.92893 27.5 9.28595 27.5 15Z"
                                                    stroke="#4F46E5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                www.siteurl.com
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:p-20 p-5 rounded-2xl bg-indigo-50">
                        <div className="w-full h-full">
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 lg:gap-y-7 gap-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-sm text-gray-900 font-manrope block mb-2"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full h-[46px] text-sm font-manrope text-gray-900 py-3 px-4 rounded-lg border-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-sm text-gray-900 font-manrope block mb-2"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full h-[46px] text-sm font-manrope text-gray-900 py-3 px-4 rounded-lg border-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs">{errors.email}</p>
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm text-gray-900 font-manrope block mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full h-[46px] text-sm font-manrope text-gray-900 py-3 px-4 rounded-lg border-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                                        placeholder="Enter your subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm text-gray-900 font-manrope block mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full h-[130px] text-sm font-manrope text-gray-900 py-3 px-4 rounded-lg border-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-xs">{errors.message}</p>
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="inquiryType"
                                        className="text-sm text-gray-900 font-manrope block mb-2"
                                    >
                                        Inquiry Type
                                    </label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        className="w-full h-[46px] text-sm font-manrope text-gray-900 py-3 px-4 rounded-lg border-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Support">Support</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center text-white text-lg font-manrope h-[46px] w-full rounded-lg bg-[#4F46E5] hover:shadow-md hover:shadow-[#4F46E5]/50 transition-shadow"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactUsForm;
