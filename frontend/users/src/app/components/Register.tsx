"use client"

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  name: string;
  password: string;
  email: string;
  image: FileList;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col w-[50%] h-[90%] bg-slate-400 rounded-sm items-center justify-center">
      <h1 className="p-10">Registro de usuario</h1>
      <form
        className="form flex flex-col w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="label w-3/4 mb-4" htmlFor="name">
          <input
            className="input w-full p-1 rounded"
            type="text"
            placeholder="Nombre completo"
            {...register("name", {required:true, minLength:2} )}
          />
          {errors.name? <p role="alert">Nombre no valido</p> : ""}
        </label>
        <label className="label w-3/4 mb-4" htmlFor="email">
          <input
            className="input w-full p-1 rounded"
            type="email"
            placeholder="Email"
            {...register("email", {required:true})}
          />

          {errors.email? <p role="alert">Email no valido</p> : ""}
        </label>
        <label className="label w-3/4 mb-4" htmlFor="password">
          <input
            className="input w-full p-1 rounded"
            type="password"
            placeholder="Contraseña"
            {...register("password", {required: true, minLength:4})}
          />
          {errors.password? <p role="alert">Ingrese una contraseña</p> : ""}
        </label>
        <label className="label w-3/4 mb-4 items-center text-center p-1" htmlFor="image">
          <h5 className="mb-2">Foto de perfil</h5>
          <input
            className="input w-full p-2 rounded"
            type="file"
            {...register("image")}
          />
        </label>
        <button
          className="btn w-3/4 p-2 rounded bg-blue-500 text-white"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
