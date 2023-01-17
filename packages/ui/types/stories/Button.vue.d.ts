declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    backgroundColor: {
        type: StringConstructor;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'storybook-button': boolean;
        'storybook-button--primary': boolean;
        'storybook-button--secondary': boolean;
    }>;
    style: import("vue").ComputedRef<{
        backgroundColor: string | undefined;
    }>;
    onClick(): void;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    backgroundColor: {
        type: StringConstructor;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    primary: boolean;
}>;
export default _default;
//# sourceMappingURL=Button.vue.d.ts.map