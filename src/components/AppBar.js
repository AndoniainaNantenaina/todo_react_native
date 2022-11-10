import { Appbar } from "react-native-paper";

function MyAppBar(props) {
    return(
        <Appbar.Header>
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    );
}

export default MyAppBar;