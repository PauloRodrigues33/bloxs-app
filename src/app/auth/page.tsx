'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      nomeCompleto: '',
      cpf: '',
      email: '',
      telefone: '',
      codigoPais: '+55',
    },
    validationSchema: Yup.object({
      nomeCompleto: Yup.string()
        .required('Nome completo é obrigatório'),
      cpf: Yup.string()
        .required('CPF é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      telefone: Yup.string()
        .required('Telefone é obrigatório'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      <div className="flex flex-1 flex-col items-center justify-center p-6 text-white">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
          <h1 className="text-2xl font-medium mb-6">Bem vindo, crie sua conta</h1>
          
          <div className="mb-4">
            <input
              id="nomeCompleto"
              name="nomeCompleto"
              type="text"
              placeholder="Nome completo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nomeCompleto}
              className={`w-full px-4 py-2 border ${formik.touched.nomeCompleto && formik.errors.nomeCompleto ? 'border-red-600' : 'border-gray-600'} bg-transparent rounded focus:outline-none focus:border-yellow-500`}
            />
            {formik.touched.nomeCompleto && formik.errors.nomeCompleto ? (
              <div className="text-red-600 text-sm">{formik.errors.nomeCompleto}</div>
            ) : null}
          </div>
          
          <div className="mb-4">
            <InputMask
              mask="999.999.999-99"
              id="cpf"
              name="cpf"
              type="text"
              placeholder="CPF"
              maskChar={null}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpf}
              className={`w-full px-4 py-2 border ${formik.touched.cpf && formik.errors.cpf ? 'border-red-600' : 'border-gray-600'} bg-transparent rounded focus:outline-none focus:border-yellow-500`}
            />
            {formik.touched.cpf && formik.errors.cpf ? (
              <div className="text-red-600 text-sm">{formik.errors.cpf}</div>
            ) : null}
          </div>
          
          <div className="mb-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-600' : 'border-gray-600'} bg-transparent rounded focus:outline-none focus:border-yellow-500`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          
          <div className="flex mb-4">
            <select
              id="codigoPais"
              name="codigoPais"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.codigoPais}
              className="px-4 py-2 border border-gray-600 bg-transparent rounded-l focus:outline-none focus:border-yellow-500"
            >
              <option value="+55">+55</option>
              {/* Outras opções de código de país */}
            </select>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="Telefone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telefone}
              className={`flex-1 px-4 py-2 border ${formik.touched.telefone && formik.errors.telefone ? 'border-red-600' : 'border-gray-600'} bg-transparent rounded-r focus:outline-none focus:border-yellow-500`}
            />
          </div>
          {formik.touched.telefone && formik.errors.telefone ? (
            <div className="text-red-600 text-sm mb-4">{formik.errors.telefone}</div>
          ) : null}

          <p className="text-xs text-gray-400 mb-4">
            Ao continuar você está concordando com os <a href="#" className="text-yellow-500">Termos de Uso</a> e <a href="#" className="text-yellow-500">Política de Privacidade</a>
          </p>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded transition duration-300"
          >
            Continue
          </button>
        </form>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 hidden md:flex bg-gray-900 text-white">
        <div className="text-center">
          <img src="your-image-src-here" alt="Login illustration" className="mb-6" />
          <p className="mb-2">Lorem ipsum dolor sit amet adipiscing</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
