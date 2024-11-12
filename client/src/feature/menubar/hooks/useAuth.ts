// hooks/useAuth.ts
import {SessionData, User} from '@/domain/user';
import {useCallback} from "react";
import {apiClient} from "@/utils/client";

export const useAuth = () => {
    const checkSession = useCallback(async () => {
        try {
            const res = await apiClient.get("/session");
            const session = res.data;
            const userData: SessionData = {
                uuid: session.user_id,
                email: session.email,
            };
            console.log(userData)
        } catch (error) {
            console.error('Session check failed:', error);
        } finally {
            console.log("set user")
        }
    }, []);

    const signout = useCallback( async () => {
        try {
            await apiClient.get("signout")
        } catch (error) {
            console.log('Signout failed:', error)
        }
    }, []);

    return {
        checkSession,
        signout
    };
};
