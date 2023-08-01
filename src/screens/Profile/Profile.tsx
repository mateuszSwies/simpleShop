import { Flex, Text } from '@chakra-ui/react';
import LoginInput from '@/components/LoginInput/LoginInput';
import useAuthenticationStore from '@/store/userAuthenticationStore';

const Profile = () => {
  const { isLoggedIn } = useAuthenticationStore();

  return (
    <Flex w="100%" h="100%" justify="center" align="center" pt="20vh">
      {isLoggedIn ? <Text>zalogowany</Text> : <LoginInput />}
    </Flex>
  );
};

export default Profile;
