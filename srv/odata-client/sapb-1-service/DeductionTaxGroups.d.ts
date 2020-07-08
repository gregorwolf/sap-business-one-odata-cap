import { DeductionTaxGroupsRequestBuilder } from './DeductionTaxGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "DeductionTaxGroups" of service "SAPB1".
 */
export declare class DeductionTaxGroups extends Entity implements DeductionTaxGroupsType {
    /**
     * Technical entity name for DeductionTaxGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DeductionTaxGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Group Key.
     * @nullable
     */
    groupKey?: number;
    /**
     * Group Name.
     * @nullable
     */
    groupName?: string;
    /**
     * Max Redin.
     * @nullable
     */
    maxRedin?: number;
    /**
     * Group Extended Code.
     * @nullable
     */
    groupExtendedCode?: string;
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-one navigation property to the [[DeductionTaxSubGroups]] entity.
     */
    deductionTaxSubGroup: DeductionTaxSubGroups;
    /**
     * Returns an entity builder to construct instances `DeductionTaxGroups`.
     * @returns A builder that constructs instances of entity type `DeductionTaxGroups`.
     */
    static builder(): EntityBuilderType<DeductionTaxGroups, DeductionTaxGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DeductionTaxGroups` entity type.
     * @returns A `DeductionTaxGroups` request builder.
     */
    static requestBuilder(): DeductionTaxGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionTaxGroups`.
     */
    static customField(fieldName: string): CustomField<DeductionTaxGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { DeductionTaxSubGroups, DeductionTaxSubGroupsType } from './DeductionTaxSubGroups';
export interface DeductionTaxGroupsType {
    groupKey?: number;
    groupName?: string;
    maxRedin?: number;
    groupExtendedCode?: string;
    businessPartners: BusinessPartnersType[];
    deductionTaxSubGroup: DeductionTaxSubGroupsType;
}
export interface DeductionTaxGroupsTypeForceMandatory {
    groupKey: number;
    groupName: string;
    maxRedin: number;
    groupExtendedCode: string;
    businessPartners: BusinessPartnersType[];
    deductionTaxSubGroup: DeductionTaxSubGroupsType;
}
export declare namespace DeductionTaxGroups {
    /**
     * Static representation of the [[groupKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_KEY: NumberField<DeductionTaxGroups>;
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_NAME: StringField<DeductionTaxGroups>;
    /**
     * Static representation of the [[maxRedin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_REDIN: NumberField<DeductionTaxGroups>;
    /**
     * Static representation of the [[groupExtendedCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_EXTENDED_CODE: StringField<DeductionTaxGroups>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<DeductionTaxGroups, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[deductionTaxSubGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_TAX_SUB_GROUP: OneToOneLink<DeductionTaxGroups, DeductionTaxSubGroups>;
    /**
     * All fields of the DeductionTaxGroups entity.
     */
    const _allFields: Array<NumberField<DeductionTaxGroups> | StringField<DeductionTaxGroups> | OneToManyLink<DeductionTaxGroups, BusinessPartners> | OneToOneLink<DeductionTaxGroups, DeductionTaxSubGroups>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DeductionTaxGroups>;
    /**
     * All key fields of the DeductionTaxGroups entity.
     */
    const _keyFields: Array<Field<DeductionTaxGroups>>;
    /**
     * Mapping of all key field names to the respective static field property DeductionTaxGroups.
     */
    const _keys: {
        [keys: string]: Field<DeductionTaxGroups>;
    };
}
//# sourceMappingURL=DeductionTaxGroups.d.ts.map