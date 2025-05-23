export interface ModalHeaerProps {
  title: string;
}

export interface ModalBodyProps {
  content: string;
}

export interface ModalFooterProps {
  button: boolean;
  onClose: () => void;
}
