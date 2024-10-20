import Dashboard from "./sections/dashboard";
import Form from "./sections/form";

export default function App() {
    return (
        <main className='flex flex-col h-full justify-center gap-y-24 mt-5 mb-9'>
            <Form />
            <Dashboard />
        </main>
    );
}
