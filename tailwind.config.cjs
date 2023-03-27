/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            'dark-blue': '#333D4B',
            peach: '#FDD6B9',
            cream: '#FEFCF7',
            white: '#FFFFFF',
            'light-gray': '#F4F1EB',
            gray: '#83888F',
            jade: {
                500: '#0E8684',
                600: '#0A6B73',
            },
        },
        fontFamily: {
            fraunces: ['Fraunces'],
            barlow: ['Barlow'],
        },
        fontSize: {
            'display-large': ['56px', '64px'],
            'display-medium': ['46px', '52px'],
            'display-small': ['36px', '44px'],
            'headline-large': ['32px', '44px'],
            'headline-medium': ['28px', '36px'],
            'headline-small': ['24px', '32px'],
            'title-large': ['22px', '28px'],
            'title-medium': ['16px', '24px'],
            'title-small': ['14px', '20px'],
            'body-large': [
                '16px',
                {
                    lineHeight: '24px',
                    letterSpacing: '0.5px',
                },
            ],
            'body-medium': [
                '14px',
                {
                    lineHeight: '20px',
                    letterSpacing: '0.25px',
                },
            ],
            'body-small': [
                '12px',
                {
                    lineHeight: '16px',
                    letterSpacing: '0.4px',
                },
            ],
            'label-large': [
                '14px',
                {
                    lineHeight: '20px',
                    letterSpacing: '0.1px',
                },
            ],
            'label-medium': [
                '12px',
                {
                    lineHeight: '16px',
                    letterSpacing: '0.5px',
                },
            ],
            'label-small': [
                '11px',
                {
                    lineHeight: '16px',
                    letterSpacing: '0.5px',
                },
            ],
        },
        spacing: {
            0: '0px',
            0.25: '3px',
            0.5: '6px',
            1: '12px',
            2: '24px',
            3: '36px',
            4: '48px',
            5: '60px',
            6: '72px',
            7: '84px',
            8: '96px',
            9: '108px',
            10: '120px',
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            addBase({
                body: {
                    height: '100vh',
                    color: theme('colors.dark-blue'),
                },
                h1: {
                    fontSize: theme('fontSize.display-medium'),
                    lineHeight: theme('fontSize.display-medium.1'),

                    [`@media (min-width: ${theme('screens.sm')})`]: {
                        fontSize: theme('fontSize.headline-large'),
                        lineHeight: theme('fontSize.headline-large.1'),
                    },
                },
            })
        },
    ],
}
