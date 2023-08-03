import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  //   ModalHeader,
  ModalFooter,
  ModalBody,
  //   ModalCloseButton,
} from '@chakra-ui/react';
import { Product } from '@/types';
import FullProductCard from '@/components/ProductModal/FullProductCard/FullProductFile';
import useShoppingCartStore from '@/store/shoppingCartStore';

type ProductModalProps = {
  item: Product;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ item, isOpen, onClose }: ProductModalProps) => {
  const { addToCart } = useShoppingCartStore();
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      //   closeOnOverlayClick
      //   blockScrollOnMount
    >
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="7px" />
      <ModalContent>
        {/* <ModalHeader>{item && item.title}</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Flex justifyContent="center">
            <FullProductCard item={item} />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => addToCart(item)}>
            Add to cart
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
