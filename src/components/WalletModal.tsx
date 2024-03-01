"use client"
import React, { ReactNode } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { usePathname, useSearchParams } from 'next/navigation';


const WalletModal = (
    { children, isOpen, onOpen, onOpenChange, modalTitle }:
        { children: ReactNode, isOpen: boolean, onOpen: any, onOpenChange: any, modalTitle: string}
) => {
    const params = useSearchParams();
    const paramsMethod = params?.get("method") ?? "bank";
    const pathname = usePathname();
    const [firstSegment] = (pathname ? pathname.split("/").filter(segment => segment !== '') : []) as string[];

    
    const handleContinue = ()=>{
        console.log(
            firstSegment +": "+ paramsMethod
        );
    }

    return (
        <Modal
            size={"5xl"}
            isOpen={isOpen}
            placement={'bottom'}
            onOpenChange={onOpenChange}
            className='modal'
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{modalTitle}</ModalHeader>
                        <ModalBody>
                            {children}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Back
                            </Button>
                            <Button color="primary" onPress={onClose} onClick={handleContinue}>
                                Continue
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default WalletModal