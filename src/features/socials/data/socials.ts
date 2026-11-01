export interface Social {
  id: string
  name: string
  username: string
  url: string
  icon: string
}

export const socials: Social[] = [
  {
    id: 'github',
    name: 'GitHub',
    username: 'Nordiumm',
    url: 'https://github.com/Nordiumm',
    icon: 'github',
  },
  {
    id: 'modrinth',
    name: 'Modrinth',
    username: 'Nordiumm',
    url: 'https://modrinth.com/user/Nordiumm',
    icon: 'modrinth',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    username: 'Nordiumm',
    url: 'https://www.youtube.com/@Nordiumm',
    icon: 'youtube',
  },
  {
    id: 'twitch',
    name: 'Twitch',
    username: 'Nordiumm',
    url: 'https://www.twitch.tv/nordiumm',
    icon: 'twitch',
  },
  {
    id: 'steam',
    name: 'Steam',
    username: 'Nordiumm',
    url: 'https://steamcommunity.com/id/nordiumm/',
    icon: 'steam',
  },
  {
    id: 'x',
    name: 'X',
    username: 'NordiummDev',
    url: 'https://x.com/nordiummdev',
    icon: 'twitter',
  },
]