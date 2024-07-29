

export default function Login () {
    return (
        <div className="flex w-[50%] h-[70%] bg-slate-400 rounded-sm">
          <form className="form">
            <label className="label" htmlFor="email">
              <input className="input" placeholder="Email"></input>
            </label>
            <label className="label" htmlFor="password">
              <input className="input" placeholder="Contraseña"></input>
            </label>

            <button className="btn" type="submit">Registrarse</button>
          </form>
        </div>
    )
}