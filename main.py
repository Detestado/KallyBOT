import asyncio as asyncio
import discord

print("Conectando...")

client = discord.Client()


@client.event
async def on_ready():
    print('')
    print("="*30)
    print("CONECTADO! BOT ONLINE!")
    print(f"{client.user.name} ({client.user.id})")
    print("="*30)



@client.event
async def on_member_join(member):
    serverKally = member.server
    canalKally = client.get_channel("430142996051263490")
    msgKally = f"Bem-vindo {member.mention} ao servidor do bot Kally!\n" \
          f":cop: Qualquer bug do bot reporte para <@244537374258888725>"
    entrouKally = discord.Embed(title=member.name + '#' + member.discriminator, colour=discord.Colour(0x4a90e2),
                           description=f":inbox_tray: {member.mention} entrou no servidor")
    entrouKally.set_thumbnail(url=member.avatar_url)


    if serverKally.id == "420316735149965322":
        roleT = discord.utils.find(lambda r: r.name == "Membro", serverKally.roles)
        await client.add_roles(member, roleT)
        await client.send_message(canalKally, embed=entrouKally)
        await client.send_message(member, msgKally)


@client.event
async def on_member_remove(member):
    canalKally = client.get_channel("430142996051263490")
    server = member.server
    saiuKally = discord.Embed(description=f":outbox_tray: {member.mention} saiu do servidor")
    saiuKally.set_author(name=member.name + '#' + member.discriminator, icon_url=member.avatar_url)
    saiuKally.set_thumbnail(url=member.avatar_url)


    if server.id == "420316735149965322":
        await client.send_message(canalKally, embed=saiuKally)


client.run(process.env.BOT_TOKEN)

