'use client';

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { quotes } from "../data/quotes";

export default function QuoteForm() {
    const [topic, setTopic] = useState('');
    const [selectedQuotes, setSelectedQuotes] = useState<{ topic: string; text: string }[]>([]);

    const handleGenerate = () => {
        const filtered = quotes.filter((q) =>
            q.topic.toLowerCase().includes(topic.toLowerCase())
        );

        const source = filtered.length > 0 ? filtered : quotes;
        const shuffled = [...source].sort(() => 0.5 - Math.random());
        setSelectedQuotes(shuffled.slice(0, 3));
    };

    return (
        <div className="max-w-xl w-full bg-white rounded-xl shadow-2xl p-8 space-y-6">
            <h1 className="text-3xl font-extrabold text-center text-gray-800">
                AI Quote Generator
            </h1>

            <Input
                placeholder="Enter a topic (e.g. motivation, success, focus)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />

            <Button className="w-full" onClick={handleGenerate}>
                Generate Quotes
            </Button>

            <ul className="space-y-3">
                {selectedQuotes.map((quote, index) => (
                    <li key={index} className="text-lg text-gray-700 italic border-l-4 border-indigo-400 pl-4">
                        &quot;{quote.text}&quot;
                    </li>
                ))}
            </ul>
        </div>
    );
}
