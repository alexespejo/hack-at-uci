import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="navbar bg-base-100">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
            <details>
            <summary>
                Parent
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
            </ul>
            </details>
        </li>
        </ul>
    </div>
    </div>

    <button className="btn">Hello World</button>
    </main>
  );
}
