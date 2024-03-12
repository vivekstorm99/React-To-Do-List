import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navbar bg-red-400">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to='/dashboard'>
                    React Todo App
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between" to='/add-todo'>
                                Add Todo

                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li>
                            <Link to='/logout'>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation