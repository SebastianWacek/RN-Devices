import * as React from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';
import { Box, Progress, Center, NativeBaseProvider } from "native-base";

export default class Bateria extends React.Component {
    state = {
        batteryLevel: null,
    };

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    async _subscribe() {
        const batteryLevel = await Battery.getBatteryLevelAsync();
        this.setState({ batteryLevel });
        this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
            this.setState({ batteryLevel });
            console.log('batteryLevel changed!', batteryLevel);
        });
    }

    _unsubscribe() {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    }

    render() {
        return (
            <NativeBaseProvider>
                <View style={styles.container}>
                            <Text>Current Battery Level: {this.state.batteryLevel*100}</Text>

                <Box w="90%" maxW="400">
                    <Progress value={this.state.batteryLevel*100} mx="4" />
                </Box>
                </View>
            </NativeBaseProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
