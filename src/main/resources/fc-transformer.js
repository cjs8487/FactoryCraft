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
        "RecipeManager.getRecipe": {
            "target" : {
                "type": "METHOD",
                "class": "net.minecraft.item.crafting.RecipeManager",
                "methodName": "getRecipe",
                "methodDesc": "(Lnet/minecraft/item/crafting/IRecipeType;Lnet/minecraft/inventory/IInventory;Lnet/minecraft/world/World;)Ljava/util/Optional;"
            },
            "transformer": function(methodNode) {
                // var instructions = methodNode.instructions;
                // for (var i = 0; i < instructions.size(); i++) {
                //     n = instructions.get(i);
                //     if (n.getOpcode() == ARETURN && index == 0) { //make sure only the first instance of ARETURN is counted
                //         LabelNode l7 = new LabelNode();
                //         m.instructions.insertBefore(n, new VarInsnNode(ALOAD, 1));
                //         m.instructions.insertBefore(n, new MethodInsnNode(INVOKESTATIC, "com/deepwelldevelopment/tmos/core/research/ResearchManager", "doesPlayerHaveCraftingRequisite", "(Lnet/minecraft/item/ItemStack;Lnet/minecraft/inventory/InventoryCrafting;)Z", false));
                //         m.instructions.insertBefore(n, new JumpInsnNode(IFNE, l7));
                //         m.instructions.insertBefore(n, new FieldInsnNode(GETSTATIC, "net/minecraft/item/ItemStack", "EMPTY", "Lnet/minecraft/item/ItemStack;"));
                //         m.instructions.insertBefore(n, new InsnNode(ARETURN));
                //         m.instructions.insertBefore(n, l7);
                //         m.instructions.insertBefore(n, new VarInsnNode(ALOAD, 4));
                //         m.instructions.insertBefore(n, new VarInsnNode(ALOAD, 1));
                //         m.instructions.insertBefore(n, new MethodInsnNode(INVOKEINTERFACE, "net/minecraft/item/crafting/IRecipe", "getCraftingResult", "(Lnet/minecraft/inventory/InventoryCrafting;)Lnet/minecraft/item/ItemStack;", true));
                //
                //         index++;
                //     }
                // }
                return methodNode;
            }
        }
    };
}