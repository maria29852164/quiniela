'use client'
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation'
import {client} from "@/app/supabase/client";

export const withAuth = (WrappedComponent: any) => {
    const AuthComponent = (props: any) => {
        const router = useRouter();
        const isMounted = typeof window !== 'undefined';

        useEffect(() => {
            client.auth.onAuthStateChange((_event, session) => {
                if (!session) {
                    router.push("/login");
                }
            });
        },[router])

        if (!isMounted) {
            return <div>Loading...</div>;
        }


        return null; // Esto puede cambiarse por un indicador de carga u otro componente según sea necesario
    };

    return AuthComponent;
};

