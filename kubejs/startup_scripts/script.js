// priority: 0

//console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	//event.create('example_item').displayName('Example Item')
	event.create('ic_base').displayName('Placeholder IC').tooltip('Only intended for use as a placeholder. No IC value.').rarity('uncommon').fireResistant(true)
	event.create('ic_g1').displayName('IC [GRADE 1]').tooltip('One of these coins is equivalent in value to 1 IC.').rarity('rare').fireResistant(true)
	event.create('ic_g2').displayName('IC [GRADE 2]').tooltip('One of these coins is equivalent in value to 8 IC.').rarity('rare').fireResistant(true)
	event.create('ic_g3').displayName('IC [GRADE 3]').tooltip('One of these coins is equivalent in value to 64 IC.').rarity('rare').fireResistant(true)
	event.create('ic_g4').displayName('IC [GRADE 4]').tooltip('One of these coins is equivalent in value to 512 IC.').rarity('rare').fireResistant(true)
	event.create('ic_g5').displayName('IC [GRADE 5]').tooltip('One of these coins is equivalent in value to 4,096 IC.').rarity('rare').fireResistant(true)
	event.create('ic_g6').displayName('IC [GRADE 6]').tooltip('One of these coins is equivalent in value to 32,768 IC.').rarity('rare').fireResistant(true)
	event.create('ic_g7').displayName('IC [GRADE 7]').tooltip('One of these coins is equivalent in value to 262,144 IC.').rarity('rare').fireResistant(true)
	event.create('computer_board').displayName('Computer Board')
	event.create('advanced_computer_board').displayName('Advanced Computer Board')
	event.create('eternal_oculus').displayName('Eternal Oculus')
	event.create('twilight_tincture').displayName('Twilight Tincture').rarity('uncommon')
	event.create('empty_threat').displayName('Empty Threat')
	event.create('mugrootbeer').displayName('Mug Root Beer').rarity('epic')
})

onEvent('block.registry', event => {
	// Register new blocks here
	//event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})