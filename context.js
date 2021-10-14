export default {
    summary: {
        title: "Summary",
        url: "/",
        burger: {
            label: "",
            icon: "fas fa-2x fa-home",
        },
        Xprevious: {
            label: "SectionA",
            icon: "fas fa-2x fa-arrow-down",
            onclick: "stLink('section1', 'down')",
        },

        menu: [
            {
                label: "Sections",
                items: [
                    {
                        icon: "fas fa-2x fa-puzzle-piece",
                        label: "Section 1",
                        onclick: "stLink('s1', 'down')",
                    },
                    {
                        icon: "fas fa-2x fa-puzzle-piece",
                        label: "Section 2",
                        onclick: "stLink('s2', 'down')",
                    },
                ],
            },
        ],
        breadcrumbs: {
            active: {
                label: "Summary",
            },
        },
    },

    s1: {
        title: "Section 1",
        url: "/section1",
        burger: {
            label: "",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('summary', 'up')",
        },
        next: {
            label: "Section 2",
            icon: "fas fa-2x fa-arrow-right",
            onclick: "stLink('s2', 'right')",
        },

        menu: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-align-left",
                        label: "Chapter 1",
                        onclick: "stLink('s1c1', 'down')",
                    },
                    {
                        icon: "fas fa-align-left",
                        label: "Chapter 2",
                        onclick: "stLink('s1c2', 'down')",
                    },
                    {
                        icon: "fas fa-align-left",
                        label: "Chapter 3",
                        onclick: "stLink('s1c3', 'down')",
                    },
                ],
            },
        ],
        breadcrumbs: {
            summary: {
                label: "Summary",
                onclick: "stLink('summary', 'up')",
            },
            active: {
                label: "Section 1",
            },
        },
    },

    s2: {
        title: "Section 2",
        url: "/section2",
        burger: {
            label: "",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('summary', 'up')",
        },
        previous: {
            label: "Section 1",
            icon: "fas fa-2x fa-arrow-left",
            onclick: "stLink('s1', 'left')",
        },

        menu: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 1",
                        onclick: "stLink('s2c1', 'down')",
                    },
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 2",
                        onclick: "stLink('s2c2', 'down')",
                    },
                ],
            },
        ],
        breadcrumbs: {
            summary: {
                label: "Summary",
                onclick: "stLink('summary', 'up')",
            },
            active: {
                label: "Section 2",
            },
        },
    },

    s1c1: {
        title: "Section 1: Chapter 1",
        url: "/section1/chapter1",
        burger: {
            label: "",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('s1', 'up')",
        },
        next: {
            label: "Chapter 2",
            icon: "fas fa-2x fa-arrow-right",
            onclick: "stLink('s1c2', 'right')",
        },
        menu: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 1",
                    },
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 2",
                        onclick: "stLink('s1c2', 'right')",
                    },
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 3",
                        onclick: "stLink('s1c3', 'right')",
                    },
                ],
            },
        ],
        breadcrumbs: {
            summary: {
                label: "Summary",
                onclick: "stLink('summary', 'up')",
            },
            level1: {
                label: "Section 1",
                onclick: "stLink('s1', 'up')",
            },
            active: {
                label: "Chapter 1",
            },
        },
    },

    s1c2: {
        title: "Section 1: Chapter 2",
        url: "/section1/chapter2",
        burger: {
            label: "",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('s1', 'up')",
        },
        previous: {
            label: "Chapter 1",
            icon: "fas fa-2x fa-arrow-left",
            onclick: "stLink('s1c1', 'left')",
        },
        next: {
            label: "Chapter 3",
            icon: "fas fa-2x fa-arrow-right",
            onclick: "stLink('s1c3', 'right')",
        },
        menu: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 1",
                        onclick: "stLink('s1c1', 'left')",
                    },
                    {
                        icon: "fas fa-2x fa-times",
                        label: "Chapter 2",
                    },
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 3",
                        onclick: "stLink('s1c3', 'right')",
                    },
                ],
            },
        ],
        breadcrumbs: {
            summary: {
                label: "Summary",
                onclick: "stLink('summary', 'up')",
            },
            level1: {
                label: "Section 1",
                onclick: "stLink('s1', 'up')",
            },
            active: {
                label: "Chapter 2",
            },
        },
    },

    s1c3: {
        title: "Section 1: Chapter 3",
        url: "/section1/chapter3",
        burger: {
            label: "",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('s1', 'up')",
        },
        previous: {
            label: "Chapter 2",
            icon: "fas fa-2x fa-arrow-left",
            onclick: "stLink('s1c2', 'left')",
        },
        menu: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 1",
                        onclick: "stLink('s1c1', 'left')",
                    },
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 2",
                        onclick: "stLink('s1c2', 'left')",
                    },
                    {
                        icon: "fas fa-2x fa-times",
                        label: "Chapter 3",
                    },
                ],
            },
        ],
        breadcrumbs: {
            summary: {
                label: "Summary",
                onclick: "stLink('summary', 'up')",
            },
            level1: {
                label: "Section 1",
                onclick: "stLink('s1', 'up')",
            },
            active: {
                label: "Chapter 3",
            },
        },
    },

    s2c1: {
        title: "Section 2: Chapter 1",
        url: "/section2/chapter1",
        burger: {
            label: "",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('s2', 'up')",
        },
        next: {
            label: "Chapter 2",
            icon: "fas fa-2x fa-arrow-right",
            onclick: "stLink('s2c2', 'right')",
        },
        menu: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-times",
                        label: "Chapter 1",
                    },
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 2",
                        onclick: "stLink('s2c2', 'right')",
                    },
                ],
            },
        ],
        breadcrumbs: {
            summary: {
                label: "Summary",
                onclick: "stLink('summary', 'up')",
            },
            level1: {
                label: "Section 2",
                onclick: "stLink('s2', 'up')",
            },
            active: {
                label: "Chapter 1",
            },
        },
    },

    s2c2: {
        title: "Section 2: Chapter 2",
        url: "/section2/chapter2",
        burger: {
            label: "",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('s2', 'up')",
        },
        previous: {
            label: "Chapter 1",
            icon: "fas fa-2x fa-arrow-left",
            onclick: "stLink('s2c1', 'left')",
        },
        menu: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-align-left",
                        label: "Chapter 1",
                        onclick: "stLink('s2c1', 'left')",
                    },
                    {
                        icon: "fas fa-2x fa-times",
                        label: "Chapter 2",
                    },
                ],
            },
        ],
        breadcrumbs: {
            summary: {
                label: "Summary",
                onclick: "stLink('summary', 'up')",
            },
            level1: {
                label: "Section 2",
                onclick: "stLink('s2', 'up')",
            },
            active: {
                label: "Chapter 2",
            },
        },
    },
};
