// -----------------------------------------
// Global Variables
// -----------------------------------------
var config = {
    type: Phaser.AUTO,
    width: 1200,
    height:900,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var robo_weeb;
var weeb;

// -----------------------------------------
// Functions
// -----------------------------------------
function preload()
{
    // Variable declarations

    // Load in background and characters
    this.load.image('background', '../assets/background.png');
    this.load.image('glow_stick_button_img', '../assets/template_button_pic.png');
    this.load.image('weeb_button_img', '../assets/template_button_pic.png');
    this.load.image('turbo_weeb_button_img', '../assets/template_button_pic.png');
    this.load.image('mag_button_img', '../assets/template_button_pic.png');
    this.load.image('akb_button_img', '../assets/template_button_pic.png');
    this.load.image('maid', '../assets/cute_maid/happy.png');
    this.load.spritesheet('fan_blue',
        '../assets/assets/player/player-spritemap-v9.png',
        { frameWidth: 46, frameHeight: 50 }
    );
    this.load.spritesheet('fan_green',
        '../assets/assets/player/player-spritemap-v9-greenpants.png',
        { frameWidth: 46, frameHeight: 50 }
    );
    this.load.spritesheet('fan_grey',
        '../assets/assets/player/player-spritemap-v9-greypants.png',
        { frameWidth: 46, frameHeight: 50 }
    );
    this.load.spritesheet('fan_red',
        '../assets/assets/player/player-spritemap-v9-redpants.png',
        { frameWidth: 46, frameHeight: 50 }
    );

    // Load Mark images for the animation
    this.load.image('mark0', '../assets/CyborgMark/Takbo/TakboMark_000.png')
    this.load.image('mark1', '../assets/CyborgMark/Takbo/TakboMark_001.png')
    this.load.image('mark2', '../assets/CyborgMark/Takbo/TakboMark_002.png')
    this.load.image('mark3', '../assets/CyborgMark/Takbo/TakboMark_003.png')
    this.load.image('mark4', '../assets/CyborgMark/Takbo/TakboMark_004.png')
    this.load.image('mark5', '../assets/CyborgMark/Takbo/TakboMark_005.png')
    this.load.image('mark6', '../assets/CyborgMark/Takbo/TakboMark_006.png')
    this.load.image('mark7', '../assets/CyborgMark/Takbo/TakboMark_007.png')
    this.load.image('mark8', '../assets/CyborgMark/Takbo/TakboMark_008.png')
    this.load.image('mark9', '../assets/CyborgMark/Takbo/TakboMark_009.png')
    this.load.image('mark10', '../assets/CyborgMark/Takbo/TakboMark_010.png')
    this.load.image('mark11', '../assets/CyborgMark/Takbo/TakboMark_011.png')
}

function create()
{
    this.add.image(600, 450, 'background');
    var maid = this.add.image(1000, 750, 'maid');

    // Create left container for clickable buttons
    var glow_stick_button = this.add.image(0, 0, 'glow_stick_button_img');
    var weeb_button = this.add.image(160, 0, 'weeb_button_img');
    var turbo_weeb_button = this.add.image(320, 0, 'turbo_weeb_button_img');
    var mag_button = this.add.image(480, 0, 'mag_button_img');
    var akb_button = this.add.image(640, 0, 'akb_button_img');

    var button_container = this.add.container(100, 815, [ glow_stick_button, weeb_button, turbo_weeb_button, mag_button, akb_button]);

    maid.setInteractive();

    glow_stick_button.setInteractive();
    weeb_button.setInteractive();
    turbo_weeb_button.setInteractive();
    mag_button.setInteractive();
    akb_button.setInteractive();

    // Maid actions
    maid.on('pointerover', function() {
        this.setTint(0xb3001e);
    });

    maid.on('pointerout', function() {
        this.clearTint();
    });

    maid.on('pointerdown', function() {
        this.setTint(0xff8095);
    });

    maid.on('pointerup', function() {
        this.setTint(0xb3001e);
    });

    // Glow stick button actions
    glow_stick_button.on('pointerover', function() {
        this.setTint(0xb3001e);
    });

    glow_stick_button.on('pointerout', function() {
        this.clearTint();
    });

    glow_stick_button.on('pointerdown', function() {
        this.setTint(0xff8095);
    });

    glow_stick_button.on('pointerup', function() {
        this.setTint(0xb3001e);
        spawn('fan_blue');
    });

    // Weeb button actions
    weeb_button.on('pointerover', function() {
        this.setTint(0xb3001e);
    });

    weeb_button.on('pointerout', function() {
        this.clearTint();
    });

    weeb_button.on('pointerdown', function() {
        this.setTint(0xff8095);
    });

    weeb_button.on('pointerup', function() {
        this.setTint(0xb3001e);
    });

    // Turbo weeb button actions
    turbo_weeb_button.on('pointerover', function() {
        this.setTint(0xb3001e);
    });

    turbo_weeb_button.on('pointerout', function() {
        this.clearTint();
    });

    turbo_weeb_button.on('pointerdown', function() {
        this.setTint(0xff8095);
    });

    turbo_weeb_button.on('pointerup', function() {
        this.setTint(0xb3001e);
    });

    // Meet and greet button actions
    mag_button.on('pointerover', function() {
        this.setTint(0xb3001e);
    });

    mag_button.on('pointerout', function() {
        this.clearTint();
    });

    mag_button.on('pointerdown', function() {
        this.setTint(0xff8095);
    });

    mag_button.on('pointerup', function() {
        this.setTint(0xb3001e);
    });

    // Akb48 button actions
    akb_button.on('pointerover', function() {
        this.setTint(0xb3001e);
    });

    akb_button.on('pointerout', function() {
        this.clearTint();
    });

    akb_button.on('pointerdown', function() {
        this.setTint(0xff8095);
    });

    akb_button.on('pointerup', function() {
        this.setTint(0xb3001e);
    });

    this.anims.create({
        key: 'run',
        frames: [
            { key: 'mark0' },
            { key: 'mark1' },
            { key: 'mark2' },
            { key: 'mark3' },
            { key: 'mark4' },
            { key: 'mark5' },
            { key: 'mark6' },
            { key: 'mark7' },
            { key: 'mark8' },
            { key: 'mark9' },
            { key: 'mark10' },
            { key: 'mark11', duration: 50 }
        ],
        frameRate: 65,
        repeat: -1
    });

    // Animations for blue character
    this.anims.create({
        key: 'fan_blue_stance',
        frames: this.anims.generateFrameNumbers('fan_blue', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'fan_blue_knee',
        frames: this.anims.generateFrameNumbers('fan_blue', { start: 8, end: 13 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'fan_blue_slide',
        frames: this.anims.generateFrameNumbers('fan_blue', { start: 16, end: 21 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'fan_blue_run',
        frames: this.anims.generateFrameNumbers('fan_blue', { start: 24, end: 31 }),
        frameRate: 10,
        repeat: -1
    });

    weeb = this.add.sprite(100, 100, 'fan_blue');
    robo_weeb = this.add.sprite(400, 300, 'mark0').play('run');

    spawn = (spriteName) => {
        createSprite(this, spriteName);
    }
}

function update()
{
    weeb.anims.play('fan_blue_stance', true);
    // weeb.anims.play('fan_blue_knee', true);
    // weeb.anims.play('fan_blue_slide', true);
    // weeb.anims.play('fan_blue_run', true);
}

function createSprite(create, spriteName) {
    newSprite = create.add.sprite(500, 500, spriteName);
}