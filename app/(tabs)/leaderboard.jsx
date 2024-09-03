import { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from "react-native"
import { GlobalStyles } from "../GlobalStyles"
import { collection, query, where, getDocs, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Avatar } from '@rneui/base';

export default function Leaderboard() {

    const [usersDataLB, setUsersDataLB] = useState([]);
    const [topThreeData, setTopThreeData] = useState([]);

    const updateUserRankings = async (data) => {
        const sortedData = data.sort((a, b) => b.exp - a.exp);

        const topThree = sortedData.slice(0, 3);
        const topThreeIds = topThree.map((user, index) => {
            updateDoc(doc(db, "users", user.uid), {
                ranking: index + 1
            });
            return user.uid;
        });

        setTopThreeData(topThreeIds);

        sortedData.forEach((user, index) => {
            if (!topThreeIds.includes(user.uid)) {
                updateDoc(doc(db, "users", user.uid), {
                    ranking: index + 1
                });
            }
        });

        setUsersDataLB(sortedData);
    };
    

    const getAllUsersLB = async () => {
        const q = query(collection(db, "users")); // , where("capital", "==", true
        const querySnapshot = await getDocs(q);

        let users = [];

        querySnapshot.forEach((doc) => {
            const userData = doc.data()
            console.log(doc.id, " => ", doc.data());
            console.log("USERRRRR DATAAAAA ", userData)
            users.push({
                ...userData,
                uid: doc.id,
                username: userData.username,
                exp: userData.exp,
            });
        });
        updateUserRankings(users)
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