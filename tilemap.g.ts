// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "F1":
            case "F6":return tiles.createTilemap(hex`0c000c000101010101050601010101010101010101050601010101010101010b020404070b01010101010b0204090904070b0101010102040a010108040701010303040601010101050403030909040601010101050409090101080407010102040a010101010b08040303040a0b01010101010b0804040a0b0101010101010101050601010101010d010101010506010101010c`, img`
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
`, [Hero_Adventure_Game_.baseTransparency16,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tileGrass2,Hero_Adventure_Game_.transparency0,Hero_Adventure_Game_.playerSpawn], TileScale.Sixteen);
            case "F2":
            case "F7":return tiles.createTilemap(hex`0c000c000d01010101050601010101010101010101050601010101010101010b020404070b01010101010b0204090904070b0101010102040a010108040701010303040601010101050403030909040601010101050409090101080407010102040a010101010b08040303040a0b01010101010b0804040a0b0101010101010101050601010101010e010101010506010101010c`, img`
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
`, [Hero_Adventure_Game_.baseTransparency16,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tileGrass2,Hero_Adventure_Game_.transparency0,Hero_Adventure_Game_.enemySpawn,Hero_Adventure_Game_.playerSpawn], TileScale.Sixteen);
            case "D1":
            case "D6":return tiles.createTilemap(hex`100010000c11111111111111111111111111110b10150101010101010101010101010112100101010101010101010101010101121001010101010101010101010101011210010101060202020202020601010112100101010202030303030202010101120701010102030101010103020101010a0202020202010102130101020202020202020202020101020401010202020202090303030201010303010102030303081001010102020101010102020101010f1001010106020205010202060101010f1001010103030303010303030101010f1001010101010101010101010101010f1001010101010101010101010101010f0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e14`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [Hero_Adventure_Game_.baseTransparency16,Hero_Adventure_Game_.transparency0,sprites.dungeon.floorDark0,sprites.dungeon.hazardHole,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.hazardSpike,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.chestClosed,Hero_Adventure_Game_.chestSpawn,Hero_Adventure_Game_.enemySpawn], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency1":
            case "tile1":return tile1;
            case "chestSpawn":
            case "tile2":return tile2;
            case "enemySpawn":
            case "tile3":return tile3;
            case "playerSpawn":
            case "tile4":return tile4;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
