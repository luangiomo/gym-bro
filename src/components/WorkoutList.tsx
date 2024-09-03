export default function WorkoutList() {
  return (
    <div className="min-w-[640px] px-6 py-12">
      <Workout />
      <Workout />
      <Workout />
      <Workout />
    </div>
  );
}

function Workout() {
  return (
    <div className="py-3 border-b border-slate-200 last:border-none hover:bg-slate-50 cursor-pointer">
      <div className="flex justify-between gap-12">
        <div>
          <div className="mb-3">
            <p className="text-xs">Perna (Posterior de coxa)</p>
            <h1 className="text-2xl font-black tracking-tight">Mesa flexora</h1>
          </div>
          <div className="flex gap-3">
            <div className="px-1.5 py-1 rounded bg-slate-100">
              <span className="font-black tracking-tight">4</span> séries
            </div>
            <div className="px-1.5 py-1 rounded bg-slate-100">
              <span className="font-black tracking-tight">8 - 12</span>{" "}
              repetições
            </div>
            <div className="px-1.5 py-1 rounded bg-slate-100">
              <span className="font-black tracking-tight">1:30</span> de
              descanso
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex flex-col max-h-fit justify-center items-center bg-slate-100 rounded-xl hover:bg-slate-200 cursor-pointer">
          <p className="text-xs">Carga Atual</p>
          <p className="text-2xl">
            <span className="font-black tracking-tight">85</span>kg
          </p>
        </div>
      </div>
    </div>
  );
}
