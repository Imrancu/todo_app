import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-purple-950 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>ImranCode</Link>
            <Link className="bg-white rounded p-2" href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}