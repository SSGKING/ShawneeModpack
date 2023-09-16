// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	//IC coins
	event.shapeless('kubejs:ic_base', ['minecraft:iron_nugget'])
	event.shapeless('kubejs:ic_g2', ['8x kubejs:ic_g1'])
	event.shapeless('kubejs:ic_g3', ['8x kubejs:ic_g2'])
	event.shapeless('kubejs:ic_g4', ['8x kubejs:ic_g3'])
	event.shapeless('kubejs:ic_g5', ['8x kubejs:ic_g4'])
	event.shapeless('kubejs:ic_g6', ['8x kubejs:ic_g5'])
	event.shapeless('kubejs:ic_g7', ['8x kubejs:ic_g6'])
	event.shapeless('8x kubejs:ic_g1', ['kubejs:ic_g2'])
	event.shapeless('8x kubejs:ic_g2', ['kubejs:ic_g3'])
	event.shapeless('8x kubejs:ic_g3', ['kubejs:ic_g4'])
	event.shapeless('8x kubejs:ic_g4', ['kubejs:ic_g5'])
	event.shapeless('8x kubejs:ic_g5', ['kubejs:ic_g6'])
	event.shapeless('8x kubejs:ic_g6', ['kubejs:ic_g7'])
	//other kubejs items
	event.shapeless('4x kubejs:eternal_oculus', ['minecraft:blaze_powder', 'blue_skies:moonstone', 'undergarden:regalium_crystal', '#twilightforest:fiery_vial'])
	event.shapeless('kubejs:eternal_oculus', ['minecraft:blaze_powder', 'botania:ender_air_bottle'])
	event.shapeless('kubejs:twilight_tincture', ['bloodmagic:slate_vial', 'pneumaticcraft:ethanol_bucket', 'undergarden:utherium_crystal', 'botania:manastar'])
	event.shapeless('kubejs:empty_threat', ['minecraft:ender_eye', 'tconstruct:blood_slime', 'minecraft:diamond_sword', 'bloodmagic:soulsnare'])
	event.shaped('kubejs:computer_board', [
		'   ',
		'RCF',
		' I '
	], {
		I: '#forge:plates/iron',
		R: 'minecraft:repeater',
		C: 'thermal:rf_coil',
		F: 'minecraft:comparator'
	})
	event.shaped('kubejs:advanced_computer_board', [
		'HRA',
		'CCC',
		'PPP'
	], {
		P: 'pneumaticcraft:plastic',
		C: 'kubejs:computer_board',
		H: 'pneumaticcraft:heat_sink',
		A: 'refinedstorage:advanced_processor',
		R: 'quark:redstone_randomizer'
	})
	//eye of ender
	event.remove({id: 'minecraft:ender_eye'})
	event.remove({id: 'tconstruct:smeltery/casting/ender/eye'})
	event.shapeless('minecraft:ender_eye', ['minecraft:ender_pearl', 'kubejs:eternal_oculus'])
	//cc computers
	event.remove({id: 'computercraft:computer_normal'})
	event.remove({id: 'computercraft:computer_advanced'})
	event.remove({id: 'computercraft:computer_advanced_upgrade'})
	event.remove({id: 'computercraft:pocket_computer_normal'})
	event.remove({id: 'computercraft:pocket_computer_advanced'})
	event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
	event.shaped('computercraft:computer_normal', [
		'OOO',
		'OCS',
		'OOO'
	], {
		O: 'create:andesite_alloy',
		C: 'kubejs:computer_board',
		S: '#forge:glass_panes'
	})
	event.shaped('computercraft:computer_advanced', [
		'OOO',
		'OCS',
		'OOO'
	], {
		O: '#forge:ingots/brass',
		C: 'kubejs:advanced_computer_board',
		S: 'computercraft:computer_normal'
	})
	event.shaped('computercraft:pocket_computer_normal', [
		' O ',
		' C ',
		' S '
	], {
		O: 'create:andesite_alloy',
		C: 'kubejs:computer_board',
		S: '#forge:glass_panes'
	})
	event.shaped('computercraft:pocket_computer_advanced', [
		' O ',
		' C ',
		' S '
	], {
		O: '#forge:ingots/brass',
		C: 'kubejs:advanced_computer_board',
		S: 'computercraft:pocket_computer_normal'
	})
	//cc misc
	event.remove({id: 'computercraft:speaker'})
	event.remove({id: 'computercraft:disk_drive'})
	event.remove({id: 'computercraft:printer'})
	event.remove({id: 'computercraft:monitor_normal'})
	event.remove({id: 'computercraft:monitor_advanced'})
	event.remove({id: 'computercraft:wireless_modem_normal'})
	event.remove({id: 'computercraft:wireless_modem_advanced'})
	event.remove({id: 'computercraft:wired_modem'})
	event.remove({id: 'computercraft:cable'})
	event.shaped('computercraft:speaker', [
		'OOO',
		'ORC',
		'OOO'
	], {
		O: 'create:andesite_alloy',
		C: 'minecraft:note_block',
		R: 'minecraft:redstone'
	})
	event.shaped('computercraft:disk_drive', [
		'OOO',
		'ORC',
		'OOO'
	], {
		O: 'create:andesite_alloy',
		C: 'refinedstorage:1k_storage_part',
		R: 'minecraft:redstone'
	})
	event.shaped('computercraft:printer', [
		'OOO',
		'ORC',
		'OOO'
	], {
		O: 'create:andesite_alloy',
		C: '#forge:dyes',
		R: 'minecraft:redstone'
	})
	event.shaped('computercraft:monitor_normal', [
		'OOO',
		'ORC',
		'OOO'
	], {
		O: 'create:andesite_alloy',
		C: '#forge:glass_panes',
		R: 'minecraft:redstone'
	})
	event.shaped('computercraft:monitor_advanced', [
		'OOO',
		'ORC',
		'OOO'
	], {
		O: '#forge:ingots/brass',
		C: 'computercraft:monitor_normal',
		R: 'minecraft:redstone'
	})
	event.shaped('computercraft:wireless_modem_normal', [
		' O ',
		'ORO',
		' C '
	], {
		O: 'create:andesite_alloy',
		C: 'minecraft:ender_pearl',
		R: 'minecraft:redstone'
	})
	event.shaped('computercraft:wireless_modem_advanced', [
		' O ',
		'ORO',
		' C '
	], {
		O: '#forge:ingots/brass',
		C: 'computercraft:wireless_modem_normal',
		R: 'minecraft:redstone'
	})
	event.shaped('computercraft:wired_modem', [
		' O ',
		'ORO',
		' C '
	], {
		O: 'create:andesite_alloy',
		C: '#forge:ingots/iron',
		R: 'minecraft:redstone'
	})
	event.shaped('2x computercraft:cable', [
		'   ',
		'IRI',
		'   '
	], {
		I: '#forge:ingots/iron',
		R: 'minecraft:redstone'
	})
	//botania apothecaries
	event.remove({id: 'botania:apothecary_default'})
	event.remove({id: 'botania:apothecary_forest'})
	event.remove({id: 'botania:apothecary_plains'})
	event.remove({id: 'botania:apothecary_mountain'})
	event.remove({id: 'botania:apothecary_fungal'})
	event.remove({id: 'botania:apothecary_swamp'})
	event.remove({id: 'botania:apothecary_desert'})
	event.remove({id: 'botania:apothecary_taiga'})
	event.remove({id: 'botania:apothecary_mesa'})
	event.remove({id: 'botania:apothecary_mossy'})
	event.shaped('botania:apothecary_default', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'minecraft:cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_forest', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_forest_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_plains', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_plains_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_mountain', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_mountain_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_fungal', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_fungal_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_swamp', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_swamp_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_desert', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_desert_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_taiga', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_taiga_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_mesa', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'botania:metamorphic_mesa_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	event.shaped('botania:apothecary_mossy', [
		'RPR',
		' R ',
		'RSR'
	], {
		R: 'minecraft:mossy_cobblestone',
		P: '#botania:petals',
		S: 'blue_skies:soul_fragment'
	})
	//botania terra plate
	event.remove({id: 'botania:terra_plate'})
	event.shaped('botania:terra_plate', [
		'LSL',
		'WBF',
		'EMA'
	], {
		L: 'minecraft:lapis_block',
		B: 'botania:manasteel_block',
		S: 'blue_skies:star_flare',
		W: 'botania:rune_water',
		E: 'botania:rune_earth',
		F: 'botania:rune_fire',
		A: 'botania:rune_air',
		M: 'botania:rune_mana'
	})
	//pneumaticcraft
	event.remove({id: 'pneumaticcraft:pressure_chamber_valve'})
	event.remove({id: 'pneumaticcraft:pressure_chamber_wall'})
	event.shaped('8x pneumaticcraft:pressure_chamber_wall', [
		'NWN',
		'W W',
		'NWN'
	], {
		N: 'blue_skies:falsite_nugget',
		W: 'pneumaticcraft:reinforced_bricks'
	})
	//blood magic
	event.remove({id: 'bloodmagic:blood_altar'})
	event.shaped('bloodmagic:altar', [
		'S S',
		'SPS',
		'GGG'
	], {
		S: 'blue_skies:cinderstone',
		P: 'blue_skies:pyrope_gem',
		G: '#forge:ingots/gold'
	})
	//thermal
	event.remove({id: 'thermal:machine_frame'})
	event.shaped('thermal:machine_frame', [
		'IGI',
		'GTG',
		'HGH'
	], {
		I: '#forge:ingots/iron',
		H: 'blue_skies:horizonite_ingot',
		G: '#forge:glass',
		T: 'thermal:tin_gear'
	})
	//gun mod
	event.remove({id: 'cgm:workbench'})
	event.shaped('cgm:workbench', [
		'CCC',
		'IPI',
		'I I'
	], {
		C: 'minecraft:light_gray_concrete',
		I: 'thermal:iron_plate',
		P: 'pneumaticcraft:plastic'
	})
	//undergarden
	event.remove({id: 'undergarden:catalyst'})
	event.shaped('undergarden:catalyst', [
		'IOG',
		'TDB',
		'GSI'
	], {
		D: 'minecraft:diamond',
		I: '#forge:ingots/iron',
		G: '#forge:ingots/gold',
		O: 'blue_skies:diopside_gem',
		T: 'botania:terrasteel_ingot',
		B: 'bloodmagic:weakbloodorb',
		S: 'minecraft:soul_soil'
	})
	//occultism
	event.remove({id: 'occultism:crafting/divination_rod'})
	event.remove({id: 'occultism:crafting/sacrificial_bowl'})
	event.shaped('occultism:divination_rod', [
		'SGS',
		'SFS',
		' S '
	], {
		S: '#byg:sticks',
		G: 'occultism:spirit_attuned_gem',
		F: 'blue_skies:soul_fragment'
	})
	event.shaped('occultism:sacrificial_bowl', [
		'   ',
		'O O',
		'CCC'
	], {
		O: 'occultism:otherstone',
		C: 'undergarden:cloggrum_ingot'
	})
	//nature's compass
	event.remove({id: 'naturescompass:natures_compass'})
	event.shaped('naturescompass:naturescompass', [
		'SMS',
		'GCB',
		'SKS'
	], {
		C: 'minecraft:compass',
		M: 'twilightforest:magic_map',
		S: '#minecraft:saplings',
		G: 'tconstruct:greenheart_log',
		K: 'tconstruct:skyroot_log',
		B: 'tconstruct:bloodshroom_log'
	})
	//psi
	event.remove({id: 'psi:assembler'})
	event.remove({id: 'psi:programmer'})
	event.remove({id: 'psi:cad_assembly_iron'})
	event.remove({id: 'psi:cad_assembly_gold'})
	event.remove({id: 'psi:cad_assembly_psimetal'})
	event.remove({id: 'psi:cad_assembly_ivory'})
	event.remove({id: 'psi:cad_assembly_ebony'})
	event.shaped('psi:cad_assembler', [
		'OCO',
		'I I',
		'OEO'
	], {
		O: '#forge:obsidian',
		I: '#forge:ingots/iron',
		E: 'tconstruct:ender_slime_crystal_block',
		C: 'cgm:workbench'
	})
	event.shaped('psi:programmer', [
		'OCO',
		'I I',
		'OEO'
	], {
		O: '#forge:obsidian',
		I: '#forge:ingots/iron',
		E: 'tconstruct:ender_slime_crystal_block',
		C: 'computercraft:computer_advanced'
	})
	event.shaped('psi:cad_assembly_iron', [
		'   ',
		'MMS',
		'  M'
	], {
		M: '#forge:ingots/iron',
		S: 'botania:spark'
	})
	event.shaped('psi:cad_assembly_gold', [
		'   ',
		'MMS',
		'  M'
	], {
		M: '#forge:ingots/gold',
		S: 'botania:spark'
	})
	event.shaped('psi:cad_assembly_ivory_psimetal', [
		'   ',
		'MGS',
		'  M'
	], {
		M: 'psi:ivory_psimetal',
		S: 'botania:corporea_spark',
		G: 'psi:cad_assembly_psimetal'
	})
	event.shaped('psi:cad_assembly_ebony_psimetal', [
		'   ',
		'MGS',
		'  M'
	], {
		M: 'psi:ebony_psimetal',
		S: 'botania:corporea_spark',
		G: 'psi:cad_assembly_psimetal'
	})
	//waystones
	event.remove({id: 'waystones:waystone'})
	event.remove({id: 'waystones:mossy_waystone'})
	event.remove({id: 'waystones:mossy_waystone_convert'})
	event.remove({id: 'waystones:sandy_waystone'})
	event.remove({id: 'waystones:sharestone'})
	event.remove({id: 'waystones:clear_sharestone'})
	event.remove({id: 'waystones:white_sharestone'})
	event.remove({id: 'waystones:light_gray_sharestone'})
	event.remove({id: 'waystones:gray_sharestone'})
	event.remove({id: 'waystones:black_sharestone'})
	event.remove({id: 'waystones:pink_sharestone'})
	event.remove({id: 'waystones:red_sharestone'})
	event.remove({id: 'waystones:orange_sharestone'})
	event.remove({id: 'waystones:brown_sharestone'})
	event.remove({id: 'waystones:yellow_sharestone'})
	event.remove({id: 'waystones:lime_sharestone'})
	event.remove({id: 'waystones:green_sharestone'})
	event.remove({id: 'waystones:cyan_sharestone'})
	event.remove({id: 'waystones:light_blue_sharestone'})
	event.remove({id: 'waystones:blue_sharestone'})
	event.remove({id: 'waystones:purple_sharestone'})
	event.remove({id: 'waystones:magenta_sharestone'})
	event.remove({id: 'waystones:warp_plate'})
	event.shaped('waystones:warp_plate', [
		' E ',
		' W ',
		'FPF'
	], {
		P: 'minecraft:stone_pressure_plate',
		F: 'minecraft:chorus_flower',
		W: 'waystones:warp_stone',
		E: 'minecraft:ender_eye'
	})
	//meet your fight
	event.remove({id: 'meetyourfight:haunted_bell'})
	event.remove({id: 'meetyourfight:devils_ante'})
	event.remove({id: 'meetyourfight:fossil_bait'})
	event.shapeless('meetyourfight:haunted_bell', ['create:haunted_bell', 'alexsmobs:soul_heart', 'kubejs:empty_threat'])
	event.shapeless('meetyourfight:devils_ante', ['minecraft:netherite_scrap', 'undergarden:regalium_crystal', 'kubejs:empty_threat'])
	event.shapeless('meetyourfight:fossil_bait', ['alexsmobs:bone_serpent_tooth', 'twilightforest:hydra_chop', 'kubejs:empty_threat'])
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	//twilight forest activator change
	event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', 'kubejs:twilight_tincture')
})