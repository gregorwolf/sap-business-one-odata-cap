import { SalesOpportunityInterestsSetupRequestBuilder } from './SalesOpportunityInterestsSetupRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "SalesOpportunityInterestsSetup" of service "SAPB1".
 */
export declare class SalesOpportunityInterestsSetup extends Entity implements SalesOpportunityInterestsSetupType {
    /**
     * Technical entity name for SalesOpportunityInterestsSetup.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesOpportunityInterestsSetup.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Sort.
     * @nullable
     */
    sort?: number;
    /**
     * One-to-many navigation property to the [[SalesOpportunities]] entity.
     */
    salesOpportunities: SalesOpportunities[];
    /**
     * Returns an entity builder to construct instances `SalesOpportunityInterestsSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunityInterestsSetup`.
     */
    static builder(): EntityBuilderType<SalesOpportunityInterestsSetup, SalesOpportunityInterestsSetupTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunityInterestsSetup` entity type.
     * @returns A `SalesOpportunityInterestsSetup` request builder.
     */
    static requestBuilder(): SalesOpportunityInterestsSetupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityInterestsSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunityInterestsSetup`.
     */
    static customField(fieldName: string): CustomField<SalesOpportunityInterestsSetup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
export interface SalesOpportunityInterestsSetupType {
    sequenceNo?: number;
    description?: string;
    sort?: number;
    salesOpportunities: SalesOpportunitiesType[];
}
export interface SalesOpportunityInterestsSetupTypeForceMandatory {
    sequenceNo: number;
    description: string;
    sort: number;
    salesOpportunities: SalesOpportunitiesType[];
}
export declare namespace SalesOpportunityInterestsSetup {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_NO: NumberField<SalesOpportunityInterestsSetup>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<SalesOpportunityInterestsSetup>;
    /**
     * Static representation of the [[sort]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SORT: NumberField<SalesOpportunityInterestsSetup>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<SalesOpportunityInterestsSetup, SalesOpportunities>;
    /**
     * All fields of the SalesOpportunityInterestsSetup entity.
     */
    const _allFields: Array<NumberField<SalesOpportunityInterestsSetup> | StringField<SalesOpportunityInterestsSetup> | OneToManyLink<SalesOpportunityInterestsSetup, SalesOpportunities>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesOpportunityInterestsSetup>;
    /**
     * All key fields of the SalesOpportunityInterestsSetup entity.
     */
    const _keyFields: Array<Field<SalesOpportunityInterestsSetup>>;
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunityInterestsSetup.
     */
    const _keys: {
        [keys: string]: Field<SalesOpportunityInterestsSetup>;
    };
}
//# sourceMappingURL=SalesOpportunityInterestsSetup.d.ts.map