import { zodResolver } from "@hookform/resolvers/zod";
import silueta from "../assets/svg/silueta.svg";
import { useForm } from "react-hook-form";
import { userSchema } from "../validations/userSchema";
import { sileo } from "sileo";

export const SuggestPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: { ki: 0 },
  });

  const ki = watch("ki");

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="flex justify-center items-center gap-5">
        <h1 className="mt-5 text-center text-5xl font-clash font-black pb-5">
          Sugerencia de Personaje
        </h1>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Formulario
          </h2>
          <form
            onSubmit={handleSubmit(() => {
              sileo.success({
                title: "Datos enviados correctamente",
                description: "Gracias por su sugerencia",
              });
              reset();
            })}
            className="mt-5 bg-black/10 grid grid-cols-3 p-8 rounded-md text-white gap-3 backdrop-blur-xl shadow-sm shadow-white/20"
          >
            <div className="grid col-start-1 col-end-2 p-5">
              <img className="invert" src={silueta} alt="silueta" />
            </div>
            <div className="grid col-start-2 col-end-4 items-center p-5">
              <h1 className="font-bold text-3xl pl-2 text-center text-orange-500">
                Datos del remitente
              </h1>
              <div className="flex gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="mb-1 text-sm  text-white/80">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/40 rounded-md py-3 px-4 focus:border-orange-500"
                    placeholder="Ingrese su nombre"
                    id="name"
                    name="name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm  text-white/80"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black/40 rounded-md py-3 px-4 focus:border-orange-500"
                    placeholder="Ingrese su email"
                    id="email"
                    name="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <h1 className="font-bold text-3xl pl-2 text-center text-orange-500">
                Datos del personaje
              </h1>
              <div className="flex gap-5">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="nameCharacter"
                    className="mb-1 text-sm  text-white/80"
                  >
                    Nombre de personaje
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/40 rounded-md py-3 px-4 focus:border-orange-500"
                    placeholder="Ingrese su nombre"
                    id="nameCharacter"
                    name="nameCharacter"
                    {...register("nameCharacter")}
                  />
                  {errors.nameCharacter && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.nameCharacter.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="race" className="mb-1 text-sm  text-white/80">
                    Raza
                  </label>
                  <select
                    id="race"
                    name="race"
                    className="bg-black/50 rounded-md py-3 px-4 flex-2"
                    {...register("race")}
                  >
                    <option value="saiyan">Saiyan</option>
                    <option value="human">Human</option>
                  </select>
                  {errors.race && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.race.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="genre" className="mb-1 text-sm text-white/80">
                  Género
                </label>

                <div className="flex gap-2">
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="genre"
                      id="genre"
                      value="male"
                      className="peer hidden"
                      {...register("genre")}
                    />
                    <div className="bg-black/50 peer-checked:opacity-100 opacity-50  flex justify-center items-center py-3 rounded-md cursor-pointer select-none transition-opacity">
                      Masculino
                    </div>
                  </label>

                  <label className="flex-1">
                    <input
                      type="radio"
                      name="genre"
                      id="genre"
                      value="female"
                      className="peer hidden"
                      {...register("genre")}
                    />
                    <div className="bg-black/50 peer-checked:opacity-100 opacity-50  flex justify-center items-center py-3 rounded-md cursor-pointer select-none transition-opacity">
                      Femenino
                    </div>
                  </label>
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="genre"
                      id="genre"
                      value="other"
                      className="peer hidden"
                      {...register("genre")}
                    />
                    <div className="bg-black/50 peer-checked:opacity-100 opacity-50  flex justify-center items-center py-3 rounded-md cursor-pointer select-none transition-opacity">
                      Otro
                    </div>
                  </label>
                </div>
                {errors.genre && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.genre.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="ki" className="text-sm text-white/80">
                    Ki Base
                  </label>
                  <span className="text-orange-500 font-mono font-bold">
                    {Number(ki).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  id="ki"
                  min="0"
                  max="100000000"
                  step="1000"
                  {...register("ki", { valueAsNumber: true })}
                  className="w-full h-2 bg-black/40 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                {errors.ki && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.ki.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="desc" className="mb-1 text-sm  text-white/80">
                  Descripción del personaje
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  {...register("desc")}
                  className="bg-black/50 rounded-md py-3 px-4"
                  placeholder="Ingrese descripción del personaje ..."
                  rows={5}
                  cols={1}
                ></textarea>
                {errors.desc && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.desc.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="mt-2 p-4  rounded-2xl bg-white text-black hover:text-white hover:bg-orange-500 active:scale-95 transition-transform duration-200"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
