//CHARACTER MODEL

export type AbilityScores = {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

export type Feature = {
  name: string
  description: string
}

export type Spell = {
  name: string
  description: string
}

export type Character = {
  _id: string
  name: string
  class: string
  race: string
  level: number
  hp: number
  hitDie: string
  primaryAbility: string
  speed: number
  armourClass: number
  abilities: AbilityScores
  proficiencyBonus: number
  proficientSkills: string[]
  proficientSavingThrows: string[]
  items: string[]
  features: Feature[]
  spells: Spell[]
}
