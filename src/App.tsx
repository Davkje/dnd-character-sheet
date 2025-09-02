import { Button, ButtonCustom } from "./components/styled/Buttons";
import { Input, InputText } from "./components/styled/Inputs";
import { Div, DivRow, Section, SectionRow } from "./components/styled/Wrappers";
import "./style/App.scss";

function App() {
	return (
		<>
			<h1>DND SHEET</h1>
			<Section>
				<Div>
					<div>hej</div>
					<div>hsdj</div>
					<div>hej</div>
				</Div>
				<Button>Button</Button>
				<ButtonCustom bgColor="var(--c-blue)">Custom</ButtonCustom>
				<Input></Input>
        <InputText className="denna"></InputText>
        <DivRow>
					<div>hej</div>
					<div>hsdj</div>
					<div>hej</div>
				</DivRow>
			</Section>
			<SectionRow>
				<Div>oj</Div>
				<Div>oj</Div>
				<Div>oj</Div>
				<Div>oj</Div>
			</SectionRow>
		</>
	);
}

export default App;
