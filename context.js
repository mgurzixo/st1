export default {
    summary: {
        title: "Summary",
        burger: {
            label: "",
            icon: "fas fa-lg fa-home",
        },
        Xup: {
            label: "Sections",
            icon: "fas fa-arrow-circle-up",
        },

        buttons: [
            {
                label: "Sections",
                items: [
                    {
                        icon: "fas fa-arrow-circle-down",
                        label: "Section 1",
                        onclick: "stLink('section1')",
                    },
                    {
                        icon: "fas fa-arrow-circle-down",
                        label: "Section 2",
                        onclick: "stLink('section2')",
                    },
                ],
            },
        ],
        title: "Summary",
    },

    section1: {
        title: "Section 1",
        burger: {
            label: "Sections",
            icon: "fas fa-lg fa-arrow-circle-up",
            onclick: "stLink('summary')",
        },
        Yup: {
            label: "Sections",
            icon: "fas fa-arrow-circle-up",
        },

        buttons: [
            {
                label: "Chapters",
                items: [
                    {
                        icon: "fas fa-arrow-circle-down",
                        label: "Section 1",
                    },
                    {
                        icon: "fas fa-arrow-circle-down",
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
