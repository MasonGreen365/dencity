import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-slate-300">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Dencity</a>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
            <input type="text" placeholder="Search by Address" className="input input-bordered w-24 md:w-auto" />
            </div>
            <ul className="menu menu-horizontal px-1">
            <li><a>About</a></li>
            <li>
                <details>
                <summary>
                    Explore
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a>Plans</a></li>
                    <li><a>Financing</a></li>
                </ul>
                </details>
            </li>
    </ul>
        </div>
    </div>
  )
}

export default Navbar