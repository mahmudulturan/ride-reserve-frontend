export const goToSpecificSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const topPosition = window.pageYOffset + rect.top - 100;
        window.scrollTo({
            top: topPosition,
            behavior: "smooth"
        });
    }
};