import { GlobalStyles } from "../GlobalStyles";
import React, { useState } from "react";
import {
	View,
	Text,
	Button,
	Image,
	Switch,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TextInput,
	Pressable,
	dispatch,
} from "react-native";
import {
	doc,
	getDoc,
	updateDoc,
	collection,
	where,
	query,
	deleteDoc
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Avatar } from "@rneui/base";

import {
	EmailAuthProvider,
	reauthenticateWithCredential,
	updateEmail,
	updateProfile,
	getAuth,
	deleteUser,
} from "firebase/auth";

import { useRouter, useSegments, Slot } from "expo-router";

export default function Profile() {
	const [username, setUsername] = useState("");
	const [currPassword, setCurrPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");

	const [errorMessageUI, setErrorMessageUI] = useState("");

	const [verifiedPassword, setVerifiedPassword] = useState("");

	const [errorExists_EmailUser, setErrorExists_EmailUser] = useState();

	const [errorExists_deleteAccount, setErrorExists_deleteAccount] = useState();
	const [errorMessageUI_deleteAccount, setErrorMessageUI_deleteAccount] = useState();

	const [avatar, setAvatar] = useState("");

	const [profileData, setProfileData] = useState([]);

	const auth = getAuth();
	const currentUser = auth.currentUser;

	const router = useRouter();

	console.log(username);
	
	React.useEffect(() => {
		const docRef = doc(db, "users", currentUser.uid);
		const docSnap = getDoc(docRef);

		getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
			if (docSnap.exists()) {
				setProfileData(docSnap.data());
				console.log("profileData: ", profileData);
			} else {
				console.log("No such document!");
			}
		});
	}, []);

	const handleUpdate_User_Email = async(
		newEmail,
		newUsername,
		verifiedPassword
	) => {
		try {
			const docRef = doc(db, "users", currentUser.uid);
			const docSnap = getDoc(docRef);

			const credential = EmailAuthProvider.credential(
				currentUser.email,
				verifiedPassword
			);
			await reauthenticateWithCredential(currentUser, credential);

			await updateEmail(currentUser, newEmail.toString()).then(() => {
				console.log("Email updated");
			});

			await updateDoc(docRef, {
				email: newEmail,
				username: newUsername,
			});

			setVerifiedPassword("");
			setEmail("");
			setUsername("");
			setErrorExists_EmailUser(false);
		} catch (error) {
			setErrorExists_EmailUser(true);

			switch (error.code) {
				case "auth/invalid-email":
				  setErrorMessageUI("Invalid email");
				  break;
				case "auth/email-already-in-use":
				  setErrorMessageUI("Email is already in use");
				  break;
				case "auth/invalid-credential":
				  setErrorMessageUI("These credentials don't match our records.");
				  break;
				default:
				  setErrorMessageUI("Something went wrong");
			}

			console.log("Error updating email or username:", error);
		}
	};

	const handleDeleteAccount = async() => {
		try {
			const auth = getAuth();
			const user = auth.currentUser;

			deleteUser(user).then(() => {
				setErrorExists_deleteAccount(false);
				console.log("User deleted")
			})
		
			router.navigate('/signin');
		  } catch (error) {
			setErrorExists_deleteAccount(true);
			setErrorMessageUI_deleteAccount("Something went wrong");
			console.log("Error deleting user or document:", error);
		  }
	}

	return (
		<SafeAreaView style={{ height: "100%", backgroundColor: "#ffffff" }}>
			<ScrollView style={{ height: "100%" }}>
				<View style={GlobalStyles.profileContainer}>
					<View style={GlobalStyles.profileContent}>
						<View style={GlobalStyles.profileSection}>
							<Text style={GlobalStyles.profileSectionTitle}>
								Personal Information
							</Text>
							<Text style={GlobalStyles.profileSectionSubtitle}>
								Use a permanent address where you can receive
								mail.
							</Text>

							<View style={GlobalStyles.profileForm}>
								<View style={GlobalStyles.profileFormGroup}>
									<Avatar
										rounded
										title={
											profileData.username
												? profileData.username.substring(
														0,
														2
												  )
												: null
										}
										size={48}
										containerStyle={{
											backgroundColor:
												profileData.avatarColor,
										}}
									/>
									<Pressable
										style={GlobalStyles.profileButton}
									>
										<Text
											style={
												GlobalStyles.profileButtonText
											}
										>
											Change avatar color
										</Text>
									</Pressable>
									{/* <Text
										style={
											GlobalStyles.profileImageNote
										}
									>
										JPG, GIF or PNG. 1MB max.
									</Text> */}
								</View>

								<View style={GlobalStyles.profileInputGroup}>
									<Text style={GlobalStyles.profileLabel}>
										Username
									</Text>
									<TextInput
										style={
											!errorExists_EmailUser
												? GlobalStyles.profileInput
												: GlobalStyles.profileInputError
										}
										placeholder="Username"
										placeholderTextColor="#B0B0B0"
										onChangeText={setUsername}
										value={username}
										autocomplete="username"
										autoCorrect="false"
										autoCapitalize="none"
										username
									/>
									<Text>{errorMessageUI}</Text>
								</View>

								<View style={GlobalStyles.profileInputGroup}>
									<Text style={GlobalStyles.profileLabel}>
										Email address
									</Text>
									<TextInput
										style={!errorExists_EmailUser
											? GlobalStyles.profileInput
											: GlobalStyles.profileInputError
										}
										placeholder="Email address"
										placeholderTextColor="#B0B0B0"
										onChangeText={setEmail}
										value={email}
										autocomplete="email"
										autoCorrect="false"
										autoCapitalize="none"
										email
									/>
								</View>

								<View style={GlobalStyles.profileInputGroup}>
									<Text style={GlobalStyles.profileLabel}>
										Verify password
									</Text>
									<TextInput
										style={
											!errorExists_EmailUser
												? GlobalStyles.profileInput
												: GlobalStyles.profileInputError
										}
										placeholder="Verify password"
										placeholderTextColor="#B0B0B0"
										onChangeText={setVerifiedPassword}
										value={verifiedPassword}
										autocomplete="password"
										autoCorrect="false"
										autoCapitalize="none"
										password
										secureTextEntry={true}
									/>
									<Text style={{ marginTop: 16 }}>
										{errorExists_EmailUser == false ? (
											<Text
												style={{
													color: "green",
													fontSize: 18,
													height: 16 // derived from error text height
												}}
											>
												✅ 		Successfully changed.
											</Text>
										) : errorExists_EmailUser == true ? (
											<Text style={{ color: "red", fontSize: 18, height: 16 }}>
												❌ 		{errorMessageUI}
											</Text>
										) : null}
									</Text>
								</View>

								<View style={GlobalStyles.profileFormActions}>
									<Pressable
										style={GlobalStyles.profileSaveButton}
										onPress={() =>
											handleUpdate_User_Email(
												email,
												username,
												verifiedPassword
											)
										}
									>
										<Text
											style={
												GlobalStyles.profileSaveButtonText
											}
										>
											Save
										</Text>
									</Pressable>
								</View>
							</View>
						</View>

						{/* <View style={GlobalStyles.profileSection}>
							<Text style={GlobalStyles.profileSectionTitle}>
								Change password
							</Text>
							<Text
								style={[
									GlobalStyles.profileSectionSubtitle,
									{ marginBottom: 16 },
								]}
							>
								Update your password associated with your
								account.
							</Text>

							<View style={GlobalStyles.profileForm}>
								<View style={GlobalStyles.profileInputGroup}>
									<Text style={GlobalStyles.profileLabel}>
										Current password
									</Text>
									<TextInput
										style={GlobalStyles.profileInput}
										placeholder="First name"
										placeholderTextColor="#B0B0B0"
										autocomplete="current-password"
										onChangeText={setCurrPassword}
										password
									/>
								</View>

								<View style={GlobalStyles.profileInputGroup}>
									<Text style={GlobalStyles.profileLabel}>
										New password
									</Text>
									<TextInput
										style={GlobalStyles.profileInput}
										placeholder="Last name"
										placeholderTextColor="#B0B0B0"
										autocomplete="new-password"
										onChangeText={setNewPassword}
										password
									/>
								</View>

								<View style={GlobalStyles.profileInputGroup}>
									<Text style={GlobalStyles.profileLabel}>
										Confirm password
									</Text>
									<TextInput
										style={GlobalStyles.profileInput}
										placeholder="Email address"
										placeholderTextColor="#B0B0B0"
										onChangeText={setConfirmPassword}
										password
									/>
								</View>

								<View style={GlobalStyles.profileFormActions}>
									<Pressable
										style={GlobalStyles.profileSaveButton}
										// onPress={}
									>
										<Text
											style={
												GlobalStyles.profileSaveButtonText
											}
										>
											Save
										</Text>
									</Pressable>
								</View>
							</View>
						</View> */}

						<View style={GlobalStyles.profileSection}>
							<Text style={GlobalStyles.profileSectionTitle}>
								Delete account
							</Text>
							<Text
								style={[
									GlobalStyles.profileSectionSubtitle,
									{ marginBottom: 16 },
								]}
							>
								This action is not reversible. All information
								related to this account will be deleted
								permanently.
							</Text>

							<View style={GlobalStyles.profileFormActions}>
								<Pressable
									style={GlobalStyles.profileDeleteButton}
									onPress={handleDeleteAccount}
								>
									<Text
										style={
											GlobalStyles.profileSaveButtonText
										}
									>
										Yes, delete my account
									</Text>
								</Pressable>
							</View>
							{errorExists_deleteAccount == false ? (
								<Text
									style={{
										color: "green",
										fontSize: 18,
										height: 16 // derived from error text height
									}}
								>
									✅ 		Successfully deleted.
								</Text>
							) : errorExists_deleteAccount == true ? (
								<Text style={{ color: "red", fontSize: 18, height: 16 }}>
									❌ 		{errorMessageUI}
								</Text>
							) : null}
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
