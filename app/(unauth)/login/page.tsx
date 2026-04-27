import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
    return (
        <div className="bg-gray-200 h-screen flex justify-between">

            <div className=" w-1/2 bg-red-500">
                <Badge variant="secondary">Precision Concierge Service</Badge>

                <h1>Elevate your experience in other words</h1>
                <p className="text-white">Discover a new level of service with our precision concierge solutions.</p>

                <div className="flex justify-evenly w-full">
                    <Card>
                        <CardContent>
                            <CardTitle> Vetted NetWork</CardTitle>
                            <CardDescription>
                                Exclusive access to top-tier providers and clients
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <CardTitle> Secured Platform</CardTitle>
                            <CardDescription>
                                Enterprise-grader security for all your transactions and data.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="w-1/2 bg-blue-500">Direita</div>

        </div>
    );
}
