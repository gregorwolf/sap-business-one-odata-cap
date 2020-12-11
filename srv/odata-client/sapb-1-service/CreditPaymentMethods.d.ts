import { CreditPaymentMethodsRequestBuilder } from './CreditPaymentMethodsRequestBuilder';
import { InstallmentPaymentsPossiblityEnum } from './InstallmentPaymentsPossiblityEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CreditPaymentMethods" of service "SAPB1".
 */
export declare class CreditPaymentMethods extends EntityV4 implements CreditPaymentMethodsType {
    /**
     * Technical entity name for CreditPaymentMethods.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Assignedto Credit Card.
     * @nullable
     */
    assignedtoCreditCard?: number;
    /**
     * Payment Code.
     * @nullable
     */
    paymentCode?: string;
    /**
     * Minimum Credit Amount.
     * @nullable
     */
    minimumCreditAmount?: number;
    /**
     * Minimum Payment Amount.
     * @nullable
     */
    minimumPaymentAmount?: number;
    /**
     * Max Qty Without Approval.
     * @nullable
     */
    maxQtyWithoutApproval?: number;
    /**
     * Installment Payments Possible.
     * @nullable
     */
    installmentPaymentsPossible?: InstallmentPaymentsPossiblityEnum;
    /**
     * One-to-one navigation property to the [[CreditCards]] entity.
     */
    creditCard: CreditCards;
    /**
     * One-to-one navigation property to the [[CreditCardPayments]] entity.
     */
    creditCardPayment: CreditCardPayments;
    /**
     * Returns an entity builder to construct instances of `CreditPaymentMethods`.
     * @returns A builder that constructs instances of entity type `CreditPaymentMethods`.
     */
    static builder(): EntityBuilderType<CreditPaymentMethods, CreditPaymentMethodsType>;
    /**
     * Returns a request builder to construct requests for operations on the `CreditPaymentMethods` entity type.
     * @returns A `CreditPaymentMethods` request builder.
     */
    static requestBuilder(): CreditPaymentMethodsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditPaymentMethods`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CreditPaymentMethods`.
     */
    static customField(fieldName: string): CustomFieldV4<CreditPaymentMethods>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CreditCards, CreditCardsType } from './CreditCards';
import { CreditCardPayments, CreditCardPaymentsType } from './CreditCardPayments';
export interface CreditPaymentMethodsType {
    paymentMethodCode?: number | null;
    name?: string | null;
    assignedtoCreditCard?: number | null;
    paymentCode?: string | null;
    minimumCreditAmount?: number | null;
    minimumPaymentAmount?: number | null;
    maxQtyWithoutApproval?: number | null;
    installmentPaymentsPossible?: InstallmentPaymentsPossiblityEnum | null;
    creditCard: CreditCardsType;
    creditCardPayment: CreditCardPaymentsType;
}
export declare namespace CreditPaymentMethods {
    /**
     * Static representation of the [[paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHOD_CODE: NumberField<CreditPaymentMethods>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<CreditPaymentMethods>;
    /**
     * Static representation of the [[assignedtoCreditCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNEDTO_CREDIT_CARD: NumberField<CreditPaymentMethods>;
    /**
     * Static representation of the [[paymentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CODE: StringField<CreditPaymentMethods>;
    /**
     * Static representation of the [[minimumCreditAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_CREDIT_AMOUNT: NumberField<CreditPaymentMethods>;
    /**
     * Static representation of the [[minimumPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_PAYMENT_AMOUNT: NumberField<CreditPaymentMethods>;
    /**
     * Static representation of the [[maxQtyWithoutApproval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_QTY_WITHOUT_APPROVAL: NumberField<CreditPaymentMethods>;
    /**
     * Static representation of the [[installmentPaymentsPossible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTALLMENT_PAYMENTS_POSSIBLE: EnumField<CreditPaymentMethods>;
    /**
     * Static representation of the one-to-one navigation property [[creditCard]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARD: OneToOneLink<CreditPaymentMethods, CreditCards>;
    /**
     * Static representation of the one-to-one navigation property [[creditCardPayment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARD_PAYMENT: OneToOneLink<CreditPaymentMethods, CreditCardPayments>;
    /**
     * All fields of the CreditPaymentMethods entity.
     */
    const _allFields: Array<NumberField<CreditPaymentMethods> | StringField<CreditPaymentMethods> | EnumField<CreditPaymentMethods> | OneToOneLink<CreditPaymentMethods, CreditCards> | OneToOneLink<CreditPaymentMethods, CreditCardPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CreditPaymentMethods>;
    /**
     * All key fields of the CreditPaymentMethods entity.
     */
    const _keyFields: Array<Field<CreditPaymentMethods>>;
    /**
     * Mapping of all key field names to the respective static field property CreditPaymentMethods.
     */
    const _keys: {
        [keys: string]: Field<CreditPaymentMethods>;
    };
}
//# sourceMappingURL=CreditPaymentMethods.d.ts.map