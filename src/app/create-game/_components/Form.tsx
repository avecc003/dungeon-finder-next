"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import SelectType from "./SelectorType";

export default function Form() {
    return (
        <form className="flex flex-col w-[70%]">
            <h3> Game </h3>
            <Input placeholder="Game Name" />
            <h3> Description</h3>
            <Input placeholder="Description" />
            <h3> Directions </h3>
            <Textarea placeholder="Let your players know where it's happening" />
            <div className="flex">
                <div>
                    <h3> Party Size </h3>
                    <Input placeholder="Party Size"></Input>
                </div>
                <div>
                    <h3> Party Type </h3>
                    <SelectType />
                </div>
            </div>

            <div>
                <Checkbox /> <span> Private Game </span>
                <p>Players will not be able to see private games on the map.</p>
            </div>
            <Button type="submit">Create Game</Button>
        </form>
    );
}
