import { PartnersSetupsRequestBuilder } from './PartnersSetupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PartnersSetups" of service "SAPB1".
 */
export declare class PartnersSetups extends EntityV4 implements PartnersSetupsType {
    /**
     * Technical entity name for PartnersSetups.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Default Relationship.
     * @nullable
     */
    defaultRelationship?: number;
    /**
     * Related Bp.
     * @nullable
     */
    relatedBp?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * One-to-one navigation property to the [[Relationships]] entity.
     */
    relationship: Relationships;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances of `PartnersSetups`.
     * @returns A builder that constructs instances of entity type `PartnersSetups`.
     */
    static builder(): EntityBuilderType<PartnersSetups, PartnersSetupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `PartnersSetups` entity type.
     * @returns A `PartnersSetups` request builder.
     */
    static requestBuilder(): PartnersSetupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PartnersSetups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PartnersSetups`.
     */
    static customField(fieldName: string): CustomFieldV4<PartnersSetups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Relationships, RelationshipsType } from './Relationships';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface PartnersSetupsType {
    name?: string | null;
    defaultRelationship?: number | null;
    relatedBp?: string | null;
    details?: string | null;
    relationship: RelationshipsType;
    businessPartner: BusinessPartnersType;
}
export declare namespace PartnersSetups {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<PartnersSetups>;
    /**
     * Static representation of the [[defaultRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_RELATIONSHIP: NumberField<PartnersSetups>;
    /**
     * Static representation of the [[relatedBp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATED_BP: StringField<PartnersSetups>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<PartnersSetups>;
    /**
     * Static representation of the one-to-one navigation property [[relationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP: OneToOneLink<PartnersSetups, Relationships>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<PartnersSetups, BusinessPartners>;
    /**
     * All fields of the PartnersSetups entity.
     */
    const _allFields: Array<StringField<PartnersSetups> | NumberField<PartnersSetups> | OneToOneLink<PartnersSetups, Relationships> | OneToOneLink<PartnersSetups, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PartnersSetups>;
    /**
     * All key fields of the PartnersSetups entity.
     */
    const _keyFields: Array<Field<PartnersSetups>>;
    /**
     * Mapping of all key field names to the respective static field property PartnersSetups.
     */
    const _keys: {
        [keys: string]: Field<PartnersSetups>;
    };
}
//# sourceMappingURL=PartnersSetups.d.ts.map