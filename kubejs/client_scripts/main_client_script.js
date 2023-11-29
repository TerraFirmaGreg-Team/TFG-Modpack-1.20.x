// priority: 1

REIEvents.hide('item', event => {
    hideMinecraftStuff(event)
    hideTFCStuff(event)
    hideGTCEUStuff(event)
    hideCreateStuff(event)
    hideAE2Stuff(event)
    hideExtendedCraftingStuff(event)
    hideSophisticatedBackpacksStuff(event)
    hideMoreRedStuff(event)
    hideSmallShipsStuff(event)
})

REIEvents.groupEntries(event => {
    groupGTCEUStuff(event)
    groupTFCStuff(event)
})

REIEvents.removeCategories(event => {
    registerGTCEUCategories(event)
    registerMoreRedCategories(event)
})
