'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'tailwindcss/tailwind.css'; // Certifique-se de ter o Tailwind CSS configurado no seu projeto

const AuthVerificationPage = () => {
    const formik = useFormik({
        initialValues: {
            verificationCode: ['', '', '', '', '', ''],
        },
        validationSchema: Yup.object({
            verificationCode: Yup.array()
                .of(Yup.string().matches(/^\d$/, 'Each field must be a number'))
                .required('Code is required'),
        }),
        onSubmit: values => {
            const code = values.verificationCode.join('');
            console.log('Verification code:', code);
        },
    });

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d?$/.test(value)) {
            const newVerificationCode = [...formik.values.verificationCode];
            newVerificationCode[index] = value;
            formik.setFieldValue('verificationCode', newVerificationCode);

            // Automatically focus the next input
            if (value && index < 5) {
                const nextSibling = document.querySelector(
                    `input[name=verificationCode${index + 1}]`
                );
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row font-sans">
            <div className="flex flex-1 flex-col items-center justify-center p-6 text-white">
                <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
                    <h1 className="text-2xl font-medium mb-3 text-center">Insira o código de verificação</h1>
                    <p className="mb-12 text-sm">Enviamos o código de verificação para lucas@bloxs.com.br</p>
                    <div className="flex justify-between mb-4">
                        {formik.values.verificationCode.map((value, index) => (
                            <input
                                key={index}
                                id={`verificationCode${index}`}
                                name={`verificationCode${index}`}
                                type="text"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onBlur={formik.handleBlur}
                                className={`w-12 h-12 text-center text-2xl border ${formik.touched.verificationCode && formik.errors.verificationCode ? 'border-red-600' : 'border-gray-600'} bg-transparent rounded focus:outline-none focus:border-yellow-500`}
                            />
                        ))}
                    </div>
                    {formik.touched.verificationCode && formik.errors.verificationCode ? (
                        <div className="text-red-600 text-sm mb-4">{formik.errors.verificationCode}</div>
                    ) : null}
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded transition duration-300 mt-6"
                    >
                        Finalizar cadastro
                    </button>
                    <p className="text-xs text-gray-400 mt-4">
                        Não recebeu o código? <a href="#" className="text-yellow-500">Reenviar</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AuthVerificationPage;
