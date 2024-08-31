import { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from "react-native"
import { GlobalStyles } from "../GlobalStyles"
import { collection, query, where, getDocs, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Avatar } from '@rneui/base';

export default function Leaderboard() {

    const [usersDataLB, setUsersDataLB] = useState([]);
    var topThreeData = [];

    const findTopThreeExp = (data) => {
        let sortedData = data.sort((a, b) => b.exp - a.exp).slice(0, 3)
        console.log("⭐️ ", sortedData)

        sortedData.forEach(function callback(value, index) { 
            topThreeData[index] = value.uid

            updateDoc(doc(db, "users", value.uid), {
                ranking: index + 1
            })
        })

        console.log("TOP3: ", topThreeData)

        Promise.all(data.map((user) => {
            if (!topThreeData.includes(user.uid)) {
                return updateDoc(doc(db, "users", user.uid), {
                    ranking: null
                });
            }
        })).catch((error) => {
            console.error(error)
        });

        console.log(topThreeData)
        return topThreeData;
    };

    const getAllUsersLB = async () => {
        const q = query(collection(db, "users")); // , where("capital", "==", true
        const querySnapshot = await getDocs(q);

        let users = [];

        querySnapshot.forEach((doc) => {
            const userData = doc.data()
            console.log(doc.id, " => ", doc.data());
            users.push({
                ...userData,
                uid: doc.id,
                username: userData.username,
                exp: userData.exp,
            });
        });
        findTopThreeExp(users)
        setUsersDataLB(users);
    } 

    useEffect(() => {
        getAllUsersLB()
    }, [])


    return (
        <SafeAreaView style={{height: '100%'}}>
            <FlatList
                data={usersDataLB.sort((a, b) => b.exp - a.exp)}
                keyExtractor={(item) => item.uid.toString()}
                renderItem={({ item }) => (
                    <View style={GlobalStyles.leaderboardListItem}>
                        <View style={GlobalStyles.avatarContainer}>
                            <Avatar
                                rounded
                                title={item.username.substring(0, 2)}
                                size={48}
                                containerStyle={{ backgroundColor: item.avatarColor }}
                            />
                            { item.ranking == 1 ? (
                                <View style={GlobalStyles.avatarBadgeGold}>
                                    <Text style={GlobalStyles.leaderboardTop3Number}>🥇</Text>
                                </View>
                            ) : (
                                item.ranking == 2 ? (
                                    <View style={GlobalStyles.avatarBadgeSilver}>
                                        <Text style={GlobalStyles.leaderboardTop3Number}>🥈</Text>
                                    </View>
                                ) : (
                                    item.ranking == 3 ? (
                                        <View style={GlobalStyles.avatarBadgeBronze}>
                                            <Text style={GlobalStyles.leaderboardTop3Number}>🥉</Text>
                                        </View>
                                    ) : (
                                        null
                                    )
                                )
                            )
                            }
                        </View>

                        <Text style={{paddingLeft: 18, marginRight: 'auto', alignSelf: 'center'}}>{`${item.username}`}</Text>
                        <Text style={{alignSelf: 'center'}}>{`${item.exp} XP`}</Text>
                    </View>
                )}
            />
        </SafeAreaView>  
    )
}