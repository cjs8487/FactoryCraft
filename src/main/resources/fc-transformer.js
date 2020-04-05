/**
 * This function is called by Forge before any Minecraft classes are loaded to
 * setup the coremod
 *
 * @return {object} All the transformers of this coremod
 */
function initializeCoreMod() {
    Opcodes = Java.type("org.objectweb.asm.Opcodes");
    ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");


    return {

    };
}