'use client';
import { RootLayoutProps } from '@/types';
import { UserInterface } from '@/types/user';
import { useRouter } from 'next/navigation';
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

interface ContextProps {
	dataUser: UserInterface | any;
	handlerLogin: (dataLogin: UserInterface) => void;
}

const AuthContext = createContext<ContextProps>({
	dataUser: {},
	handlerLogin: () => {},
});

export const AuthContextProvider = ({ children }: RootLayoutProps) => {
	const [dataUser, setDataUser] = useState<UserInterface | Object>({});

	useEffect(() => {
		// Retrieve from local storage on initial render
		const retrieveDataUser = localStorage.getItem('profile');
		if (!dataUser) {
			if (retrieveDataUser) {
				setDataUser(retrieveDataUser);
			}
		}

		// Save to local storage on changes
		return () => {
			localStorage.setItem('profile', JSON.stringify(dataUser));
		};
	}, [dataUser]);

	const handlerLogin = (dataLogin: UserInterface) => {
		const navigateTo = useRouter();
		setDataUser(dataLogin);

		if (dataUser) {
			navigateTo.push('/');
		}
	};

	return (
		<AuthContext.Provider value={{ dataUser, handlerLogin }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
