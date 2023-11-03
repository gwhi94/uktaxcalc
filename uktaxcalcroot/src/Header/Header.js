export default function Header() {
    return (
        <div className="bg-slate-700">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 web-header bg-slate-700 flex items-left justify-center flex-col">
                <div className="flex items-left flex-col">
                    <h1 className="text-7xl text-left text-white">UK Tax Calculator</h1>
                    <p className="text-left text-stone-300 mt-15">Calculate your take home, tax paid and how any additional reductions affect your salary.</p>
                </div>
            </div>
        </div>
    )
}