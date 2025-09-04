import { Spinner } from "./styled/Spinner";
import { Wrapper } from "./styled/Wrappers";

export const Loader = () => {
	return (
		<>
			<Wrapper>
				<Spinner />
        <p>Loading...</p>
			</Wrapper>
		</>
	);
};
