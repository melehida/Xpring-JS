import { Wallet } from 'xpring-common-js'
import { XpringClientDecorator } from './xpring-client-decorator'
import LegacyDefaultXpringClient from './legacy/legacy-default-xpring-client'
import LegacyDefaultXpringClientWeb from './legacy/legacy-default-xpring-client.web'
import TransactionStatus from './transaction-status'
import ReliableSubmissionXpringClient from './reliable-submission-xpring-client'
import DefaultXpringClient from './default-xpring-client'
import DefaultXpringClientWeb from './default-xpring-client.web'
import isNode from './utils'
/**
 * XpringClient is a client which interacts with the Xpring platform.
 */
class XpringClient {
  private readonly decoratedClient: XpringClientDecorator

  /**
   * Create a new XpringClient.
   *
   * The XpringClient will use gRPC to communicate with the given endpoint.
   *
   * @param grpcURL The URL of the gRPC instance to connect to.
   * @param useNewProtocolBuffers If `true`, then the new protocol buffer implementation from rippled will be used. Defaults to false.
   */
  public constructor(
    grpcURL: string,
    useNewProtocolBuffers = false,
    forceHttp = false,
  ) {
    let defaultXpringClient: XpringClientDecorator
    if (useNewProtocolBuffers) {
      if (isNode() && !forceHttp) {
        defaultXpringClient = DefaultXpringClient.defaultXpringClientWithEndpoint(
          grpcURL,
        )
      } else {
        defaultXpringClient = DefaultXpringClientWeb.defaultXpringClientWithEndpoint(
          grpcURL,
        )
      }
    } else if (isNode() && !forceHttp) {
      defaultXpringClient = LegacyDefaultXpringClient.defaultXpringClientWithEndpoint(
        grpcURL,
      )
    } else {
      defaultXpringClient = LegacyDefaultXpringClientWeb.defaultXpringClientWithEndpoint(
        grpcURL,
      )
    }

    this.decoratedClient = new ReliableSubmissionXpringClient(
      defaultXpringClient,
    )
  }

  /**
   * Retrieve the balance for the given address.
   *
   * @param address The X-Address to retrieve a balance for.
   * @returns A `BigInt` representing the number of drops of XRP in the account.
   */
  public async getBalance(address: string): Promise<BigInt> {
    return this.decoratedClient.getBalance(address)
  }

  /**
   * Retrieve the transaction status for a given transaction hash.
   *
   * @param transactionHash The hash of the transaction.
   * @returns The status of the given transaction.
   */
  public async getTransactionStatus(
    transactionHash: string,
  ): Promise<TransactionStatus> {
    return this.decoratedClient.getTransactionStatus(transactionHash)
  }

  /**
   * Send the given amount of XRP from the source wallet to the destination address.
   *
   * @param drops A `BigInt`, number or numeric string representing the number of drops to send.
   * @param destination A destination address to send the drops to.
   * @param sender The wallet that XRP will be sent from and which will sign the request.
   * @returns A promise which resolves to a string representing the hash of the submitted transaction.
   */
  public async send(
    amount: BigInt | number | string,
    destination: string,
    sender: Wallet,
  ): Promise<string> {
    return this.decoratedClient.send(amount, destination, sender)
  }
}

export default XpringClient
