import { create } from "zustand";


export const useUserStore = create((set) => ({
  user: undefined,

  hydrateUser: async () => {
    try {
      const res = await fetch("/api/session");
      if (!res.ok) throw new Error("No user session");
      const data = await res.json();
      set({ user: data });
    } catch (err) {
      set({ user: null });
    }
  },

  login: async (email, password) => {
    const response = await fetch("/api/session/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.errors) {
      return data;
    } else {
      set({ user: data.user });
    }
  },

  logout: async () => {
    const response = await fetch("/api/session", {
      method: "DELETE",
    });

    const data = await response.json();
    if (data.errors) {
      return data;
    } else {
      set({ user: null });
    }
  },

  signup: async (email, password, username) => {
    const response = await fetch("/api/session/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });

    const data = await response.json();
    if (data.errors) {
      return data;
    } else {
      set({ user: data.user });
    }
  },
}));
