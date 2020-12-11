import { CashDiscountsRequestBuilder } from './CashDiscountsRequestBuilder';
import { DiscountLine } from './DiscountLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CashDiscounts" of service "SAPB1".
 */
export declare class CashDiscounts extends EntityV4 implements CashDiscountsType {
    /**
     * Technical entity name for CashDiscounts.
     */
    static _entityName: string;
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
     * By Date.
     * @nullable
     */
    byDate?: BoYesNoEnum;
    /**
     * Freight.
     * @nullable
     */
    freight?: BoYesNoEnum;
    /**
     * Tax.
     * @nullable
     */
    tax?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `CashDiscounts`.
     * @returns A builder that constructs instances of entity type `CashDiscounts`.
     */
    static builder(): EntityBuilderType<CashDiscounts, CashDiscountsType>;
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
    static customField(fieldName: string): CustomFieldV4<CashDiscounts>;
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
    code?: string | null;
    name?: string | null;
    byDate?: BoYesNoEnum | null;
    freight?: BoYesNoEnum | null;
    tax?: BoYesNoEnum | null;
    discountLines?: DiscountLine[] | null;
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
     * Static representation of the [[byDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BY_DATE: EnumField<CashDiscounts>;
    /**
     * Static representation of the [[freight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREIGHT: EnumField<CashDiscounts>;
    /**
     * Static representation of the [[tax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX: EnumField<CashDiscounts>;
    /**
     * Static representation of the [[discountLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_LINES: CollectionField<CashDiscounts, DiscountLine>;
    /**
     * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPES: OneToManyLink<CashDiscounts, PaymentTermsTypes>;
    /**
     * All fields of the CashDiscounts entity.
     */
    const _allFields: Array<StringField<CashDiscounts> | EnumField<CashDiscounts> | CollectionField<CashDiscounts, DiscountLine> | OneToManyLink<CashDiscounts, PaymentTermsTypes>>;
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