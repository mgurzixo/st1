export default {
    summary: {
        title: "Summary",
        url: "/",
        burger: {
            label: "",
            icon: "fas fa-2x fa-home",
        },
        up: {
            label: "SectionA",
            icon: "fas fa-2x fa-arrow-down",
            onclick: "stLink('section1', 'down')",
        },

        buttons: [
            {
                label: "Sections",
                items: [
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Section 1",
                        onclick: "stLink('s1', 'down')",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Section 2",
                        onclick: "stLink('s2', 'down')",
                    },
                ],
            },
        ],
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

        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Chapter 1",
                        onclick: "stLink('s1c1', 'down')",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Chapter 2",
                        onclick: "stLink('s1c2', 'down')",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Chapter 3",
                        onclick: "stLink('s1c3', 'down')",
                    },
                ],
            },
        ],
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

        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Chapter 1",
                        onclick: "stLink('s2c1', 'down')",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Chapter 2",
                        onclick: "stLink('s2c2', 'down')",
                    },
                ],
            },
        ],
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
        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-times",
                        label: "Chapter 1",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-right",
                        label: "Chapter 2",
                        onclick: "stLink('s1c2', 'right')",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-right",
                        label: "Chapter 3",
                        onclick: "stLink('s1c3', 'right')",
                    },
                ],
            },
        ],
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
        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-arrow-left",
                        label: "Chapter 1",
                        onclick: "stLink('s1c1', 'left')",
                    },
                    {
                        icon: "fas fa-2x fa-times",
                        label: "Chapter 2",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-right",
                        label: "Chapter 3",
                        onclick: "stLink('s1c3', 'right')",
                    },
                ],
            },
        ],
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
        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-arrow-left",
                        label: "Chapter 1",
                        onclick: "stLink('s1c1', 'left')",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-left",
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
        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-times",
                        label: "Chapter 1",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-right",
                        label: "Chapter 2",
                        onclick: "stLink('s2c2', 'right')",
                    },
                ],
            },
        ],
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
        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-arrow-left",
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
    },
};
