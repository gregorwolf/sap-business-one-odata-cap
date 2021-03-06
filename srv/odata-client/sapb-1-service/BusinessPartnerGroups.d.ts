import { BusinessPartnerGroupsRequestBuilder } from './BusinessPartnerGroupsRequestBuilder';
import { BoBusinessPartnerGroupTypes } from './BoBusinessPartnerGroupTypes';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BusinessPartnerGroups" of service "SAPB1".
 */
export declare class BusinessPartnerGroups extends EntityV4 implements BusinessPartnerGroupsType {
    /**
     * Technical entity name for BusinessPartnerGroups.
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
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Type.
     * @nullable
     */
    type?: BoBusinessPartnerGroupTypes;
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
     */
    glAccountAdvancedRules: GlAccountAdvancedRules[];
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerGroups`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerGroups`.
     */
    static builder(): EntityBuilderType<BusinessPartnerGroups, BusinessPartnerGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerGroups` entity type.
     * @returns A `BusinessPartnerGroups` request builder.
     */
    static requestBuilder(): BusinessPartnerGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<BusinessPartnerGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
export interface BusinessPartnerGroupsType {
    code?: number | null;
    name?: string | null;
    type?: BoBusinessPartnerGroupTypes | null;
    businessPartners: BusinessPartnersType[];
    glAccountAdvancedRules: GlAccountAdvancedRulesType[];
}
export declare namespace BusinessPartnerGroups {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<BusinessPartnerGroups>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<BusinessPartnerGroups>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: EnumField<BusinessPartnerGroups>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<BusinessPartnerGroups, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<BusinessPartnerGroups, GlAccountAdvancedRules>;
    /**
     * All fields of the BusinessPartnerGroups entity.
     */
    const _allFields: Array<NumberField<BusinessPartnerGroups> | StringField<BusinessPartnerGroups> | EnumField<BusinessPartnerGroups> | OneToManyLink<BusinessPartnerGroups, BusinessPartners> | OneToManyLink<BusinessPartnerGroups, GlAccountAdvancedRules>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerGroups>;
    /**
     * All key fields of the BusinessPartnerGroups entity.
     */
    const _keyFields: Array<Field<BusinessPartnerGroups>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerGroups.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerGroups>;
    };
}
//# sourceMappingURL=BusinessPartnerGroups.d.ts.map