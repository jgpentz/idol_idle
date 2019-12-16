var config = {
    type: Phaser.AUTO,
    width: 1200,
    height:800,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

// Character variables
var robo_weeb;

function preload()
{
    // Load in background and characters
    this.load.image('background', '../assets/background.png');
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
    this.add.image(600, 400, 'background');
    this.add.image(700, 675, 'maid');

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


    this.add.sprite(100, 100, 'fan_blue');
    robo_weeb = this.add.sprite(400, 300, 'mark0').play('run');
}

function update()
{

}
