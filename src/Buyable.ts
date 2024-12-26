export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly author?: string,
    readonly pages?: number    
}