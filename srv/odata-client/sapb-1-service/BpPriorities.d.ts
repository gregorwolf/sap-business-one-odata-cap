import { BpPrioritiesRequestBuilder } from './BpPrioritiesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BPPriorities" of service "SAPB1".
 */
export declare class BpPriorities extends Entity implements BpPrioritiesType {
    /**
     * Technical entity name for BpPriorities.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BpPriorities.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Priority Description.
     * @nullable
     */
    priorityDescription?: string;
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * Returns an entity builder to construct instances `BpPriorities`.
     * @returns A builder that constructs instances of entity type `BpPriorities`.
     */
    static builder(): EntityBuilderType<BpPriorities, BpPrioritiesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BpPriorities` entity type.
     * @returns A `BpPriorities` request builder.
     */
    static requestBuilder(): BpPrioritiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpPriorities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpPriorities`.
     */
    static customField(fieldName: string): CustomField<BpPriorities>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface BpPrioritiesType {
    priority?: number;
    priorityDescription?: string;
    businessPartners: BusinessPartnersType[];
}
export interface BpPrioritiesTypeForceMandatory {
    priority: number;
    priorityDescription: string;
    businessPartners: BusinessPartnersType[];
}
export declare namespace BpPriorities {
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: NumberField<BpPriorities>;
    /**
     * Static representation of the [[priorityDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY_DESCRIPTION: StringField<BpPriorities>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<BpPriorities, BusinessPartners>;
    /**
     * All fields of the BpPriorities entity.
     */
    const _allFields: Array<NumberField<BpPriorities> | StringField<BpPriorities> | OneToManyLink<BpPriorities, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpPriorities>;
    /**
     * All key fields of the BpPriorities entity.
     */
    const _keyFields: Array<Field<BpPriorities>>;
    /**
     * Mapping of all key field names to the respective static field property BpPriorities.
     */
    const _keys: {
        [keys: string]: Field<BpPriorities>;
    };
}
//# sourceMappingURL=BpPriorities.d.ts.map