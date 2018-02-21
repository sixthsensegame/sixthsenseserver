module.exports = class entity {
    constructor(config, x, y, z, w, h, face) {
        this.config = config;

        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.h = h;

        this.face = face;
    }
}
