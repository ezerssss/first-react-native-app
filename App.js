import { useState } from 'react';
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function App() {
    const [listOfGoals, setListOfGoals] = useState([]);
    const [text, setText] = useState('');

    function handleInput(text) {
        setText(text);
    }

    function handleAddGoal() {
        setListOfGoals([...listOfGoals, { text, key: listOfGoals.length + 1 }]);
    }

    function handleRemoveGoal(goal) {
        setListOfGoals(listOfGoals.filter(({ text }) => text !== goal));
    }

    const noGoals = !listOfGoals.length;

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.title}>Goals.</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Your goal for today"
                        style={styles.input}
                        onChangeText={handleInput}
                    />
                    <Button
                        color="green"
                        title="Add goal"
                        onPress={handleAddGoal}
                    />
                </View>
                <View style={styles.goalsContainter}>
                    {noGoals && <Text>No goals today.</Text>}
                    <FlatList
                        data={listOfGoals}
                        renderItem={(itemData) => {
                            const goal = itemData.item.text;

                            return (
                                <View style={styles.goal}>
                                    <Text
                                        style={styles.goalText}
                                        onPress={() => handleRemoveGoal(goal)}
                                    >
                                        {goal}
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <Text>Demo app by dioskor0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingVertical: 50, paddingHorizontal: 20, flex: 1 },
    navbar: {
        marginVertical: 20,
    },
    main: {
        flex: 1,
    },
    footer: {
        marginVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: 0.6,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: '70%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    goalsContainter: {
        flex: 1,
    },
    goal: {
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 2,
    },
    goalText: {
        padding: 7,
    },
});
