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
                        onclick: "stLink('section1', 'down')",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Section 2",
                        onclick: "stLink('section2', 'down')",
                    },
                ],
            },
        ],
        title: "Summary",
    },

    section1: {
        title: "Section 1",
        url: "/section1",
        burger: {
            label: "Sections",
            icon: "fas fa-2x fa-arrow-up",
            onclick: "stLink('summary', 'up')",
        },
        Yup: {
            label: "Sections",
            icon: "fas fa-2x fa-arrow-up",
        },

        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Section 1",
                    },
                    {
                        icon: "fas fa-2x fa-arrow-down",
                        label: "Section 2",
                    },
                ],
            },
        ],
    },

    // {
    //     id: "s1c1",
    //     appName: "Section 1",
    //     buttons: [
    //         {
    //             icon: "fa-arrow-circle-down",
    //             text: "Chapter 1",
    //         },
    //         {
    //             icon: "fa-arrow-circle-down",
    //             text: "Chapter 2",
    //         },
    //         {
    //             icon: "fa-arrow-circle-down",
    //             text: "Chapter 3",
    //         },
    //     ],
    //     title: "Summary",
    // },
};
