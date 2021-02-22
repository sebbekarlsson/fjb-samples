const style = `
font-size: bold;
border-bottom-style: solid;
border-bottom-color: lightgray;
border-bototm-width: 1px; 
`;

const Paragraph = (text) => <div style={style}>{text}</div>;

document.getElementById('root').appendChild(<Paragraph text={"Welcome"}/>);
