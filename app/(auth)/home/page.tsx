import { PedidoCard } from "@/components/core/pedido-card";

export  default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <PedidoCard
                title="Instalar porta de entrada"
                description="Preciso instalar uma porta de entrada na minha casa. A porta tem 2 metros de altura e 0,8 metros de largura. Preciso que seja instalada até o final do mês."
                image="/placeholder.png"
                category={{
                     id: "1", 
                     name: "Construção Civil",
                      icone: "/icone-placeholder.png " }}
            />
        </div>
    )
}