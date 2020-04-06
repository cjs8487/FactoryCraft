/**
 * This function is called by Forge before any Minecraft classes are loaded to
 * setup the coremod
 *
 * @return {object} All the transformers of this coremod
 */
function initializeCoreMod() {
    Opcodes = Java.type("org.objectweb.asm.Opcodes");
    ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");

    InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
    VarInsnNode = Java.type("org.objectweb.asm.tree.VarInsnNode");
    MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");

    INVOKESTATIC = Opcodes.INVOKESTATIC;

    ARETURN = Opcodes.ARETURN;

    ACONST_NULL = Opcodes.ACONST_NULL;

    return {
        "RecipeManager.getRecipe": {
            "target": {
                "type": "METHOD",
                "class": "net.minecraft.item.crafting.RecipeManager",
                "methodName": "getRecipe",
                "methodDesc": "(Lnet/minecraft/item/crafting/IRecipeType;Lnet/minecraft/inventory/IInventory;Lnet/minecraft/world/World;)Ljava/util/Optional;"
            },
            "transformer": function (methodNode) {
                var instructions = methodNode.instructions;
                instructions.clear();
                instructions.add(new MethodInsnNode(INVOKESTATIC,
                    "java/util/Optional",
                    "empty",
                    "()Ljava/util/Optional;",
                    false));
                instructions.add(new InsnNode(ARETURN));
                return methodNode;
            }
        }
    };
}