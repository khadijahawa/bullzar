import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { Trans } from "@lingui/macro";


const REWARD_TOKEN_ADDRESSES = "0x9608F9182e896c534C74b8D93D4C8B22a5b2cf3D";
const STAKE_CONTRACT_ADDRESSES = "0x4d77a6AE38C8Eef08Ece51A9F42FCB44097e3cd6";
const STAKE_TOKEN_ADDRESSES = "0xC1B6844D5134c8E550043f01FFbF49CA66Efc77F";


export default function Stke() {

  const address = useAddress();
  const { contract: stakeTokenContract } = useContract(
    STAKE_TOKEN_ADDRESSES,
    "token"
  );
  const { contract: rewardTokenContract } = useContract(
    REWARD_TOKEN_ADDRESSES,
    "token"
  );
  const { contract: stakeContract } = useContract(
    STAKE_CONTRACT_ADDRESSES,
    "custom"
  );
  const {
    data: stakeInfo,
    refetch: refetchStakeInfo,
    isLoading: loadingStakeInfo,
  } = useContractRead(stakeContract, "getStakeInfo", [address]);

  const { data: stakeTokenBalance, isLoading: loadingStakeTokenBalance } =
    useTokenBalance(stakeTokenContract, address);

  const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance } =
    useTokenBalance(rewardTokenContract, address);

  useEffect(() => {
    setInterval(() => {
      refetchStakeInfo();
    }, 10000);
  }, []);

  const [stakeAmount, setStakeAmount] = useState("0");
  const [unstakeAmount, setUnstakeAmount] = useState("0");

  function resetValue() {
    setStakeAmount("0");
    setUnstakeAmount("0");
  }
  const toast = useToast();


  return (
    <div className="container bg-white dark:bg-black sm:justify-between  md:p-6 lg:p-12">
      <div className="container">
        <Card p={5} mt={10}>
        <Heading><Trans>STAKE BULL EARN BEARS</Trans> </Heading>
        <SimpleGrid columns={2}>
        <Card p={5} m={5}>
        <Box textAlign={"center"} mb={5}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
        <Trans> Stake Token:</Trans> 
            </Text>
            <Skeleton isLoaded={!loadingStakeInfo && !loadingStakeTokenBalance}>
              {stakeInfo && stakeInfo[0] ? (
                <Text>
                  {ethers.utils.formatEther(stakeInfo[0])}
                  {" $" + stakeTokenBalance?.symbol}
                </Text>
              ) : (
                <Text>0</Text>
              )}
            </Skeleton>
        </Box>
        <SimpleGrid columns={2} spacing={4}>
        <Stack spacing={4}>
              <Input
                type="number"
                max={stakeTokenBalance?.displayValue}
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
              />
              <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESSES}
                action={async (contract) => {
                  await stakeTokenContract?.erc20.setAllowance(
                    STAKE_CONTRACT_ADDRESSES,
                    stakeAmount
                  );

                  await contract.call("stake", [
                    ethers.utils.parseEther(stakeAmount),
                  ]);
                  resetValue();
                }}
                onSuccess={() =>
                  toast({
                    title: "Stake Successful",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
              >
              <Trans>  Stake</Trans> 
              </Web3Button>
            </Stack>
            <Stack spacing={4}>
              <Input
                type="number"
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(e.target.value)}
              />
              <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESSES}
                action={async (contract) => {
                  await contract.call("withdraw", [
                    ethers.utils.parseEther(unstakeAmount),
                  ]);
                }}
                onSuccess={() =>
                  toast({
                    title: "Unstake Successful",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
              >
              <Trans>  Unstake</Trans> 
              </Web3Button>
            </Stack>
        </SimpleGrid>
        </Card>
        <Card p={5} m={5}>
          <Flex
            h={"100%"}
            justifyContent={"space-between"}
            direction={"column"}
            textAlign={"center"}
          >
            <Text fontSize={"xl"} fontWeight={"bold"}>
            <Trans> Reward Token:</Trans> 
            </Text>
            <Skeleton
              isLoaded={!loadingStakeInfo && !loadingRewardTokenBalance}
            >
              {stakeInfo && stakeInfo[0] ? (
                <Box>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    {ethers.utils.formatEther(stakeInfo[1])}
                  </Text>
                  <Text>{" $" + rewardTokenBalance?.symbol}</Text>
                </Box>
              ) : (
                <Text>0</Text>
              )}
            </Skeleton>
            <Web3Button
              contractAddress={STAKE_CONTRACT_ADDRESSES}
              action={async (contract) => {
                await contract.call("claimRewards");
                resetValue();
              }}
              onSuccess={() =>
                toast({
                  title: "Rewards Claimed",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                })
              }
            >
           <Trans>  Claim</Trans> 
            </Web3Button>
          </Flex>
        </Card>
        </SimpleGrid>
        </Card>
        </div>
    </div>
  );
}


