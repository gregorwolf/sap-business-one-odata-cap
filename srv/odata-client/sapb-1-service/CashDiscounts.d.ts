import { CashDiscountsRequestBuilder } from './CashDiscountsRequestBuilder';
import { DiscountLine } from './DiscountLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CashDiscounts" of service "SAPB1".
 */
export declare class CashDiscounts extends Entity implements CashDiscountsType {
    /**
     * Technical entity name for CashDiscounts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CashDiscounts.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Discount Lines.
     * @nullable
     */
    discountLines?: DiscountLine[];
    /**
     * One-to-many navigation property to the [[PaymentTermsTypes]] entity.
     */
    paymentTermsTypes: PaymentTermsTypes[];
    /**
     * Returns an entity builder to construct instances `CashDiscounts`.
     * @returns A builder that constructs instances of entity type `CashDiscounts`.
     */
    static builder(): EntityBuilderType<CashDiscounts, CashDiscountsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CashDiscounts` entity type.
     * @returns A `CashDiscounts` request builder.
     */
    static requestBuilder(): CashDiscountsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CashDiscounts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CashDiscounts`.
     */
    static customField(fieldName: string): CustomField<CashDiscounts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
export interface CashDiscountsType {
    code?: string;
    name?: string;
    discountLines?: DiscountLine[];
    paymentTermsTypes: PaymentTermsTypesType[];
}
export interface CashDiscountsTypeForceMandatory {
    code: string;
    name: string;
    discountLines: DiscountLine[];
    paymentTermsTypes: PaymentTermsTypesType[];
}
export declare namespace CashDiscounts {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<CashDiscounts>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<CashDiscounts>;
    /**
     * Static representation of the [[discountLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_LINES: CollectionField<CashDiscounts>;
    /**
     * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPES: OneToManyLink<CashDiscounts, PaymentTermsTypes>;
    /**
     * All fields of the CashDiscounts entity.
     */
    const _allFields: Array<StringField<CashDiscounts> | CollectionField<CashDiscounts> | OneToManyLink<CashDiscounts, PaymentTermsTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CashDiscounts>;
    /**
     * All key fields of the CashDiscounts entity.
     */
    const _keyFields: Array<Field<CashDiscounts>>;
    /**
     * Mapping of all key field names to the respective static field property CashDiscounts.
     */
    const _keys: {
        [keys: string]: Field<CashDiscounts>;
    };
}
//# sourceMappingURL=CashDiscounts.d.ts.map