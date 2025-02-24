"use client";
import React from "react";

const LoginPage = () => {
  return (
    <div className="h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-sm bg-base-100 rounded-md shadow-md p-8 border border-accent/20 mx-4">
        <h2 className="text-2xl font-bold text-neutral mb-4 text-center">
          Welcome Back to TalkSpace
        </h2>

        <form className="space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="hello@talkspace.com"
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
              className="input input-bordered w-full h-10 bg-base-100 focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="text-right text-sm text-neutral/80">
            <a
              href="/forgot-password"
              className="text-primary hover:text-primary-focus"
            >
              Forgot Password?
            </a>
          </div>

          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary w-full text-base-100 hover:bg-primary-focus"
            >
              Login
            </button>
          </div>

          <div className="text-center text-neutral/80 mt-4">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="text-primary hover:text-primary-focus"
            >
              Register here
            </a>
            {/* <div className="divider text-neutral/50">OR</div>
            <button
              type="button"
              className="btn btn-outline w-full hover:bg-base-200"
            >
              Continue with Google
            </button>
            <button
              type="button"
              className="btn btn-outline w-full hover:bg-base-200 mt-2"
            >
              Continue with GitHub
            </button> */}
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

export default LoginPage;


