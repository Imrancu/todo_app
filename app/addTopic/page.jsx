export default function AddTopic() {
    return <form className="flex flex-col gap-3">
        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" />
        <button className="bg-purple-950 font-bold text-white py-2 px-5 w-fit rounded">Add Topic</button>

    </form>
}