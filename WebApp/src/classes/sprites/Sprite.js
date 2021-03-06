/**
 * Class for Sprite objects
 * @author Deepak Ramalingam
 */
class Sprite {
  /**
   * Constructor to initialize variables
   */
  constructor(props) {
    this.name = props.name;
    this.background = props.background;
    this.repeat = props.repeat || false;
    this.backgroundColor = props.backgroundColor || 0xFF00FF;
    this.x = props.x;
    this.y = props.y;
    this.width = props.width;
    this.height = props.height;
    this.scale = props.scale;
    this.sprite_image = props.sprite_image;
    this.pixi_sprite_object = props.pixi_sprite_object;
    this.added = props.added;
  }
}

export default Sprite;
