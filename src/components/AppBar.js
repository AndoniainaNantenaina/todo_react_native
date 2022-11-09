import { Component } from "react";
import { Appbar } from "react-native-paper";

class MyAppBar extends Component
{
    render() {
        return (
            <Appbar.Header>
                <Appbar.Content title="To-do" />
            </Appbar.Header>
        );
    }
}

export default MyAppBar;