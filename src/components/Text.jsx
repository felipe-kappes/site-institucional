export function PrimaryTitle({ text }) {
  return <div className="text-4xl font-bold">{text}</div>;
}

export function SubTitle({ text }) {
  return <div className="text-xl font-bold">{text}</div>;
}

export function ParagraphLight({ text }) {
  return <div className="font-light">{text}</div>;
}

export function ButtonText({ text }) {
  return <div className="uppercase font-bold">{text}</div>;
}
