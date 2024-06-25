"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import SelectType from "./SelectorType";

export default function Form( ) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        directions: "",
        partySize: "",
        partyType: "",
        privateGame: false,
    });

    function handleChange(e : Event) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    console.log(formData);
    return (
        <form className="flex flex-col w-[70%]" onChange={handleChange}>
            <h3> Game </h3>
            <Input name="name" placeholder="Game Name" />
            <h3> Description</h3>
            <Input name="description" placeholder="Description" />
            <h3> Directions </h3>
            <Textarea name="directions" placeholder="Let your players know where it's happening" />
            <div className="flex">
                <div>
                    <h3> Party Size </h3>
                    <Input name="partySize" placeholder="Party Size"></Input>
                </div>
                <div>
                    <h3> Party Type </h3>
                    <SelectType />
                </div>
            </div>

            <div>
                <Checkbox name="privateGame" /> <span> Private Game </span>
                <p>Players will not be able to see private games on the map.</p>
            </div>
            <Button type="submit">Create Game</Button>
        </form>
    );
}
