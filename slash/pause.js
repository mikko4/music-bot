const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Pauses the currently playing songs"),

  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
      return await interaction.editReply("No songs in the queue");
    }

    queue.setPaused(true);
    await interaction.editReply("Paused! Use '/resume' to play.");
  },
};
