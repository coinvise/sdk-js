export class UnsupportedChainError extends Error {
  constructor(message = "Lengths do not match between addresses and amounts") {
    super(message)
  }
}
