// -----------------------------------------
// Global Variables
// -----------------------------------------
var config = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height:window.innerHeight * window.devicePixelRatio,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var game_width = window.innerWidth;
var game_height = window.innerHeight;

var maid;
var robo_weeb;
var weeb;
var kissesText;
var kisses = 0;
var timedEvent;

// Variables for sprite positioning
var glow_stick_green_posx = 35;
var glow_stick_green_posy = game_height - 250;
var glow_stick_grey_posx = 35;
var glow_stick_grey_posy = game_height - 350;
var glow_stick_red_posx = game_width / 3;
var glow_stick_red_posy = game_height - 250
var glow_stick_blue_posx = game_width / 3;
var glow_stick_blue_posy = game_height - 350;

var fan_green_posx = 35;
var fan_green_posy = 500;
var fan_grey_posx = 35;
var fan_grey_posy = 400;
var fan_red_posx = 450;
var fan_red_posy = 500;
var fan_blue_posx = 450;
var fan_blue_posy = 400;

var turboweeb_posx = 35;
var turboweeb_posy = 300;

var mag_posx = 35;
var mag_poxy = 200;

var akb_poxx = 35;
var akb_posy = 100;

var chad_posx;
var chad_posy;
var super_chad_posx;
var super_chad_posy;

var glow_cnt = 0;
var fan_cnt = 0;

// LUTS for colored sprites
var glow_stick_lut = [
    'green_glow_stick_img',
    'grey_glow_stick_img',
    'red_glow_stick_img',
    'blue_glow_stick_img',
];
var glow_stick_pos_lut = [
    glow_stick_green_posx,
    glow_stick_green_posy,
    glow_stick_grey_posx,
    glow_stick_grey_posy,
    glow_stick_red_posx,
    glow_stick_red_posy,
    glow_stick_blue_posx,
    glow_stick_blue_posy,
];
var fan_lut = [
    'fan_green',
    'fan_grey',
    'fan_red',
    'fan_blue',
]
var fan_pos_lut = [
    fan_green_posx,
    fan_green_posy,
    fan_grey_posx,
    fan_grey_posy,
    fan_red_posx,
    fan_red_posy,
    fan_blue_posx,
    fan_blue_posy,
]

// -----------------------------------------
// Functions
// -----------------------------------------
function preload()
{
    // Load in kisses counter
    this.load.image('kisses_cnt_img', '../assets/kisses_cnt.png');

    // Load buttons
    this.load.image('glow_stick_button_img', '../assets/template_button_pic.png');
    this.load.image('weeb_button_img', '../assets/template_button_pic.png');
    this.load.image('turbo_weeb_button_img', '../assets/template_button_pic.png');
    this.load.image('mag_button_img', '../assets/template_button_pic.png');
    this.load.image('akb_button_img', '../assets/template_button_pic.png');
    this.load.image('maid', '../assets/cute_maid/happy.png');

    // Load glowsticks
    this.load.image('green_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark4.png');
    this.load.image('grey_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark1.png');
    this.load.image('red_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark5.png');
    this.load.image('blue_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark6.png');


    // Load sprites
    this.load.spritesheet('kiss_spritesheet',
        '../assets/lips_spritesheet.png',
        { frameWidth: 75, frameHeight: 150 }
    );

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
    // Set background color
    this.cameras.main.setBackgroundColor(0xF0E1EF);

    maid = this.add.image((game_width - (game_width / 5)), (game_height - 200), 'maid');

    // Create buttons and put them in a container
    var glow_stick_button = this.add.image(0, 0, 'glow_stick_button_img');
    var weeb_button = this.add.image((game_width/10), 0, 'weeb_button_img');
    var turbo_weeb_button = this.add.image(((game_width/10) * 2), 0, 'turbo_weeb_button_img');
    var mag_button = this.add.image(((game_width/10) * 3), 0, 'mag_button_img');
    var akb_button = this.add.image(((game_width/10) * 4), 0, 'akb_button_img');

    var button_container = this.add.container((game_width/20), game_height - 100, [ glow_stick_button, weeb_button, turbo_weeb_button, mag_button, akb_button]);

    // Set interactive buttons
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
        maidClickAction();
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
        spawn('glow_stick');
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
        spawn('weeb');
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
        spawn('turbo_weeb');
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
        spawn('mag');
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
        spawn('akb');
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

    // Sprite spawning
    weeb = this.add.sprite(100, 100, 'fan_blue');
    robo_weeb = this.add.sprite(400, 300, 'mark0').play('run');

    maidClickAction = () => {
        maidClick(this);
    }

    spawn = (spriteName) => {
        createSprite(this, spriteName);
   }

   // Add kisses counter in top left
   kissesText = this.add.text(55,15,'Kisses: 0', { font: '24px Arial', fill: '#b3001e' });
   this.add.image(25, 25, 'kisses_cnt_img');
}

function update()
{
    weeb.anims.play('fan_blue_stance', true);
    kissCountUpdate();
}

function maidClick(supes) {
    // Storing this is an array for some reason fixes the destroy bug...
    var ii = 0;
    var kiss = [];

    kisses += 1;

    supes.anims.create({
        key: 'lick_anim',
        frames: supes.anims.generateFrameNumbers('kiss_spritesheet', { start: 0, end: 13 }),
        frameRate: 17,
        repeat: 0
    });

    var rand_xpos = Math.floor(Math.random() * 100);
    kiss[ii] = supes.add.sprite((game_width - (game_width/5) - 90) + rand_xpos, (game_height - 535), 'kiss_spritesheet').play('lick_anim', false);
    kiss[ii].once('animationcomplete', () => {
        kiss[ii].destroy();
    });
}

function kissCountUpdate(ball, brick) {
    kissesText.setText('Kisses: ' + kisses);
}

var glow_xpos_range = [10, 10, 15, 10];
var glow_ypos_range = [-5, -10, 10, -15, 15, 5];
var glow_pos_cnt = 0;

function createSprite(supes, spriteName) {

    /*
    *  Alloted space for glow sticks
    *  | 35 ---------- (game_width/3) --------- (game_width - gamewidth/3) |
    */
    if(spriteName == 'glow_stick')
    {
        if(glow_stick_pos_lut[6] < (game_width - (game_width/3)))
        {
            supes.add.sprite(glow_stick_pos_lut[glow_cnt * 2], glow_stick_pos_lut[(glow_cnt * 2) + 1], glow_stick_lut[glow_cnt]);

            // Increment glow stick x-y positions, checking for boundaries
            glow_stick_pos_lut[glow_cnt * 2] += glow_xpos_range[glow_pos_cnt % 4];
            glow_stick_pos_lut[(glow_cnt * 2) + 1] += glow_ypos_range[glow_pos_cnt % 6];

            if((glow_cnt % 4) == 0)
            {
                glow_pos_cnt++;
            }
            glow_cnt = (glow_cnt + 1) % 4;
        }
    }
    else if(spriteName == 'weeb')
    {
        supes.add.sprite(400, 500, 'fan_blue');
    }
    else if(spriteName == 'turbo_weeb')
    {

    }
    else if(spriteName == 'mag')
    {

    }
    else if(spriteName == 'akb')
    {

    }
}