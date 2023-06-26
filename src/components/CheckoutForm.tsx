/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import SVG from "react-inlinesvg/esm";
import { z } from "zod";

interface FormInputs {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipcode: number;
    city: string;
    country: string;
    eMoney: boolean;
    cash: boolean;
    credit: boolean;
    eMoneyNumber: string;
    eMoneyPin: string;
}

interface InputContainerProps {
    stretch?: boolean;
}

interface PaymentMethodInputContainerProps
    extends HTMLAttributes<HTMLDivElement> {
    checked?: boolean;
}

const FormHeadings = styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 0.928571px;
    text-transform: uppercase;
    color: #d87d4a;
`;
const StyledInput = styled.input`
    font-family: "Manrope", Arial, Helvetica, sans-serif;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    margin: 0.5rem 0;
    &:focus {
        outline: 1px solid #d87d4a;
        border: none;
    }
`;
const BillingDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;
const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const StyledLabel = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.214286px;
    color: #000000;
    cursor: pointer;
`;
const ShippingInfoContainer = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
`;
const InputContainer = styled.div<InputContainerProps>`
    width: 100%;
    grid-column: ${({ stretch }) => (stretch ? "span 2" : "auto")};
`;
const PaymentDetailsContainer = styled.div``;
const PaymentMethodLeftContainer = styled.div``;
const PaymentMethodContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const PaymentMethodRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
`;
const PaymentMethodInput = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #333;
    background-color: white;
    accent-color: #d87d4a;
    cursor: pointer;
    &:hover {
        accent-color: #d87d4a;
    }
    &:focus {
        outline: #d87d4a;
    }
`;
const PaymentMethodInputContainer = styled.div<PaymentMethodInputContainerProps>`
    border-radius: 0.5rem;
    height: 100%;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid ${(props: any) => (props.checked ? "#d87d4a" : "#cfcfcf")};
    cursor: pointer;
    &:focus-within {
        outline: 1px solid #d87d4a;
        border: none;
    }
    input {
        accent-color: #d87d4a;
    }
`;
const PaymentMethodLabel = styled.label`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    color: black;
    cursor: pointer;
`;
const ErrorMessage = styled(StyledLabel)`
    color: red;
    font-weight: 700;
`;
const EMoneyContainer = styled(BillingDetailsContainer)`
    margin: 2rem 0;
`;
const CashContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
`;
const CashSVG = styled(SVG)`
    cursor: default;
    width: 10%;
`;
const CashText = styled.p`
    color: #000;
    font-size: 0.9rem;
    font-family: Manrope;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
`;
const CheckoutHeading = styled.h1`
    margin: 0;
`;
export default function CheckoutForm({
    setFormData,
    setIsCheckoutModalOpen,
}: any) {
    const [isCreditSelected, setIsCreditSelected] = useState<boolean>(false);
    const [isCashSelected, setIsCashSelected] = useState<boolean>(false);

    const schema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        phoneNumber: z
            .string()
            .regex(/^\+?[0-9]{6,}$/i, "Invalid phone number"),
        address: z.string().min(5, "Address must be at least 5 characters"),
        zipcode: z.string().min(4, "Zipcode must be at least 4 characters"),
        city: z.string().min(2, "City must be at least 2 characters"),
        country: z.string().min(2, "Country must be at least 2 characters"),
        ...(isCashSelected && {
            // cash: z.boolean(),
        }),
        ...(isCreditSelected && {
            // credit: z.boolean(),
            eMoneyNumber: z.string().length(16, "Invalid Credit Card Number"),
            eMoneyPin: z.string().min(3, "Invalid Pin"),
        }),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });

    const handleCreditSelection = () => {
        setIsCreditSelected(true);
        setIsCashSelected(false);
    };

    const handleCashSelection = () => {
        setIsCreditSelected(false);
        setIsCashSelected(true);
    };
    const onSubmit = (data: FormInputs): void => {
        setFormData(data);
        setIsCheckoutModalOpen((prevCheckout: any) => !prevCheckout);
        reset();
    };

    return (
        <>
            <CheckoutHeading>Checkout</CheckoutHeading>
            <form id={"hook-form"} onSubmit={handleSubmit(onSubmit)}>
                <FormHeadings>Billing Details</FormHeadings>
                <BillingDetailsContainer>
                    <InputContainer>
                        <LabelContainer>
                            <StyledLabel htmlFor="name">Name</StyledLabel>
                            {errors.name && (
                                <ErrorMessage htmlFor="name">
                                    {errors.name.message}
                                </ErrorMessage>
                            )}
                        </LabelContainer>
                        <StyledInput
                            {...register("name", { required: true })}
                            id="name"
                            type="text"
                            placeholder="Alexei Ward"
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelContainer>
                            <StyledLabel htmlFor="email">
                                Email Address
                            </StyledLabel>
                            {errors.email && (
                                <ErrorMessage htmlFor="email">
                                    {errors.email.message}
                                </ErrorMessage>
                            )}
                        </LabelContainer>
                        <StyledInput
                            {...register("email", { required: true })}
                            id="email"
                            type="text"
                            placeholder="alexei@mail.com"
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelContainer>
                            <StyledLabel htmlFor="phone">
                                Phone Address
                            </StyledLabel>
                            {errors.phoneNumber && (
                                <ErrorMessage htmlFor="phone">
                                    {errors.phoneNumber.message}
                                </ErrorMessage>
                            )}
                        </LabelContainer>
                        <StyledInput
                            {...register("phoneNumber", { required: true })}
                            id="phone"
                            type="text"
                            placeholder="+1 202-555-0136"
                        />
                    </InputContainer>
                </BillingDetailsContainer>
                <FormHeadings>Shipping Info</FormHeadings>
                <ShippingInfoContainer>
                    <InputContainer stretch>
                        <LabelContainer>
                            <StyledLabel htmlFor="address">Address</StyledLabel>
                            {errors.address && (
                                <ErrorMessage htmlFor="address">
                                    {errors.address.message}
                                </ErrorMessage>
                            )}
                        </LabelContainer>
                        <StyledInput
                            {...register("address", { required: true })}
                            id="address"
                            type="text"
                            placeholder="1137 Williams Avenue"
                            autoComplete="street-address"
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelContainer>
                            <StyledLabel htmlFor="zipcode">
                                ZIP Code
                            </StyledLabel>
                            {errors.zipcode && (
                                <ErrorMessage htmlFor="zipcode">
                                    {errors.zipcode.message}
                                </ErrorMessage>
                            )}
                        </LabelContainer>
                        <StyledInput
                            {...register("zipcode", { required: true })}
                            id="zipcode"
                            type="text"
                            placeholder="10001"
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelContainer>
                            <StyledLabel htmlFor="city">
                                City Number
                            </StyledLabel>
                            {errors.city && (
                                <ErrorMessage htmlFor="city">
                                    {errors.city.message}
                                </ErrorMessage>
                            )}
                        </LabelContainer>
                        <StyledInput
                            {...register("city", { required: true })}
                            id="city"
                            type="text"
                            placeholder="New York"
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelContainer>
                            <StyledLabel htmlFor="country">Country</StyledLabel>
                            {errors.country && (
                                <ErrorMessage htmlFor="country">
                                    {errors.country.message}
                                </ErrorMessage>
                            )}
                        </LabelContainer>
                        <StyledInput
                            {...register("country", { required: true })}
                            id="country"
                            type="text"
                            placeholder="New York"
                        />
                    </InputContainer>
                </ShippingInfoContainer>
                <PaymentDetailsContainer>
                    <FormHeadings>Payment Details</FormHeadings>
                    <PaymentMethodContainer>
                        <PaymentMethodLeftContainer>
                            <h5>Payment Method</h5>
                        </PaymentMethodLeftContainer>
                        <PaymentMethodRightContainer>
                            <PaymentMethodInputContainer
                                onClick={handleCreditSelection}
                                checked={isCreditSelected}
                            >
                                <PaymentMethodInput
                                    {...register("credit")}
                                    name="credit"
                                    type="radio"
                                    id="e-money"
                                    onChange={handleCreditSelection}
                                    checked={isCreditSelected}
                                />
                                <PaymentMethodLabel htmlFor="e-money">
                                    e-Money
                                </PaymentMethodLabel>
                            </PaymentMethodInputContainer>
                            <PaymentMethodInputContainer
                                onClick={handleCashSelection}
                                checked={isCashSelected}
                            >
                                <PaymentMethodInput
                                    {...register("cash")}
                                    name="cash"
                                    type="radio"
                                    id="cash"
                                    onChange={handleCashSelection}
                                    checked={isCashSelected}
                                />
                                <PaymentMethodLabel htmlFor="cash">
                                    Cash on Delivery
                                </PaymentMethodLabel>
                            </PaymentMethodInputContainer>
                        </PaymentMethodRightContainer>
                    </PaymentMethodContainer>
                    {isCreditSelected && (
                        <EMoneyContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <StyledLabel htmlFor="eMoneyNumber">
                                        e-Money Number
                                    </StyledLabel>
                                    {errors.eMoneyNumber && (
                                        <ErrorMessage htmlFor="eMoneyNumber">
                                            {errors.eMoneyNumber?.message}
                                        </ErrorMessage>
                                    )}
                                </LabelContainer>
                                <StyledInput
                                    {...register("eMoneyNumber", {
                                        required: true,
                                    })}
                                    id="eMoneyNumber"
                                    type="text"
                                    placeholder="238521993"
                                    autoComplete="cc-number"
                                />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <StyledLabel htmlFor="eMoneyPin">
                                        e-Money Pin
                                    </StyledLabel>
                                    {errors.eMoneyPin && (
                                        <ErrorMessage htmlFor="eMoneyPin">
                                            {errors.eMoneyPin?.message}
                                        </ErrorMessage>
                                    )}
                                </LabelContainer>
                                <StyledInput
                                    {...register("eMoneyPin", {
                                        required: true,
                                    })}
                                    id="eMoneyNumber"
                                    type="text"
                                    placeholder="6891"
                                    autoComplete="cc-csc"
                                />
                            </InputContainer>
                        </EMoneyContainer>
                    )}
                    {isCashSelected && (
                        <CashContainer>
                            <CashSVG src="/assets/checkout/icon-cash-on-delivery.svg" />
                            <CashText>
                                The ‘Cash on Delivery’ option enables you to pay
                                in cash when our delivery courier arrives at
                                your residence. Just make sure your address is
                                correct so that your order will not be
                                cancelled.
                            </CashText>
                        </CashContainer>
                    )}
                </PaymentDetailsContainer>
            </form>
        </>
    );
}
