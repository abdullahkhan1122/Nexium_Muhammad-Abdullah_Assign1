'use client';

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { quotes } from "../data/quotes";

export default function QuoteForm() {
    const [topic, setTopic] = useState('');
    const [selectedQuotes, setSelectedQuotes] = useState<string[]>([]);

    const handleGenerate = () => {
        const shuffled = [...quotes].sort(() => 0.5 - Math.random());
        setSelectedQuotes(shuffled.slice(0, 3));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
            <h1 className="text-2xl font-bold text-center">Quote Generator</h1>
            <Input
                placeholder="Enter a topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <Button className="w-full" onClick={handleGenerate}>
                Generate Quotes
            </Button>
            <ul className="space-y-2">
                {selectedQuotes.map((quote, index) => (
                    <li key={index} className="text-gray-700 italic">&quot;{quote}&quot;</li>
                ))}
            </ul>

        </div>
    );
}
