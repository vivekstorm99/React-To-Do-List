const API = "https://stingray-app-axdpn.ondigitalocean.app/api/todo/add";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";


const AddTodo = () => {

    const cookies = new Cookies()
    const user_id = cookies.get('user_id')
    const navigate = useNavigate()
    const title = "Add Todo";
    const description = "Add new Todo here";
    const formSchema = yup.object({
        todo_title: yup.string().required("Todo Title  is required"),
        todo_description: yup.string().required("Todo Description is required"),
        user_id: yup.string().notRequired()
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const submitData = async (data) => {
        console.log(data)
        const { todo_title, todo_description, user_id } = data
        try {
            await axios.post(API, {
                todo_title,
                todo_description,
                user_id
            })
                .then(res => {
                    console.log(res)
                    navigate('/dashboard')
                })
                .catch(err => {
                    console.log(err)
                })
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(submitData)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Todo Title </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Todo Title"
                                className="input input-bordered"
                                {...register('todo_title')}
                            />
                            <p className="text-red-400">
                                {errors.todo_title?.message}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Todo Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="description"
                                className="input input-bordered"
                                {...register('todo_description')}
                            />
                            <p className="text-red-400">
                                {errors.todo_description?.message}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Todo Description</span>
                            </label>
                            <input
                                type="hidden"
                                value={user_id}
                                placeholder="description"
                                className="input input-bordered"
                                {...register('user_id')}
                            />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Todo </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;