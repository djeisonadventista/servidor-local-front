import Link from "next/link"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


export const RightSection = () => {
    return (
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex-col justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold">Login</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input type="text" placeholder="example@example.com" className="py-2 text-lg h-10" />
                        </div>
                        <div className="flex flex-col gap-2">
                        <Label>Senha</Label>
                        <Input type="password" placeholder="your_password ..." className="py-2 text-lg h-10" />
                        </div>
                        <button className="bg-[#13A4EC] rounded-md text-white p-2 font-bold py-3 drop-shadow-lg drop-shadow-gray-200">Login</button>
                    </div>

                    <div>
                        <span className="text-sm text-gray-500">Don't have an account yet?</span>
                        <Link href="/register" className="text-[#13A4EC] font-semibold hover:underline">
                            Create an account
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 