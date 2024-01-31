"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import LoadingDots from "./loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          signIn("credentials", {
            redirect: false,
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
            // @ts-ignore
          }).then(async ({ error }) => {
            if (error) {
              setLoading(false);
              toast.error(error);
            } else {
              toast.success("Login bem sucedido! Redirecionando...");
              setTimeout(async () => {
                const session = await getSession();
                if (session) {
                  window.location.href = "/";
                } else {
                  router.refresh();
                }
              }, 500);
            }
          });
        } else {
          fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: e.currentTarget.name.value,
              email: e.currentTarget.username.value,
              password: e.currentTarget.password.value,
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success("Conta criada! Redirecionando para o login...");
              setTimeout(() => {
                router.push("/login");
              }, 500);
            } else {
              const text = await res.text();
              try {
                const { error } = JSON.parse(text);
                toast.error(error);
              } catch {
                toast.error("Ocorreu um erro");
              }
            }
          });
        }
      }}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      {type === "register" && (
        <div>
          <label
            htmlFor="name"
            className="block text-xs text-gray-600 uppercase"
          >
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Insira seu nome"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
      )}
      <div>
        <label
          htmlFor="username"
          className="block text-xs text-gray-600 uppercase"
        >
          Email ou Nome
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Insira seu email ou nome"
          autoComplete="username"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Insira sua senha"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>{type === "login" ? "Sign In" : "Sign Up"}</p>
        )}
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
            Cadastre-se
          </Link>{" "}
          aqui.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Já tem uma conta? Faça{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Login
          </Link>{" "}
          aqui.
        </p>
      )}
    </form>
  );
}
