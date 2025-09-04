import { Spinner } from "./styled/Spinner";
import { Div } from "./styled/Wrappers";

export const Loader = () => {
	return (
		<>
			<Div>
				<Spinner />
        <h3>Loading...</h3>
			</Div>
		</>
	);
};
