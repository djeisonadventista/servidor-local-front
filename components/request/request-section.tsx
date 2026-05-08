"use client"

import { useState } from "react"
import {
    Hammer,
    Zap,
    Paintbrush,
    BrushCleaning,
    Send,
    Menu
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const RequestSection = () => {

    const [description, setDescription] = useState("")

    const [services, setServices] = useState([
        {
            id: 1,
            name: "Plumbing",
            provider: "",
            urgent: false,
            checked: false,
            icon: <Hammer className="text-[#1E73EA] w-5 h-5" />,
            bg: "bg-blue-100",
            providers: [
                "John's Plumbing (★★★★☆)",
                "PipeFix Experts"
            ]
        },
        {
            id: 2,
            name: "Electrical",
            provider: "",
            urgent: false,
            checked: false,
            icon: <Zap className="text-[#D89B00] w-5 h-5" />,
            bg: "bg-yellow-100",
            providers: [
                "Electric Pro Services",
                "Volt Masters"
            ]
        },
        {
            id: 3,
            name: "Carpentry",
            provider: "",
            urgent: false,
            checked: false,
            icon: <Paintbrush className="text-[#E28B00] w-5 h-5" />,
            bg: "bg-orange-100",
            providers: [
                "Carpenter's Delight",
                "WoodCraft Masters"
            ]
        },
        {
            id: 4,
            name: "Cleaning",
            provider: "",
            urgent: false,
            checked: false,
            icon: <BrushCleaning className="text-[#00A99D] w-5 h-5" />,
            bg: "bg-cyan-100",
            providers: [
                "Clean Plus",
                "Sparkle Services"
            ]
        }
    ])

    const toggleChecked = (id: number) => {
        setServices(prev =>
            prev.map(service =>
                service.id === id
                    ? { ...service, checked: !service.checked }
                    : service
            )
        )
    }

    const toggleUrgent = (id: number) => {
        setServices(prev =>
            prev.map(service =>
                service.id === id
                    ? { ...service, urgent: !service.urgent }
                    : service
            )
        )
    }

    const handleProviderChange = (id: number, value: string) => {
        setServices(prev =>
            prev.map(service =>
                service.id === id
                    ? { ...service, provider: value }
                    : service
            )
        )
    }

    return (
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

                    {/* TABLE HEADER */}
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

                    {/* TABLE ROWS */}
                    {services.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-4 items-center border-b border-gray-200 px-6 py-5"
                        >

                            {/* CHECKBOX */}
                            <div>
                                <Checkbox
                                    checked={item.checked}
                                    onCheckedChange={() => toggleChecked(item.id)}
                                />
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
                                <Select
                                    value={item.provider}
                                    onValueChange={(value) =>
                                        handleProviderChange(item.id, value)
                                    }
                                >

                                    <SelectTrigger className="h-14 text-lg bg-white">

                                        <SelectValue placeholder="Select a provider..." />

                                    </SelectTrigger>

                                    <SelectContent>
                                        {item.providers.map((p) => (
                                            <SelectItem key={p} value={p}>
                                                {p}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>

                                </Select>
                            </div>

                            {/* URGENT */}
                            <div className="flex justify-center">
                                <Checkbox
                                    checked={item.urgent}
                                    onCheckedChange={() => toggleUrgent(item.id)}
                                />
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

                <Textarea
                    placeholder="Please describe the issue in detail..."
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
                    <Send className="w-6 h-6 text-white" />

                    Request Quotation
                </button>
            </div>
        </main>
    )
}