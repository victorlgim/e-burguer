import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

    title: string,

    colors: {
        bdcard: string,
        primary: string,
        secundary: string,
        three: string;
        card: string;
        background: string,
        text: string,
        button: string,
        column: string,
        shadow: string,
        opacity: number,
        form: string,
        input: string
    },
    }
}