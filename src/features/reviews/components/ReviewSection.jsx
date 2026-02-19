import React from "react";
import { useReviews } from "../hooks/useReviews";

export const ReviewSection = ({ characterId }) => {
  const { data: reviews } = useReviews(characterId);

  return (
    <section class="border-t border-neutral-200 dark:border-neutral-800 pt-10">
      <div class="flex items-center gap-3 mb-8">
        <h3 class="text-2xl font-display font-black text-neutral-900 dark:text-white uppercase tracking-tight">
          Reseñas del personaje
        </h3>
        <div class="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
      </div>
      {/* <div
                class="bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-10">
                <h4 class="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Escribe una Reseña
                </h4>
                <form class="space-y-4">
                    <div class="flex items-center gap-2 mb-2">
                        <label class="text-sm text-neutral-500 mr-2">Rating:</label>
                        <div class="flex gap-1">
                            <span class="material-icons text-primary cursor-pointer">star</span>
                            <span class="material-icons text-primary cursor-pointer">star</span>
                            <span class="material-icons text-primary cursor-pointer">star</span>
                            <span class="material-icons text-primary cursor-pointer">star</span>
                            <span
                                class="material-icons text-neutral-300 dark:text-neutral-700 cursor-pointer">star</span>
                        </div>
                    </div>
                    <textarea
                        class="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary placeholder-neutral-500 min-h-25"
                        placeholder="Share your thoughts about this character..."></textarea>
                    <div class="flex justify-end">
                        <button
                            class="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-primary/20"
                            type="submit">
                            Post Review
                        </button>
                    </div>
                </form>
            </div> */}
      <div class="space-y-6">
        {reviews?.map((review) => (
          <div class="group relative bg-white dark:bg-neutral-800/40 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary/30 transition-all">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                  <span class="material-icons text-neutral-400">person</span>
                </div>
                <div>
                  <h5 class="font-bold text-neutral-900 dark:text-neutral-100">
                    VegetaPrince_99
                  </h5>
                  <div class="flex items-center gap-1 mt-0.5">
                    <div class="flex">
                      <span class="material-icons text-primary text-xs">
                        star
                      </span>
                      <span class="material-icons text-primary text-xs">
                        star
                      </span>
                      <span class="material-icons text-primary text-xs">
                        star
                      </span>
                      <span class="material-icons text-primary text-xs">
                        star
                      </span>
                      <span class="material-icons text-primary text-xs">
                        star
                      </span>
                    </div>
                    <span class="text-[10px] text-neutral-500 uppercase ml-2 tracking-tighter">
                      2 days ago
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="p-2 text-neutral-400 hover:text-primary transition-colors">
                  <span class="material-icons text-sm">edit</span>
                </button>
                <button class="p-2 text-neutral-400 hover:text-red-500 transition-colors">
                  <span class="material-icons text-sm">delete</span>
                </button>
              </div>
            </div>
            <p class="mt-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              The ultimate warrior. Kakarot's UI form is absolutely broken in
              the meta. Definitely the core of my team.
            </p>
          </div>
        ))}
        {/* <div
                    class="group relative bg-white dark:bg-neutral-800/40 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary/30 transition-all">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                                <span class="material-icons text-neutral-400">person</span>
                            </div>
                            <div>
                                <h5 class="font-bold text-neutral-900 dark:text-neutral-100">VegetaPrince_99
                                </h5>
                                <div class="flex items-center gap-1 mt-0.5">
                                    <div class="flex">
                                        <span class="material-icons text-primary text-xs">star</span>
                                        <span class="material-icons text-primary text-xs">star</span>
                                        <span class="material-icons text-primary text-xs">star</span>
                                        <span class="material-icons text-primary text-xs">star</span>
                                        <span class="material-icons text-primary text-xs">star</span>
                                    </div>
                                    <span class="text-[10px] text-neutral-500 uppercase ml-2 tracking-tighter">2
                                        days ago</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="p-2 text-neutral-400 hover:text-primary transition-colors">
                                <span class="material-icons text-sm">edit</span>
                            </button>
                            <button class="p-2 text-neutral-400 hover:text-red-500 transition-colors">
                                <span class="material-icons text-sm">delete</span>
                            </button>
                        </div>
                    </div>
                    <p class="mt-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        The ultimate warrior. Kakarot's UI form is absolutely broken in the meta. Definitely the
                        core of my team.
                    </p>
                </div> */}
      </div>
    </section>
  );
};
