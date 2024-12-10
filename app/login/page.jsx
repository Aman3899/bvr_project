"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';


const Page = () => {

    const [ isSent, setIsSent ] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let router = useRouter();

    const getLoginCredentials = async (data) => {

        // const response = await fetch('/api/sendmail', { method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({data}),
        // });

        // const res = await response.json();
        // setIsSent(true);

        console.log(data);

        if ( data.email === "admin@gmail.com" && data.password === "admin123" ) {
            console.log("Successfully Logged In!");
            router.push("/home")
        }
    };

    return (
        
        <div className='flex justify-center items-center h-screen bg-white'>
            
            <div className='text-center border-2 border-black rounded-lg px-16 max-sm:px-2'>
                <h1 className='text-4xl font-bold py-10'>DealBank</h1>
                <h2 className='text-xl pt-10 max-sm:pt-5'>Welcome Back</h2>
                <p className='text-sm text-gray-500 py-5 max-sm:py-3'>Please enter your email id and password to Sign in</p>

                <form action="" onSubmit={handleSubmit(getLoginCredentials)} className="flex flex-col items-center space-y-2">
                    <input
                        {...register("email", {required: true})}
                        type="email" 
                        placeholder="✉️ Email ID" 
                        className="border-2 border-blue-600 rounded-xl p-2 w-80"
                    />
                    
                    <input
                        {...register("password", { required: true, minLength: {value: 8, message: "Password should contains atleast 8 Characters!"}, maxLength: {value: 50, message: "Password can't be long than 50 characters"} })}
                        type="password"
                        placeholder="🔒 Password" 
                        className="border-2 border-blue-600 rounded-xl p-2 w-80"
                    />
                    {errors.password && <div className='text-xs text-red-500'>{errors.password.message}</div>}

                    <Link href="/forgetpassword" className="text-blue-500 text-sm hover:underline">Forgot Password?</Link>

                    <div className='py-16 max-sm:py-8'>
                        <button 
                            type="submit" 
                            className=" py-2 rounded-full text-blue-600 border-4 border-blue-600 px-16 
                            hover:bg-blue-600 hover:text-white" 
                        >
                            Sign in
                        </button>

                        <div className='py-6'>
                            <p className='text-sm text-gray-500 pt-5'>Don&apos;t have a account?</p>
                            <Link href="/signup" className="text-blue-500 text-sm hover:underline">SignUp</Link>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;