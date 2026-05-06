import { Card, CardContent } from "../ui/card"


interface CategoriaType {
    id: string
    name: string
    icone: string
}

interface PedidoCardProps {
    title: string
    description: string
    image: string
    category: CategoriaType
}

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return (
        <Card>
            <CardContent>
                <h1>Pedido</h1>
            </CardContent>
        </Card>
    )
}