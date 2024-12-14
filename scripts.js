function showSection(sectionId) {
    const sections = ['sobreMi', 'habilidades', 'proyectos', 'contacto'];
    sections.forEach(id => {
        document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
    });
}
