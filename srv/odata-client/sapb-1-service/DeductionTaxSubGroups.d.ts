import { DeductionTaxSubGroupsRequestBuilder } from './DeductionTaxSubGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DeductionTaxSubGroups" of service "SAPB1".
 */
export declare class DeductionTaxSubGroups extends EntityV4 implements DeductionTaxSubGroupsType {
    /**
     * Technical entity name for DeductionTaxSubGroups.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Group Code.
     * @nullable
     */
    groupCode?: string;
    /**
     * Group Name.
     * @nullable
     */
    groupName?: string;
    /**
     * One-to-many navigation property to the [[DeductionTaxGroups]] entity.
     */
    deductionTaxGroups: DeductionTaxGroups[];
    /**
     * Returns an entity builder to construct instances of `DeductionTaxSubGroups`.
     * @returns A builder that constructs instances of entity type `DeductionTaxSubGroups`.
     */
    static builder(): EntityBuilderType<DeductionTaxSubGroups, DeductionTaxSubGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `DeductionTaxSubGroups` entity type.
     * @returns A `DeductionTaxSubGroups` request builder.
     */
    static requestBuilder(): DeductionTaxSubGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxSubGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionTaxSubGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<DeductionTaxSubGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DeductionTaxGroups, DeductionTaxGroupsType } from './DeductionTaxGroups';
export interface DeductionTaxSubGroupsType {
    groupCode?: string | null;
    groupName?: string | null;
    deductionTaxGroups: DeductionTaxGroupsType[];
}
export declare namespace DeductionTaxSubGroups {
    /**
     * Static representation of the [[groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_CODE: StringField<DeductionTaxSubGroups>;
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_NAME: StringField<DeductionTaxSubGroups>;
    /**
     * Static representation of the one-to-many navigation property [[deductionTaxGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_TAX_GROUPS: OneToManyLink<DeductionTaxSubGroups, DeductionTaxGroups>;
    /**
     * All fields of the DeductionTaxSubGroups entity.
     */
    const _allFields: Array<StringField<DeductionTaxSubGroups> | OneToManyLink<DeductionTaxSubGroups, DeductionTaxGroups>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DeductionTaxSubGroups>;
    /**
     * All key fields of the DeductionTaxSubGroups entity.
     */
    const _keyFields: Array<Field<DeductionTaxSubGroups>>;
    /**
     * Mapping of all key field names to the respective static field property DeductionTaxSubGroups.
     */
    const _keys: {
        [keys: string]: Field<DeductionTaxSubGroups>;
    };
}
//# sourceMappingURL=DeductionTaxSubGroups.d.ts.map