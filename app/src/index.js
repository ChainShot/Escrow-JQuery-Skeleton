import approve from './contract/approve';
import deploy from './contract/deploy';
import {web3} from "./contract/web3Util";
import $ from 'jquery';

$('#deploy').on('click', () => {
  const [ether, arbiter, beneficiary] = ['ether', 'arbiter', 'beneficiary'].map(x => $(`#${x}`).val());
  const $transactionList = $('#deployment-transactions');
  const $transaction = $('<li> Transaction Pending... </li>');

  if (web3) {
      web3.eth.getAccounts().then((accounts) => {
          let account = accounts[0];
          if (account) {
              $transactionList.append($transaction);
              deploy(+ether, arbiter, beneficiary, account).then(({options}) => {
                  const {address} = options;
                  $transaction
                    .attr("class", "alert alert-success")
                    .text(`Escrow deployed to ${address}.`)
              }).catch((err) => {
                  $transaction
                    .attr("class", "alert alert-danger")
                    .text('Transaction Failed.')
                  alert(err);
              });
          }
      })
  }
})

$('#approve').on('click', () => {
  const escrowAddress = $('#escrow').val();
  const $transactionList = $('#approve-transactions');
  const $transaction = $('<li> Transaction Pending... </li>');

  if (web3) {
      web3.eth.getAccounts().then((accounts) => {
          let account = accounts[0];
          if (account) {
              $transactionList.append($transaction);
              approve(escrowAddress, account).then(() => {
                  alert(`Approval was successful!`);
                  $transaction
                    .attr("class", "alert alert-success")
                    .text(`Escrow at ${escrowAddress} was approved!`);
              }).catch((err) => {
                  $transaction
                    .attr("class", "alert alert-danger")
                    .text(`Escrow at ${escrowAddress}, transaction failed.`);
                  alert(err);
              });
          }
      })
  }
})
