import { BankChargesAllocationCodesRequestBuilder } from './BankChargesAllocationCodesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BankChargesAllocationCodes" of service "SAPB1".
 */
export declare class BankChargesAllocationCodes extends EntityV4 implements BankChargesAllocationCodesType {
    /**
     * Technical entity name for BankChargesAllocationCodes.
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
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[PaymentRunExport]] entity.
     */
    paymentRunExport: PaymentRunExport[];
    /**
     * Returns an entity builder to construct instances of `BankChargesAllocationCodes`.
     * @returns A builder that constructs instances of entity type `BankChargesAllocationCodes`.
     */
    static builder(): EntityBuilderType<BankChargesAllocationCodes, BankChargesAllocationCodesType>;
    /**
     * Returns a request builder to construct requests for operations on the `BankChargesAllocationCodes` entity type.
     * @returns A `BankChargesAllocationCodes` request builder.
     */
    static requestBuilder(): BankChargesAllocationCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankChargesAllocationCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BankChargesAllocationCodes`.
     */
    static customField(fieldName: string): CustomFieldV4<BankChargesAllocationCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PaymentRunExport, PaymentRunExportType } from './PaymentRunExport';
export interface BankChargesAllocationCodesType {
    code?: string | null;
    description?: string | null;
    businessPartners: BusinessPartnersType[];
    paymentRunExport: PaymentRunExportType[];
}
export declare namespace BankChargesAllocationCodes {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<BankChargesAllocationCodes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BankChargesAllocationCodes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<BankChargesAllocationCodes, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[paymentRunExport]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_RUN_EXPORT: OneToManyLink<BankChargesAllocationCodes, PaymentRunExport>;
    /**
     * All fields of the BankChargesAllocationCodes entity.
     */
    const _allFields: Array<StringField<BankChargesAllocationCodes> | OneToManyLink<BankChargesAllocationCodes, BusinessPartners> | OneToManyLink<BankChargesAllocationCodes, PaymentRunExport>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BankChargesAllocationCodes>;
    /**
     * All key fields of the BankChargesAllocationCodes entity.
     */
    const _keyFields: Array<Field<BankChargesAllocationCodes>>;
    /**
     * Mapping of all key field names to the respective static field property BankChargesAllocationCodes.
     */
    const _keys: {
        [keys: string]: Field<BankChargesAllocationCodes>;
    };
}
//# sourceMappingURL=BankChargesAllocationCodes.d.ts.map