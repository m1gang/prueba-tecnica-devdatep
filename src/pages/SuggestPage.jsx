import { zodResolver } from "@hookform/resolvers/zod";
import silueta from "../assets/svg/silueta.svg";
import { useForm } from "react-hook-form";
import { userSchema } from "../validations/userSchema";
import { sileo } from "sileo";
import { CheckSymbol } from "../components/CheckSymbol";

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

    // eslint-disable-next-line react-hooks/incompatible-library
    const ki = watch("ki");

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <div className="flex flex-col justify-center items-center ">
                <h1 className="mt-5 text-center text-5xl font-clash font-black ">
                    Sugerencia de Personaje
                </h1>
                <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-primary text-xs font-black tracking-widest uppercase rounded-full mb-6">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    Contribución de la comunidad
                </span>
            </div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        Formulario
                    </h2>

                    <div className="glass-card rounded-4xl p-8 md:p-14 mt-5  bg-black/10 text-white gap-3 backdrop-blur-xl shadow-sm shadow-white/20">
                        <form
                            onSubmit={handleSubmit(() => {
                                sileo.success({
                                    title: "Datos enviados correctamente",
                                    description: "Gracias por su sugerencia",
                                    fill: "white",

                                    styles: {
                                        title: "text-black!",
                                        description: "text-black/75!",
                                        badge: "bg-green-500/10!",
                                        button: "bg-green-200/10! hover:bg-green-500/15!",
                                    },
                                });
                                reset();
                            })}
                            className="space-y-10 grid grid-cols-3"
                        >
                            <div className="grid col-start-1 col-end-2 p-15">
                                <img className="fill-orange-500" src={silueta} alt="silueta" />
                            </div>
                            <div className="grid col-start-2 col-end-4 items-center p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-2">
                                            <span className="material-symbols-outlined text-orange-500 text-sm">
                                                person
                                            </span>
                                            Nombre del personaje
                                        </label>
                                        <input
                                            {...register("nameCharacter")}
                                            className="w-full bg-[#2C1E12]/40 border-white/5 rounded-xl p-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-white/20 font-medium"
                                            placeholder="Ingresa nombre del personaje..."
                                            type="text"
                                        />
                                        {errors.nameCharacter && (
                                            <span className="text-red-500 text-xs mt-1">
                                                {errors.nameCharacter.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-2">
                                            <span className="material-symbols-outlined text-orange-500 text-sm">
                                                diversity_3
                                            </span>
                                            Raza Guerrera
                                        </label>
                                        <div className="relative">
                                            <select
                                                {...register("race")}
                                                className="w-full appearance-none bg-[#2C1E12]/40 border-white/5 rounded-xl p-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium"
                                            >
                                                <option className="bg-[#1A120B]" value="saiyan">
                                                    Saiyan
                                                </option>
                                                <option className="bg-[#1A120B]" value="namekian">
                                                    Namekian
                                                </option>
                                                <option className="bg-[#1A120B]" value="android">
                                                    Android
                                                </option>
                                                <option className="bg-[#1A120B]" value="majin">
                                                    Majin
                                                </option>
                                                <option className="bg-[#1A120B]" value="frieza">
                                                    Frieza Race
                                                </option>
                                                <option className="bg-[#1A120B]" value="human">
                                                    Human
                                                </option>
                                                <option className="bg-[#1A120B]" value="deity">
                                                    Angel / Deity
                                                </option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                                expand_more
                                            </span>
                                        </div>
                                        {errors.race && (
                                            <span className="text-red-500 text-xs mt-1">
                                                {errors.race.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-500 text-sm">
                                            wc
                                        </span>
                                        Género
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        <label className="relative flex-1 min-w-35 cursor-pointer group">
                                            <input
                                                {...register("genre")}
                                                className="peer sr-only"
                                                name="genre"
                                                type="radio"
                                                value="male"
                                            />
                                            <div className="w-full p-4 text-center rounded-xl border border-white/5 bg-[#2C1E12]/30 text-white/50 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white peer-checked:font-bold transition-all hover:bg-white/5">
                                                Masculino
                                            </div>
                                        </label>
                                        <label className="relative flex-1 min-w-35 cursor-pointer group">
                                            <input
                                                {...register("genre")}
                                                className="peer sr-only"
                                                name="genre"
                                                type="radio"
                                                value="female"
                                            />
                                            <div className="w-full p-4 text-center rounded-xl border border-white/5 bg-[#2C1E12]/30 text-white/50 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white peer-checked:font-bold transition-all hover:bg-white/5">
                                                Femenino
                                            </div>
                                        </label>
                                        <label className="relative flex-1 min-w-35 cursor-pointer group">
                                            <input
                                                {...register("genre")}
                                                className="peer sr-only"
                                                name="genre"
                                                type="radio"
                                                value="other"
                                            />
                                            <div className="w-full p-4 text-center rounded-xl border border-white/5 bg-[#2C1E12]/30 text-white/50 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white peer-checked:font-bold transition-all hover:bg-white/5">
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
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-2">
                                            <span className="material-symbols-outlined text-orange-500 text-sm">
                                                bolt
                                            </span>
                                            Nivel de ki estimado
                                        </label>
                                        <span className="text-primary font-black text-2xl italic tracking-tighter drop-shadow-[0_0_10px_rgba(242,127,13,0.3)]">
                                            {Number(ki).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="relative py-2">
                                        <input
                                            {...register("ki", { valueAsNumber: true })}
                                            className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
                                            max="100000000"
                                            min="0"
                                            step="1000"
                                            type="range"
                                        />
                                        <div className="flex justify-between mt-3 text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">
                                            <span>Civilian</span>
                                            <span>Legendary Warrior</span>
                                        </div>
                                        {errors.ki && (
                                            <span className="text-red-500 text-xs mt-1">
                                                {errors.ki.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-500 text-sm">
                                            history_edu
                                        </span>
                                        Descripcion del personaje
                                    </label>
                                    <textarea
                                        {...register("desc")}
                                        className="w-full bg-[#2C1E12]/40 border-white/5 rounded-xl p-5 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-white/20 resize-none font-medium leading-relaxed"
                                        placeholder="Chronicle their origins, techniques, and most notable battles..."
                                        rows="6"
                                    ></textarea>
                                    {errors.desc && (
                                        <span className="text-red-500 text-xs mt-1">
                                            {errors.desc.message}
                                        </span>
                                    )}
                                </div>

                                <div className="pt-8 flex flex-col sm:flex-row gap-5">
                                    <button
                                        onClick={() => reset()}
                                        className="flex-1 order-2 sm:order-1 px-8 py-5 rounded-xl bg-white/5 text-white/70 font-bold hover:bg-white/10 transition-all border border-white/5 uppercase tracking-widest text-xs"
                                        type="button"
                                    >
                                        Reiniciar
                                    </button>
                                    <button
                                        className="flex-2 order-1 sm:order-2 px-8 py-5 rounded-xl bg-primary text-white font-black uppercase tracking-[0.15em] hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(242,127,13,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                                        type="submit"
                                    >
                                        <span>Enviar personaje</span>
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                            send
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main >
        </div >
    );
};
