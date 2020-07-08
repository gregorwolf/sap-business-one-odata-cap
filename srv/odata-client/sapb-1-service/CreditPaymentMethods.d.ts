import { CreditPaymentMethodsRequestBuilder } from './CreditPaymentMethodsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CreditPaymentMethods" of service "SAPB1".
 */
export declare class CreditPaymentMethods extends Entity implements CreditPaymentMethodsType {
    /**
     * Technical entity name for CreditPaymentMethods.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CreditPaymentMethods.
     */
    static _serviceName: string;
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
     * One-to-one navigation property to the [[CreditCards]] entity.
     */
    creditCard: CreditCards;
    /**
     * One-to-one navigation property to the [[CreditCardPayments]] entity.
     */
    creditCardPayment: CreditCardPayments;
    /**
     * Returns an entity builder to construct instances `CreditPaymentMethods`.
     * @returns A builder that constructs instances of entity type `CreditPaymentMethods`.
     */
    static builder(): EntityBuilderType<CreditPaymentMethods, CreditPaymentMethodsTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<CreditPaymentMethods>;
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
    paymentMethodCode?: number;
    name?: string;
    assignedtoCreditCard?: number;
    paymentCode?: string;
    minimumCreditAmount?: number;
    minimumPaymentAmount?: number;
    maxQtyWithoutApproval?: number;
    creditCard: CreditCardsType;
    creditCardPayment: CreditCardPaymentsType;
}
export interface CreditPaymentMethodsTypeForceMandatory {
    paymentMethodCode: number;
    name: string;
    assignedtoCreditCard: number;
    paymentCode: string;
    minimumCreditAmount: number;
    minimumPaymentAmount: number;
    maxQtyWithoutApproval: number;
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
    const _allFields: Array<NumberField<CreditPaymentMethods> | StringField<CreditPaymentMethods> | OneToOneLink<CreditPaymentMethods, CreditCards> | OneToOneLink<CreditPaymentMethods, CreditCardPayments>>;
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