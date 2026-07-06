//aqui es donde defino los tamaños de pantalla a usar 
// para pc, table o celular osea que se responsiva

const sizes = {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
};

export const Device = {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
}
