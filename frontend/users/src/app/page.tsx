export default function Login() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-slate-700">
        <div className="w-[50%] h-[70%] bg-black">
          <form className="flex flex-col items-center">
            <label htmlFor="name">
              <input></input>
            </label>
            <label htmlFor="subname">
              <input></input>
            </label>
            <label htmlFor="phone">
              <input></input>
            </label>
            <label htmlFor="location">
              <input></input>
            </label>
            <label htmlFor="image">
              <input></input>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}
