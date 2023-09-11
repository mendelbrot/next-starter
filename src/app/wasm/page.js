"use client";

import { useEffect, useState } from "react";
import init, { greet, fibonacci } from "@@/rust_lib";

export default function Wasm() {
    const [message, setMessage] = useState("");
    const [fib, setFib] = useState(0);

    useEffect(() => {
        const load = async () => {
            await init();
            setMessage(greet("Next.js and WebAssembly"));
            setFib(fibonacci(10));
        };
        load();
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            <p>The 10th Fibonacci number is: {fib}</p>
        </div>
    );
}
