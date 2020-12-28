function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("../assets/projects", false, /\.(png|jpe?g|svg)$/)
);

const findPhoto = (name) => images.find((item) => item.includes(name));

export const projectsData = {
    offerList: [
        "Stworzymy stronę internetową.",
        "Stworzymy małe aplikacje mobilne lub urządzenie elektroniczne dopasowane do twoich potrzeb.",
        "Poprowadzimy kampanię reklamową w social mediach.",
        "Napiszemy teksty na stronę, social media, blogi.",
        "Zaprojektujemy wyjątkowy wygląd strony.",
        "Przykładowe technologie, których możemy używać podczas realizacji projektów: HTML, CSS, PHP, JavaScript, Python, C, C++, Linux, Linux embedded, AVR, ARM, Java, Android, iOS.",
    ],
    projectsList: [
        {
            photo: {
                normal: findPhoto("project1"),
                retina: findPhoto("project1@2x"),
            },
            photoAlt: "Project one",
            title: "Lorem Ipsum donor",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            photo: {
                normal: findPhoto("project2"),
                retina: findPhoto("project2@2x"),
            },
            photoAlt: "Project two",
            title: "Lorem",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            photo: {
                normal: findPhoto("project3"),
                retina: findPhoto("project3@2x"),
            },
            photoAlt: "Project three",
            title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            photo: {
                normal: findPhoto("project4"),
                retina: findPhoto("project4@2x"),
            },
            photoAlt: "Project four",
            title: "Lorem Ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ],
};
