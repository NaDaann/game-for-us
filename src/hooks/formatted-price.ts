import { useMemo } from "react";

export function useFormattedPrice(price: number): string {
    return useMemo(() => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    }, [price]);
}