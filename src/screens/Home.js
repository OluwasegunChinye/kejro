import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    Image,
    ActivityIndicator,
} from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS } from '../constants/theme';
import {
    db,
    auth,
    doc,
    onAuthStateChanged,
    getDoc,
    getAuth,
} from '../../config/firebase';

import imgPlaceHolder from '../../assets/klogo.png';

const { height, width } = Dimensions.get('screen');


const Home = () => {
    const [profile, setProfile] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const docSnap = await getDoc(doc(db, 'Users', uid));
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setUser(userData);
                } else {
                    console.log('User doc missing', uid);
                }
            } else {
                console.log('User not logged in');
                setUser(null);
            }
        });
        // onAuthStateChanged(auth, async (user) => {
        //     if (user) {
        //         // User is signed in, see docs for a list of available properties
        //         // https://firebase.google.com/docs/reference/js/auth.user
        //         const uid = user.uid;
        //         const docSnap = await getDoc(doc(db, 'Users', uid));
        //         console.log('user is signed in', uid, docSnap.data());
        //         // ...
        //     } else {
        //         // User is signed out
        //         console.log('user is not signed in');
        //         // ...
        //     }
        // });
    }, []);

    return (
        <View
            className=" flex-1"
            style={{
                backgroundColor: COLORS.secondary,
                paddingHorizontal: width * 0.05,
            }}
        >
            {loading ? (
                <ActivityIndicator
                    className="flex-1 justify-center items-center"
                    //visibility of Overlay Loading Spinner
                    visible={loading}
                    //Text with the Spinner
                    textContent={'Loading...'}
                    //Text style of the Spinner Text
                    size="large"
                    color="red"
                />
            ) : (
                <View
                    className="items-start flex-row"
                    style={{ marginTop: height * 0.1 }}
                >
                    <Image
                        className="w-16 h-16 rounded-full"
                        resizeMode="contain"
                        source={
                            profile ? { uri: user.profile } : imgPlaceHolder
                        }
                    />
                    <Text className=" px-2 mt-9 font-[poppins]">
                        Hello {user && user?.firstName}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default Home;
