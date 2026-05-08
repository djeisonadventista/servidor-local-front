"use client"

import { useState } from "react"
import { Hammer, Zap, Paintbrush, BrushCleaning, Send, Menu, User } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import { Input } from "@/components/ui/input"


export const PublicServiceRequest = () => {

    const [description, setDescription] = useState("")

    const services = [
        {
            id: 1,
            name: "Plumbing",
            provider: "John's Plumbing (★★★★★)",
            urgent: false,
            checked: true,
            icon: <Hammer className="text-[#1E73EA] w-5 h-5" />,
            bg: "bg-blue-100"
        },
        {
            id: 2,
            name: "Electrical",
            provider: "",
            urgent: false,
            checked: false,
            icon: <Zap className="text-[#D89B00] w-5 h-5" />,
            bg: "bg-yellow-100"
        },
        {
            id: 3,
            name: "Carpentry",
            provider: "Woodworks Pros (★★★★☆)",
            urgent: true,
            checked: true,
            icon: <Paintbrush className="text-[#E28B00] w-5 h-5" />,
            bg: "bg-orange-100"
        },
        {
            id: 4,
            name: "Cleaning",
            provider: "",
            urgent: false,
            checked: false,
            icon: <BrushCleaning className="text-[#00A99D] w-5 h-5" />,
            bg: "bg-cyan-100"
        }
    ]

    return (
        <div className="min-h-screen bg-[#F5F7FA]">

            {/* HEADER */}
            <header className="w-full bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <Hammer className="text-[#1E73EA] w-7 h-7" />
                    <span className="text-3xl font-bold text-[#0E1525]">
                        HandyPro
                    </span>
                </div>

                <nav className="flex items-center gap-10">
                    <span className="text-[#52607A] font-medium cursor-pointer">
                        Services
                    </span>

                    <span className="text-[#52607A] font-medium cursor-pointer">
                        Providers
                    </span>

                    <span className="text-[#52607A] font-medium cursor-pointer">
                        My Requests
                    </span>

                    <div className="border-2 border-[#1E73EA] rounded-full p-2">
                        <User className="text-[#52607A] w-6 h-6" />
                    </div>
                </nav>
            </header>

            {/* MAIN */}
            <main className="max-w-5xl mx-auto py-16 px-5">

                {/* TITLE */}
                <div className="flex flex-col gap-3 mb-10">
                    <h1 className="text-5xl font-bold text-[#0E1525]">
                        Public Service Request & Provider Selection
                    </h1>

                    <p className="text-xl text-[#6B7A99]">
                        Select the services you need, choose available providers, and submit your request for a quotation.
                    </p>
                </div>

                {/* TABLE */}
                <Card className="rounded-2xl border border-gray-200 shadow-none overflow-hidden">

                    <CardContent className="p-0">

                        {/* HEADER */}
                        <div className="grid grid-cols-4 bg-[#F8FAFC] border-b border-gray-200 px-6 py-5">

                            <span className="font-bold text-[#23304A] text-lg">
                                SELECT
                            </span>

                            <span className="font-bold text-[#23304A] text-lg">
                                SERVICE NAME
                            </span>

                            <span className="font-bold text-[#23304A] text-lg">
                                SERVICE PROVIDER
                            </span>

                            <span className="font-bold text-[#23304A] text-lg text-center">
                                URGENT?
                            </span>
                        </div>

                        {/* ROWS */}
                        {services.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-4 items-center border-b border-gray-200 px-6 py-5"
                            >

                                {/* CHECKBOX */}
                                <div>
                                    <Checkbox checked={item.checked} />
                                </div>

                                {/* SERVICE */}
                                <div className="flex items-center gap-4">

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
                                        {item.icon}
                                    </div>

                                    <span className="text-2xl text-[#0E1525]">
                                        {item.name}
                                    </span>
                                </div>

                                {/* PROVIDER */}
                                <div>
                                    <Input
                                        value={item.provider}
                                        placeholder="Select a provider..."
                                        className="h-14 text-lg bg-white"
                                        readOnly
                                    />
                                </div>

                                {/* URGENT */}
                                <div className="flex justify-center">
                                    <Checkbox checked={item.urgent} />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* DESCRIPTION */}
                <div className="mt-14 flex flex-col gap-5">

                    <div className="flex items-center gap-3">
                        <Menu className="w-5 h-5 text-[#52607A]" />

                        <span className="text-2xl font-bold text-[#0E1525]">
                            Service Description & Notes
                        </span>
                    </div>

                    <textarea
                        placeholder="Please describe the issue in detail. For example: 'The kitchen sink is leaking continuously from the U-bend' or 'Need two custom wooden shelves built for the living room.'"
                        className="min-h-[180px] resize-none text-lg p-5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <span className="text-[#6B7A99] flex items-center gap-2 text-sm">
                        ⓘ Detailed descriptions help providers give more accurate quotes.
                    </span>
                </div>

                {/* BUTTON */}
                <div className="flex justify-end mt-20">

                    <button
                        className="bg-[#0D8CEB] hover:bg-[#0B7ED4] transition-all rounded-2xl px-12 py-5 text-white font-bold text-2xl flex items-center gap-3 shadow-lg shadow-blue-100"
                    >
                        <Send className="w-6 h-6 fill-white" />
                        Request Quotation
                    </button>
                </div>
            </main>
        </div>
    )
}