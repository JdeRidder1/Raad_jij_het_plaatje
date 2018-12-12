class Animal
{
    private readonly name: string
    private readonly legs: number
    private readonly sound: string

    public constructor(name: string, legs: number, sound: string)
    {
        this.name = name
        this.legs = legs
        this.sound = sound
    }

    public getName(): string
    {
        return this.name
    }

    public getLegs(): number
    {
        return this.legs
    }

    public getSound(): string
    {
        return this.sound
    }
}

const animals = [
     new Animal('dog', 4, 'woof'),
     new Animal('cat', 4, 'meow')
]

animals.forEach(
    (animal) => console.log(
        'A %s has %s legs and goes %s!',
        animal.getName(),
        animal.getLegs(),
        animal.getSound()
    )
)
