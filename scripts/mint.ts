import { ethers } from "hardhat"
import { MuriToken } from "../typechain"

async function main() {
  const contractAddress = "0xb16b5d95Dd354B6C3c611aa3D45796066AD06bCf"
  const recipientAddress = "0xc3bB933f2b8130962e4AD4a6Fa3E243E7db94b3A"
  const tokenURI = "https://raw.githubusercontent.com/lambertixx/muritoken/main/metadata.json"

  const MuriToken = await ethers.getContractFactory("MuriToken")
  const muritoken: MuriToken = MuriToken.attach(contractAddress) as MuriToken

  const mintTx = await muritoken.safeMint(recipientAddress, tokenURI)
  await mintTx.wait()

  console.log(`NFT mintado para ${recipientAddress}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
