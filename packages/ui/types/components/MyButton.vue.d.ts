declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label: string;
    variant: "primary" | "secondary";
    size: "small" | "medium" | "large";
}>, {
    label: string;
    variant: string;
    size: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label: string;
    variant: "primary" | "secondary";
    size: "small" | "medium" | "large";
}>, {
    label: string;
    variant: string;
    size: string;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    variant: "primary" | "secondary";
    size: "small" | "medium" | "large";
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
//# sourceMappingURL=MyButton.vue.d.ts.map