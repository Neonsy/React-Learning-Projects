import Dashboard from "./sections/dashboard";
import Form from "./sections/form";

export default function App() {
    return (
        <main className='flex flex-col gap-y-5 mt-5 mb-9'>
            <Form />
            <Dashboard />
        </main>
    );
}
