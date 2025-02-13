import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
const expect = chai.expect
import { ethers } from 'hardhat'
import { BigNumber, Contract, ContractFactory, utils } from 'ethers'

import { OptimismEnv } from './shared/env'

describe('Self Destruct Tests', async () => {
  let env: OptimismEnv

  let SelfDestructTest: Contract

  let Factory__Create2Deployer: ContractFactory
  let Create2Deployer: Contract

  const supplyAmount = utils.parseEther('1')

  let balanceSelfDestructContractPre: BigNumber
  let balanceSelfDestructContractPost: BigNumber
  let balanceReceiverPre: BigNumber
  let balanceReceiverPost: BigNumber
  let SelfDestructTestAddress: string

  before(async () => {
    env = await OptimismEnv.new()

    Factory__Create2Deployer = await ethers.getContractFactory(
      'Create2Deployer',
      env.l2Wallet
    )

    Create2Deployer = await Factory__Create2Deployer.deploy()
    await Create2Deployer.deployTransaction.wait()

    await Create2Deployer.deploy()
    SelfDestructTestAddress = await Create2Deployer.t()

    SelfDestructTest = await ethers.getContractAt(
      'TestSelfDestruct',
      SelfDestructTestAddress,
      env.l2Wallet
    )
  })

  describe('When funds are added', async () => {
    before(async () => {
      // supply the contract with some funds
      await env.l2Wallet.sendTransaction({
        to: SelfDestructTest.address,
        value: supplyAmount,
      })
    })

    it('should send funds to the contract', async () => {
      balanceSelfDestructContractPre = await env.l2Provider.getBalance(
        SelfDestructTest.address
      )
      expect(balanceSelfDestructContractPre).to.be.eq(supplyAmount)
    })

    describe('When the contract is self destructed', async () => {
      before(async () => {
        balanceReceiverPre = await env.l2Provider.getBalance(
          env.l2Wallet_2.address
        )
        await SelfDestructTest.suicideMethod(env.l2Wallet_2.address)
      })

      it('should send all contract funds to receiver', async () => {
        balanceSelfDestructContractPost = await env.l2Provider.getBalance(
          SelfDestructTest.address
        )
        balanceReceiverPost = await env.l2Provider.getBalance(
          env.l2Wallet_2.address
        )

        expect(balanceSelfDestructContractPost).to.be.eq(0)
        expect(balanceReceiverPost).to.be.eq(
          balanceReceiverPre.add(supplyAmount)
        )
      })

      describe('When the contract is re-created on same address', async () => {
        before(async () => {
          await Create2Deployer.deploy()
        })

        it('should not have funds to send', async () => {
          const SelfDestructTestAddressReCreated = await Create2Deployer.t()
          expect(SelfDestructTestAddressReCreated).to.be.eq(
            SelfDestructTestAddress
          )
          const SelfDestructTestReCreated = await ethers.getContractAt(
            'TestSelfDestruct',
            SelfDestructTestAddressReCreated,
            env.l2Wallet
          )

          expect(
            await env.l2Provider.getBalance(SelfDestructTestReCreated.address)
          ).to.be.eq(0)
          await SelfDestructTestReCreated.suicideMethod(env.l2Wallet_2.address)
          const balanceSelfDestructTestReCreated =
            await env.l2Provider.getBalance(SelfDestructTestReCreated.address)
          const balanceReceiverReCreatedPost = await env.l2Provider.getBalance(
            env.l2Wallet_2.address
          )

          expect(balanceSelfDestructTestReCreated).to.be.eq(0)
          expect(balanceReceiverReCreatedPost).to.be.eq(balanceReceiverPost)
        })
      })
    })
  })
})
