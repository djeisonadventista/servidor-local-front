"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"


export const RightSection = () => {

    //useState
    const [Name, setName] = useState("")
    const [numero_identidade, setNumeroIdentidade] = useState("")
    const [data_nascimento, setDataNascimento] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [telefone, setTelefone] = useState("")
    const [pais, setPais] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [role, setRole] = useState("")

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setName(e.target.value)
        } else {
            setName("")
        }
    }

    const changeNumeroIdentidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNumeroIdentidade(e.target.value)
        } else {
            setNumeroIdentidade("")
        }
    }

    const changeDataNascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDataNascimento(e.target.value)
        } else {
            setDataNascimento("")
        }
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value)
        } else {
            setEmail("")
        }
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value)
        } else {
            setPassword("")
        }
    }

    const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTelefone(e.target.value)
        } else {
            setTelefone("")
        }
    }

    const changePais = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPais(e.target.value)
        } else {
            setPais("")
        }
    }

    const changeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setLocalidade(e.target.value)
        } else {
            setLocalidade("")
        }
    }

    const changeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setRole(e.target.value)
        } else {
            setRole("")
        }
    }


    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        await fetch(
            "http://localhost:8080/users/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Name: Name,
                    numero_identidade: numero_identidade,
                    data_nascimento: data_nascimento,
                    email: email,
                    password: password,
                    telefone: telefone,
                    pais: pais,
                    localidade: localidade,
                    role: role
                })
            }
        ).then((response) => {
            console.log(response.json())
        })
    }

    console.log({
        Name: Name,
        numero_identidade: numero_identidade,
        data_nascimento: data_nascimento,
        email: email,
        password: password,
        telefone: telefone,
        pais: pais,
        localidade: localidade,
        role: role
    })

    return (
        <div className="w-1/2 flex flex-col justify-center">

            <Card className="h-full flex-col justify-center px-14 gap-5 py-15 mb-5 mt-5">

                <CardHeader>
                    <span className="text-4xl font-bold">
                        Create Your Account
                    </span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Name</Label>
                            <Input type="text" placeholder="John Doe" className="py-2 text-lg h-10"
                                value={Name}
                                onChange={changeName} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Numero Identidade</Label>
                            <Input type="text" placeholder="123456789" className="py-2 text-lg h-10"
                                value={numero_identidade}
                                onChange={changeNumeroIdentidade} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Data Nascimento</Label>
                            <Input type="date" placeholder="01/01/1990" className="py-2 text-lg h-10"
                                value={data_nascimento}
                                onChange={changeDataNascimento} />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <Label>Email</Label>
                                <Input type="text" placeholder="example@example.com" className="py-2 text-lg h-10"
                                    value={email}
                                    onChange={changeEmail} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Senha</Label>
                                <Input type="password" placeholder="your_password ..." className="py-2 text-lg h-10"
                                    value={password}
                                    onChange={changePassword} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Telefone</Label>
                            <Input type="text" placeholder="(11) 99999-9999" className="py-2 text-lg h-10"
                                value={telefone}
                                onChange={changeTelefone} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Pais</Label>
                            <Input type="text" placeholder="Brazil" className="py-2 text-lg h-10"
                                value={pais}
                                onChange={changePais} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Localidade</Label>
                            <Input type="text" placeholder="São Paulo" className="py-2 text-lg h-10"
                                value={localidade}
                                onChange={changeLocalidade} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Role</Label>
                            <Input type="text" placeholder="client or provider" className="py-2 text-lg h-10"
                                value={role}
                                onChange={changeRole} />
                        </div>

                        <button
                            onClick={handleRegister}
                            className="bg-[#13A4EC] rounded-md text-white p-2 font-bold py-3 drop-shadow-lg drop-shadow-gray-200">
                            Complete Registration
                        </button>
                    </div>

                    <div>
                        <span className="text-sm text-gray-500"> Already have an account?</span>
                        <Link href="/register" className="text-[#13A4EC] font-semibold hover:underline">
                            Sign In
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

