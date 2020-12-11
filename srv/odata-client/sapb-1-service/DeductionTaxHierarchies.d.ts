import { DeductionTaxHierarchiesRequestBuilder } from './DeductionTaxHierarchiesRequestBuilder';
import { Moment } from 'moment';
import { DeductionTaxHierarchiesLine } from './DeductionTaxHierarchiesLine';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DeductionTaxHierarchies" of service "SAPB1".
 */
export declare class DeductionTaxHierarchies extends EntityV4 implements DeductionTaxHierarchiesType {
    /**
     * Technical entity name for DeductionTaxHierarchies.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Hierarchy Code.
     * @nullable
     */
    hierarchyCode?: string;
    /**
     * Hierarchy Name.
     * @nullable
     */
    hierarchyName?: string;
    /**
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid Until.
     * @nullable
     */
    validUntil?: Moment;
    /**
     * Deduction Percent.
     * @nullable
     */
    deductionPercent?: number;
    /**
     * Maximum Total.
     * @nullable
     */
    maximumTotal?: number;
    /**
     * Last Updated.
     * @nullable
     */
    lastUpdated?: Moment;
    /**
     * Deduction Tax Hierarchies Lines.
     * @nullable
     */
    deductionTaxHierarchiesLines?: DeductionTaxHierarchiesLine[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances of `DeductionTaxHierarchies`.
     * @returns A builder that constructs instances of entity type `DeductionTaxHierarchies`.
     */
    static builder(): EntityBuilderType<DeductionTaxHierarchies, DeductionTaxHierarchiesType>;
    /**
     * Returns a request builder to construct requests for operations on the `DeductionTaxHierarchies` entity type.
     * @returns A `DeductionTaxHierarchies` request builder.
     */
    static requestBuilder(): DeductionTaxHierarchiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxHierarchies`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionTaxHierarchies`.
     */
    static customField(fieldName: string): CustomFieldV4<DeductionTaxHierarchies>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface DeductionTaxHierarchiesType {
    absEntry?: number | null;
    bpCode?: string | null;
    hierarchyCode?: string | null;
    hierarchyName?: string | null;
    validFrom?: Moment | null;
    validUntil?: Moment | null;
    deductionPercent?: number | null;
    maximumTotal?: number | null;
    lastUpdated?: Moment | null;
    deductionTaxHierarchiesLines?: DeductionTaxHierarchiesLine[] | null;
    businessPartner: BusinessPartnersType;
}
export declare namespace DeductionTaxHierarchies {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CODE: StringField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[hierarchyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIERARCHY_CODE: StringField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[hierarchyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIERARCHY_NAME: StringField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[validUntil]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_UNTIL: DateField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_PERCENT: NumberField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[maximumTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_TOTAL: NumberField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[lastUpdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_UPDATED: DateField<DeductionTaxHierarchies>;
    /**
     * Static representation of the [[deductionTaxHierarchiesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_TAX_HIERARCHIES_LINES: CollectionField<DeductionTaxHierarchies, DeductionTaxHierarchiesLine>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<DeductionTaxHierarchies, BusinessPartners>;
    /**
     * All fields of the DeductionTaxHierarchies entity.
     */
    const _allFields: Array<NumberField<DeductionTaxHierarchies> | StringField<DeductionTaxHierarchies> | DateField<DeductionTaxHierarchies> | CollectionField<DeductionTaxHierarchies, DeductionTaxHierarchiesLine> | OneToOneLink<DeductionTaxHierarchies, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DeductionTaxHierarchies>;
    /**
     * All key fields of the DeductionTaxHierarchies entity.
     */
    const _keyFields: Array<Field<DeductionTaxHierarchies>>;
    /**
     * Mapping of all key field names to the respective static field property DeductionTaxHierarchies.
     */
    const _keys: {
        [keys: string]: Field<DeductionTaxHierarchies>;
    };
}
//# sourceMappingURL=DeductionTaxHierarchies.d.ts.map