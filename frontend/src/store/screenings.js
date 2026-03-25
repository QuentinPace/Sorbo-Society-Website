import { create } from "zustand";


export const useScreeningsStore = create((set) => ({
  finished: undefined,
  ongoing: undefined,
  readyForReview: undefined,

  hydrateUserScreenings: async () => {
    try {
      const res = await fetch("/api/screenings/current");
      if (!res.ok) throw new Error("Error fetching current screenings");
      const data = await res.json();
      set({
        finished: data.Screenings.finished,
        ongoing: data.Screenings.ongoing,
        readyForReview: data.Screenings.readyForReview,
      });
    } catch (err) {
      console.error(err);
    }
  },
}));
