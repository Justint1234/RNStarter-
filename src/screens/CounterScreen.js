import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [countObj, setCountObj] = useState({counter: 0, timesIncreased: 0, timesDecreased: 0});

    return (
        <View>
            <View style = 
            {styles.buttonMargin}>
            <Button
                title="Increase"
                onPress ={() => {
                    setCountObj({counter: countObj.counter + 1, timesIncreased: 
                        countObj.timesIncreased + 1, timesDecreased: 
                        countObj.timesDecreased});
                }}
            />
            </View>
            <View style = {styles.buttonMargin}>
            <Button
                title="Decrease"
                onPress={() => {
                    setCountObj({counter: countObj.counter - 1, timesIncreased:
                    countObj.timesIncreased, timesDecreased: countObj.timesDecreased + 1});
                }}
            />
            </View> 
            <Text style= {styles.textStyle}>
                Current Count: {countObj.counter}
                </Text>
                <Text style= {styles.textStyle}>
                    Times Increased: {countObj.timesIncreased}
                    </Text> 
                    <Text style= {styles.textStyle}>
                    Times Decreased: {countObj.timesDecreased}
                    </Text> 
                    </View>
    );
            }

            const styles = StyleSheet.create({
                buttonMargin: { 
                    marginTop: 10 
                },
                textStyle: {
                    textAlign: "center",
                    margin: 10
                }

            });
            export default CounterScreen;
                    