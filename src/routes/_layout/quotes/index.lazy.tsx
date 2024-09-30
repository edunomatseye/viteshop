import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/quotes/")({
  component: Quotes,
});

const quotes = [
  "Don’t let yesterday take up too much of today.” — Will Rogers",
  "Ambition is putting a ladder against the sky.",
  "A joy that's shared is a joy made double.",
];

function CopyRight({ year }: { year: number }) {
  return (
    <>
      <div>&copy; - {year}</div>
    </>
  );
}

function InspirationQuote() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % quotes.length);
  const quote = quotes[index];
  return (
    <>
      <span>{quote}</span>
      <hr />
      <br />
      <button onClick={next}>Get Quotes</button>
      <br />
    </>
  );
}

function FancyText({ title }: { title: string }) {
  return (
    <>
      <h3 className="font-bold">{title}</h3>
      <div>Your Inspiration quote is: </div>
    </>
  );
}

function Quotes() {
  return (
    <>
      <FancyText title={"Get Inspiration Quotes"} />
      <InspirationQuote />
      <CopyRight year={2004} />
      <div>Hello</div>
    </>
  );
}
