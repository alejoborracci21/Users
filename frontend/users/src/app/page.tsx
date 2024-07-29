export default function Login() {
  return (
    <main className="h-[100vh]">
      <div className="flex flex-col items-center justify-center w-full h-full bg-slate-700">
        <div className="flex w-[50%] h-[70%] bg-black">
          <form className="form">
            <label className="label" htmlFor="name">
              <input className="input" placeholder="Ingrese su nombre"></input>
            </label>
            <label className="label" htmlFor="subname">
              <input className="input" placeholder="Ingrese su apellido"></input>
            </label>
            <label className="label" htmlFor="phone">
              <input className="input" placeholder="Ingrese su numero telefonico"></input>
            </label>
            <label className="label" htmlFor="location">
              <input className="input" placeholder="Ingrese su localizacion"></input>
            </label>
            <label className="label" htmlFor="image">
              <input className="input" placeholder="Ingrese su imagen"></input>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}
