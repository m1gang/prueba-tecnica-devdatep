import React from 'react'

export const SuggestPage = () => {
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
                    <form className="mt-5 bg-black/10 flex flex-col p-8 rounded-md text-white gap-3 backdrop-blur-xl shadow-sm shadow-white/20">
                        <h1 className="font-bold text-3xl pl-2 text-center">Datos del remitente</h1>
                        <input type="text" className="bg-black/50 rounded-md py-2 px-4" placeholder="Ingrese su nombre" />
                        <input type="email" className="bg-black/50 rounded-md py-2 px-4" placeholder="Ingrese su email" />
                        <h1 className="font-bold text-3xl pl-2 text-center">Datos del personaje</h1>

                        <input type="text" className="bg-black/50 rounded-md py-2 px-4" placeholder="Ingrese el nombre del personaje" />
                        <input type="number" className="bg-black/50 rounded-md py-2 px-4" placeholder="0,1,2,3" />
                        <div className="flex gap-3">
                            <div className="flex flex-2 flex-col">
                                <label className="mb-1 text-sm  text-white/80">Seleccione su país:</label>
                                <select id="pais" className="bg-black/50 rounded-md py-2 px-4 flex-2">
                                    <option value="">country</option>
                                    <optgroup label="America">
                                        <option value="peru">Perú</option>
                                        <option value="uruguay">Uruguay</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="brasil">Brasil</option>
                                    </optgroup>
                                    <optgroup label="Europe">
                                        <option value='españa'>España</option>
                                        <option value='portugal'>Portugal</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="mb-1 text-sm text-white/80">Género:</label>

                                <div className="flex gap-2">
                                    <label className="flex-1">
                                        <input type="radio" name="genre" value="M" className="peer hidden" />
                                        <div className="bg-black/50 peer-checked:opacity-100 opacity-50  flex justify-center items-center py-2 rounded-md cursor-pointer select-none transition-opacity">
                                            Masculino
                                        </div>
                                    </label>

                                    <label className="flex-1">
                                        <input type="radio" name="genre" value="F" className="peer hidden" />
                                        <div className="bg-black/50 peer-checked:opacity-100 opacity-50  flex justify-center items-center py-2 rounded-md cursor-pointer select-none transition-opacity">
                                            Femenino
                                        </div>
                                    </label>
                                    <label className="flex-1">
                                        <input type="radio" name="genre" value="F" className="peer hidden" />
                                        <div className="bg-black/50 peer-checked:opacity-100 opacity-50  flex justify-center items-center py-2 rounded-md cursor-pointer select-none transition-opacity">
                                            Otro
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">

                            {/* Checkbox 1 */}
                            <label className="flex items-center gap-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    className="peer hidden"
                                />

                                {/* Caja del checkbox */}
                                <div className="w-5 h-5 rounded-md bg-black/50 opacity-50 peer-checked:opacity-100 flex justify-center items-center transition-all border border-white/20 peer-checked:border-white">

                                    {/* Icono check → aparece solo cuando está activo */}
                                    <svg
                                        className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12.5l4 4L19 7" />
                                    </svg>
                                </div>

                                {/* Texto → baja opacidad cuando no está activo */}
                                <span className="text-white opacity-50 peer-checked:opacity-100 transition-opacity">
                                    Enviar emails de información
                                </span>
                            </label>

                            {/* Checkbox 2 */}
                            <label className="flex items-center gap-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    className="peer hidden"
                                />

                                {/* Caja del checkbox */}
                                <div className="w-5 h-5 rounded-md bg-black/50 opacity-50 peer-checked:opacity-100 flex justify-center items-center transition-all border border-white/20 peer-checked:border-white">

                                    {/* Icono check */}
                                    <svg
                                        className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12.5l4 4L19 7" />
                                    </svg>
                                </div>

                                <span className="text-white opacity-50 peer-checked:opacity-100 transition-opacity">
                                    Acepta términos y condiciones
                                </span>
                            </label>

                        </div>

                        <textarea name="comment" id="comment" className="bg-black/50 rounded-md py-2 px-4"
                            placeholder="Ingrese descripción del personaje ..."
                            rows={4} cols={1}
                        >
                        </textarea>
                        <button
                            type="submit"
                            className="mt-2 p-4 w-100 rounded-2xl bg-white text-black hover:text-white hover:bg-orange-500 active:scale-95 transition-transform duration-200"
                        >
                            Enviar
                        </button>
                    </form >
                </div>



            </main>
        </div>
    )
}
