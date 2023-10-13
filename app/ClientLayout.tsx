'use client'
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient();


export const ClientLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
