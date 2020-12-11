import { Moment } from 'moment';
import { BoRcptCredTypes } from './BoRcptCredTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentCreditCard
 */
export interface PaymentCreditCard {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Credit Card.
     * @nullable
     */
    creditCard?: number;
    /**
     * Credit Acct.
     * @nullable
     */
    creditAcct?: string;
    /**
     * Credit Card Number.
     * @nullable
     */
    creditCardNumber?: string;
    /**
     * Card Valid Until.
     * @nullable
     */
    cardValidUntil?: Moment;
    /**
     * Voucher Num.
     * @nullable
     */
    voucherNum?: string;
    /**
     * Owner Id Num.
     * @nullable
     */
    ownerIdNum?: string;
    /**
     * Owner Phone.
     * @nullable
     */
    ownerPhone?: string;
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: number;
    /**
     * Num Of Payments.
     * @nullable
     */
    numOfPayments?: number;
    /**
     * First Payment Due.
     * @nullable
     */
    firstPaymentDue?: Moment;
    /**
     * First Payment Sum.
     * @nullable
     */
    firstPaymentSum?: number;
    /**
     * Additional Payment Sum.
     * @nullable
     */
    additionalPaymentSum?: number;
    /**
     * Credit Sum.
     * @nullable
     */
    creditSum?: number;
    /**
     * Credit Cur.
     * @nullable
     */
    creditCur?: string;
    /**
     * Credit Rate.
     * @nullable
     */
    creditRate?: number;
    /**
     * Confirmation Num.
     * @nullable
     */
    confirmationNum?: string;
    /**
     * Num Of Credit Payments.
     * @nullable
     */
    numOfCreditPayments?: number;
    /**
     * Credit Type.
     * @nullable
     */
    creditType?: BoRcptCredTypes;
    /**
     * Split Payments.
     * @nullable
     */
    splitPayments?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentCreditCard.build]] instead.
 */
export declare function createPaymentCreditCard(json: any): PaymentCreditCard;
/**
 * PaymentCreditCardField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentCreditCardField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentCreditCard> {
    /**
     * Representation of the [[PaymentCreditCard.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.creditCard]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditCard: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.creditAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.creditCardNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditCardNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.cardValidUntil]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardValidUntil: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.voucherNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    voucherNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.ownerIdNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ownerIdNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.ownerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ownerPhone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.numOfPayments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numOfPayments: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.firstPaymentDue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstPaymentDue: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.firstPaymentSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstPaymentSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.additionalPaymentSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalPaymentSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.creditSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.creditCur]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditCur: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.creditRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.confirmationNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    confirmationNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.numOfCreditPayments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numOfCreditPayments: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.creditType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCreditCard.splitPayments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    splitPayments: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentCreditCardField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentCreditCard {
    /**
     * Metadata information on all properties of the `PaymentCreditCard` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentCreditCard>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentCreditCard;
}
//# sourceMappingURL=PaymentCreditCard.d.ts.map