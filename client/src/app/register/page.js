"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const RegisterPage = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <div className="container flex items-center justify-center">
      <div className="w-full max-w-sm bg-base-100 rounded-md shadow-md p-8 border border-accent/20 mx-4">
        <h2 className="text-2xl font-bold text-neutral mb-4 text-center">
          Join TalkSpace
        </h2>

        <form className="space-y-5" onSubmit={registerUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, name: e.target.value })
              }
              className="input input-bordered h-10 w-full bg-base-100 focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="hello@talkspace.com"
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, email: e.target.value })
              }
              className="input input-bordered w-full h-10 bg-base-100 focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) =>
                updateRegisterInfo({
                  ...registerInfo,
                  password: e.target.value,
                })
              }
              className="input input-bordered w-full h-10 bg-base-100 focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary w-full text-base-100 hover:bg-primary-focus"
            >
              {isRegisterLoading ? "Loading..." : "Create account"}
            </button>
            <div>
              {registerError?.error && (
                <p className="text-red-500 text-sm">{registerError?.message}</p>
              )}
            </div>
          </div>

          <div className="text-center text-neutral/80 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:text-primary-focus">
              Login here
            </a>
          </div>
        </form>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full bg-primary/10 -top-32 -left-32"
          aria-hidden="true"
        />
        <div
          className="absolute w-96 h-96 rounded-full bg-secondary/10 -bottom-48 -right-48"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default RegisterPage;