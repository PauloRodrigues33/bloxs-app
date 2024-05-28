'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './page.scss';

const AuthPasswordPage = () => {
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required('Senha é obrigatória')
                .min(6, 'Precisa ter no mínimo 6 caracteres')
                .matches(/[A-Z]/, 'Precisa ter uma letra maiúscula')
                .matches(/[0-9]/, 'Precisa ter um número')
                .matches(/[@#!*%:;]/, 'Precisa ter um caractere especial (@#!*%:;)'),
            confirmPassword: Yup.string()
                .required('Confirmação de senha é obrigatória')
                .oneOf([Yup.ref('password'), null as any], 'As senhas precisam ser iguais'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
            <h1 className="text-2xl font-medium mb-6">Escolha sua senha</h1>
            <div className="mb-4">
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Senha"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={`w-full px-4 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-600' : 'border-gray-600'} bg-transparent rounded focus:outline-none focus:border-yellow-500`}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-600 text-sm">{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="mb-6">
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirmar senha"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={`w-full px-4 py-2 border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-600' : 'border-gray-600'} bg-transparent rounded focus:outline-none focus:border-yellow-500`}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="text-red-600 text-sm">{formik.errors.confirmPassword}</div>
                ) : null}
            </div>
            <div className="mb-4">
                <label className='flex items-center text-sm'>
                    <input type="checkbox" checked={formik.values.password.length >= 6} readOnly />
                    6 ou mais caracteres
                </label>
            </div>
            <div className="mb-4">
                <label className='flex items-center text-sm'>
                    <input type="checkbox" checked={/[@#!*%:;]/.test(formik.values.password)} readOnly />
                    Um caractere especial(@#!*%:;)
                </label>
            </div>
            <div className="mb-4">
                <label className='flex items-center text-sm'>
                    <input type="checkbox" checked={/[A-Z]/.test(formik.values.password)} readOnly />
                    Uma letra maiúscula
                </label>
            </div>
            <div className="mb-4 flex items-center">
                <label className='flex items-center text-sm'>
                    <input type="checkbox" checked={/[0-9]/.test(formik.values.password)} readOnly />
                    Um número
                </label>
            </div>
            <button
                type="submit"
                className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded transition duration-300 mt-12"
            >
                Continue
            </button>
        </form>
    );
};

export default AuthPasswordPage;