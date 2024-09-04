import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function WorkoutList() {
  return (
    <div className="min-w-screen-md px-6 py-12">
      <CreateWorkout />
      <Workout />
      <Workout />
      <Workout />
      <Workout />
    </div>
  );
}

function CreateWorkout() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 w-fit rounded cursor-pointer">
        <ArrowLeftIcon className="size-4" />
        <p>(A) Treino de Perna</p>
      </div>
      <h1 className="text-[32px] font-black tracking-tight">
        Adicionar exercício
      </h1>
      <GenerateForm />
    </div>
  );
}

function GenerateForm() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <form className="max-w-screen-md" action="">
      <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 md:col-span-3 flex flex-col">
          <label className="mb-2 font-bold" htmlFor="name">
            Nome do exercício
          </label>
          <input
            className="px-2.5 py-2 border border-slate-200 rounded outline-none"
            type="text"
            placeholder="Ex: Supino Reto"
            name="name"
            id="name"
          />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <label className="mb-2 font-bold" htmlFor="series">
            Quantidade de séries
          </label>
          <input
            className="px-2.5 py-2 border border-slate-200 rounded outline-none"
            type="text"
            placeholder="Ex: 4"
            name="series"
            id="series"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-2 ">
            <label className="font-bold" htmlFor="min_reps">
              Número de repetições
            </label>
            <div className="flex gap-2">
              <p className="text-sm">Valor único</p>
              <div
                onClick={() => setIsSelected(!isSelected)}
                className={`h-fit cursor-pointer p-1 border border-slate-200 ${
                  isSelected ? "bg-black" : "bg-transparent border-slate-200"
                }  rounded-full`}
              >
                <div className="w-8">
                  <div
                    className={`transition-all w-3 h-3 bg-black rounded-full ${
                      isSelected ? "ml-5 bg-white" : "bg-black"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <input
              className="w-full px-2.5 py-2 border border-slate-200 rounded outline-none"
              type="text"
              placeholder="Ex: 8"
              name="min_reps"
              id="min_reps"
            />
            {!isSelected && (
              <>
                <span className="h-fit w-2 border border-slate-200" />
                <input
                  className="w-full px-2.5 py-2 border border-slate-200 rounded outline-none"
                  type="text"
                  placeholder="Ex: 12"
                  name="max_reps"
                  id="max_reps"
                />
              </>
            )}
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <label className="mb-2 font-bold" htmlFor="rest">
            Tempo de descanso (em segundos)
          </label>
          <input
            className="px-2.5 py-2 border border-slate-200 rounded outline-none"
            type="text"
            placeholder="Ex: 120"
            name="rest"
            id="rest"
          />
        </div>
        <div className="mt-6 justify-end col-span-full flex gap-4">
          <div className="px-2.5 py-2 rounded hover:bg-slate-100 text-slate-500 cursor-pointer">
            Cancelar
          </div>
          <div className="px-2.5 py-2 rounded font-bold bg-black text-white cursor-pointer">
            Adicionar Exercício
          </div>
        </div>
      </div>
    </form>
  );
}

function Workout() {
  return (
    <div className="p-3 border-b border-slate-200 last:border-none hover:bg-slate-50 cursor-pointer">
      <div className="flex justify-between gap-12">
        <div>
          <div className="mb-3">
            <p className="text-sm">Perna (Posterior de coxa)</p>
            <h1 className="text-2xl font-black tracking-tight">Mesa flexora</h1>
          </div>
          <div className="flex gap-3">
            <div className="px-1.5 py-1 rounded bg-slate-100">
              <span className="text-sm font-black tracking-tight">4</span>{" "}
              séries
            </div>
            <div className="px-1.5 py-1 rounded bg-slate-100">
              <span className="text-sm font-black tracking-tight">8 - 12</span>{" "}
              repetições
            </div>
            <div className="px-1.5 py-1 rounded bg-slate-100">
              <span className="text-sm font-black tracking-tight">1:30</span> de
              descanso
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex flex-col max-h-fit justify-center items-center bg-slate-100 rounded-xl hover:bg-slate-200 cursor-pointer">
          <p className="text-sm">Carga Atual</p>
          <p className="text-2xl">
            <span className="font-black tracking-tight">85</span>kg
          </p>
        </div>
      </div>
    </div>
  );
}
