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

var timer_glow = [];
var timer_fan = [];
var timer_turbo_weeb = [];
var timer_mag = [];
var timer_akb = [];

var counter_tot_glow = 0;
var counter_tot_fan = 0;
var counter_tot_turbo_weeb = 0;
var counter_tot_mag = 0;
var counter_tot_akb = 0;


// Variables for sprite positioning
var glow_stick_green_posx = 35;
var glow_stick_green_posy = game_height - 225;
var glow_stick_yellow_posx = 35;
var glow_stick_yellow_posy = game_height - 290;
var glow_stick_red_posx = game_width / 3;
var glow_stick_red_posy = game_height - 225;
var glow_stick_blue_posx = game_width / 3;
var glow_stick_blue_posy = game_height - 290;

var fan_green_posx = 35;
var fan_green_posy = game_height - 370;
var fan_yellow_posx = 35;
var fan_yellow_posy = game_height - 450;
var fan_red_posx = game_width / 3;
var fan_red_posy = game_height - 370;
var fan_blue_posx = game_width / 3;
var fan_blue_posy = game_height - 450;

var turbo_weeb_posx = 35;
var turbo_weeb_posy = game_height - 555;

var mag_posx = 55;
var mag_posy = game_height - 645;

var akb_posx = 95;
var akb_posy = game_height - 750;

var chad_posx;
var chad_posy;
var super_chad_posx;
var super_chad_posy;

// LUT counters
var glow_cnt = 0;
var fan_cnt = 0;
var turbo_weeb_cnt = 0;
var mag_cnt = 0;
var akb_cnt = 0;

// Glow stick LUTs
var glow_stick_lut = [
    'green_glow_stick_img',
    'yellow_glow_stick_img',
    'red_glow_stick_img',
    'blue_glow_stick_img',
];
var glow_stick_pos_lut = [
    glow_stick_green_posx,
    glow_stick_green_posy,
    glow_stick_yellow_posx,
    glow_stick_yellow_posy,
    glow_stick_red_posx,
    glow_stick_red_posy,
    glow_stick_blue_posx,
    glow_stick_blue_posy,
];

// Fan LUTs
var fan_lut = [
    'spritesheet_fan_green',
    'spritesheet_fan_yellow',
    'spritesheet_fan_red',
    'spritesheet_fan_blue',
];
var fan_anim_lut = [
    'anim_fan_green',
    'anim_fan_yellow',
    'anim_fan_red',
    'anim_fan_blue',
];
var fan_pos_lut = [
    fan_green_posx,
    fan_green_posy,
    fan_yellow_posx,
    fan_yellow_posy,
    fan_red_posx,
    fan_red_posy,
    fan_blue_posx,
    fan_blue_posy,
];

// Turbo weeb LUTs
var turbo_weeb_pos_lut = [
    turbo_weeb_posx,
    turbo_weeb_posy,
];

// MAG LUTs
var mag_pos_lut = [
    mag_posx,
    mag_posy,
];

// AKB LUTs
var akb_pos_lut = [
    akb_posx,
    akb_posy,
];

// -----------------------------------------
// Functions
// -----------------------------------------
function preload()
{
    // Load in kisses counter
    this.load.image('kisses_cnt_img', '../assets/kisses_cnt.png');

    // Load buttons
    this.load.image('glow_stick_button_img', '../assets/glowstick_button.png');
    this.load.image('weeb_button_img', '../assets/fan_button_pic.png');
    this.load.image('turbo_weeb_button_img', '../assets/turbo_weeb_button_pic.png');
    this.load.image('mag_button_img', '../assets/mag_button_pic.png');
    this.load.image('akb_button_img', '../assets/akb48_button_pic.png');
    this.load.image('maid', '../assets/cute_maid/happy.png');

    // Load glowsticks
    this.load.image('green_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark4.png');
    this.load.image('yellow_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark1.png');
    this.load.image('red_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark5.png');
    this.load.image('blue_glow_stick_img', '../assets/Ardentryst-GUICursorsArrowsIconsMarkers/Ardentryst-Mark6.png');

    this.load.image('akb_img', '../assets/akb48.png');

    // Load sprites
    this.load.spritesheet('kiss_spritesheet',
        '../assets/lips_spritesheet.png',
        { frameWidth: 75, frameHeight: 150 }
    );

    // Fan Sprites
    this.load.spritesheet('spritesheet_fan_green',
        '../assets/weebs/spritesheet_fan_green.png',
        { frameWidth: 80, frameHeight: 80 }
    );


    this.load.spritesheet('spritesheet_fan_yellow',
        '../assets/weebs/spritesheet_fan_yellow.png',
        { frameWidth: 80, frameHeight: 80 }
    );


    this.load.spritesheet('spritesheet_fan_red',
        '../assets/weebs/spritesheet_fan_red.png',
        { frameWidth: 80, frameHeight: 80 }
    );

    this.load.spritesheet('spritesheet_fan_blue',
        '../assets/weebs/spritesheet_fan_blue.png',
        { frameWidth: 80, frameHeight: 80 }
    );

    // Load Mark images for the animation
    this.load.image('mark0', '../assets/CyborgMark/Takbo/TakboMark_000.png');
    this.load.image('mark1', '../assets/CyborgMark/Takbo/TakboMark_001.png');
    this.load.image('mark2', '../assets/CyborgMark/Takbo/TakboMark_002.png');
    this.load.image('mark3', '../assets/CyborgMark/Takbo/TakboMark_003.png');
    this.load.image('mark4', '../assets/CyborgMark/Takbo/TakboMark_004.png');
    this.load.image('mark5', '../assets/CyborgMark/Takbo/TakboMark_005.png');
    this.load.image('mark6', '../assets/CyborgMark/Takbo/TakboMark_006.png');
    this.load.image('mark7', '../assets/CyborgMark/Takbo/TakboMark_007.png');
    this.load.image('mark8', '../assets/CyborgMark/Takbo/TakboMark_008.png');
    this.load.image('mark9', '../assets/CyborgMark/Takbo/TakboMark_009.png');
    this.load.image('mark10', '../assets/CyborgMark/Takbo/TakboMark_010.png');
    this.load.image('mark11', '../assets/CyborgMark/Takbo/TakboMark_011.png');

    // Load MAG spritesheet
    this.load.spritesheet('spritesheet_mag',
        '../assets/mag_spritesheet.png',
        { frameWidth: 100, frameHeight: 100 }
    );
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

      // --------------- Buttons --------------
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
        key: 'anim_turbo_weeb',
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
        frameRate: 100,
        repeat: -1
    });

    // --------------- Animations --------------
    // Animations for green character
    this.anims.create({
        key: 'anim_fan_green',
        frames: this.anims.generateFrameNumbers('spritesheet_fan_green', { start: 0, end: 20 }),
        frameRate: 5,
        repeat: -1
    });

    // Animations for yellow character
    this.anims.create({
        key: 'anim_fan_yellow',
        frames: this.anims.generateFrameNumbers('spritesheet_fan_yellow', { start: 0, end: 20 }),
        frameRate: 5,
        repeat: -1
    });

    // Animations for red character
    this.anims.create({
        key: 'anim_fan_red',
        frames: this.anims.generateFrameNumbers('spritesheet_fan_red', { start: 0, end: 20 }),
        frameRate: 5,
        repeat: -1
    });

    // Animations for blue character
    this.anims.create({
        key: 'anim_fan_blue',
        frames: this.anims.generateFrameNumbers('spritesheet_fan_blue', { start: 0, end: 20 }),
        frameRate: 5,
        repeat: -1
    });

    // Animations for mag
    this.anims.create({
        key: 'anim_mag',
        frames: this.anims.generateFrameNumbers('spritesheet_mag', { start: 0, end: 11 }),
        frameRate: 5,
        repeat: -1
    });

    // Click events
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
    kissCountUpdate();
}

function updateGlowKisses()
{
    kisses += 1;
}
function updateFanKisses()
{
    kisses += 5;
}
function updateTurboWeebKisses()
{
    kisses += 100;
}
function updateMagKisses()
{
    kisses += 10000;
}
function updateAkbKisses()
{
    kisses += 100000;
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

var fan_xpos_range = [25, 25, 25, 25];
var fan_ypos_range = [-15, -20, 20, -25, 25, 15];
var fan_pos_cnt = 0;

function createSprite(supes, spriteName) {
    if(spriteName == 'glow_stick')
    {
        if(kisses >= 25)
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

            timer_glow[counter_tot_glow] = supes.time.addEvent({ delay: 500, callback: updateGlowKisses, callbackScope: supes, loop: true });
            kisses -= 25;
        }

    }
    else if(spriteName == 'weeb')
    {
        if(kisses >= 500)
        {
            if(fan_pos_lut[6] < (game_width - (game_width/3)))
            {
                supes.add.sprite(fan_pos_lut[fan_cnt * 2], fan_pos_lut[(fan_cnt * 2) + 1], fan_lut[fan_cnt]).play(fan_anim_lut[fan_cnt]);

                // Increment fan x-y positions, checking for boundaries
                fan_pos_lut[fan_cnt * 2] += fan_xpos_range[fan_pos_cnt % 4];
                fan_pos_lut[(fan_cnt * 2) + 1] += fan_ypos_range[fan_pos_cnt % 6];

                if((fan_cnt % 4) == 0)
                {
                    fan_pos_cnt++;
                }
                fan_cnt = (fan_cnt + 1) % 4;
            }

            timer_fan[counter_tot_fan] = supes.time.addEvent({ delay: 1000, callback: updateFanKisses, callbackScope: supes, loop: true });
            counter_tot_fan += 1;
            kisses -= 500;
        }
    }
    else if(spriteName == 'turbo_weeb')
    {
        if(kisses >= 10000)
        {
            if(turbo_weeb_pos_lut[0] < (game_width - (game_width/3)))
            {
                supes.add.sprite(turbo_weeb_pos_lut[0], turbo_weeb_pos_lut[1], 'mark0').play('anim_turbo_weeb');

                turbo_weeb_pos_lut[0] += 50;
            }

            timer_fan[counter_tot_fan] = supes.time.addEvent({ delay: 2000, callback: updateTurboWeebKisses, callbackScope: supes, loop: true });
            counter_tot_fan += 1;
            kisses -= 10000;
        }
    }
    else if(spriteName == 'mag')
    {
        if(kisses >= 100000)
        {
            if(mag_pos_lut[0] < (game_width - (game_width/3)))
            {
                supes.add.sprite(mag_pos_lut[0], mag_pos_lut[1], 'spritesheet_mag').play('anim_mag');

                mag_pos_lut[0] += 105;
            }

            timer_mag[counter_tot_mag] = supes.time.addEvent({ delay: 5000, callback: updateMagKisses, callbackScope: supes, loop: true });
            counter_tot_mag += 1;
            kisses -= 100000;
        }
    }
    else if(spriteName == 'akb')
    {
        if(kisses >= 1000000)
        {
            if(akb_pos_lut[0] < (game_width - (game_width/3)))
            {
                supes.add.sprite(akb_pos_lut[0], akb_pos_lut[1], 'akb_img');

                akb_pos_lut[0] += 175;
            }

            timer_akb[counter_tot_akb] = supes.time.addEvent({ delay: 10000, callback: updateAkbKisses, callbackScope: supes, loop: true });
            counter_tot_akb += 1;
            kisses -= 1000000;
        }
    }
}