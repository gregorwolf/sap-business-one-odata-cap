import { SalesOpportunityCompetitorsSetupRequestBuilder } from './SalesOpportunityCompetitorsSetupRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "SalesOpportunityCompetitorsSetup" of service "SAPB1".
 */
export declare class SalesOpportunityCompetitorsSetup extends Entity implements SalesOpportunityCompetitorsSetupType {
    /**
     * Technical entity name for SalesOpportunityCompetitorsSetup.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesOpportunityCompetitorsSetup.
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
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Returns an entity builder to construct instances `SalesOpportunityCompetitorsSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunityCompetitorsSetup`.
     */
    static builder(): EntityBuilderType<SalesOpportunityCompetitorsSetup, SalesOpportunityCompetitorsSetupTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunityCompetitorsSetup` entity type.
     * @returns A `SalesOpportunityCompetitorsSetup` request builder.
     */
    static requestBuilder(): SalesOpportunityCompetitorsSetupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityCompetitorsSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunityCompetitorsSetup`.
     */
    static customField(fieldName: string): CustomField<SalesOpportunityCompetitorsSetup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SalesOpportunityCompetitorsSetupType {
    sequenceNo?: number;
    name?: string;
    details?: string;
}
export interface SalesOpportunityCompetitorsSetupTypeForceMandatory {
    sequenceNo: number;
    name: string;
    details: string;
}
export declare namespace SalesOpportunityCompetitorsSetup {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_NO: NumberField<SalesOpportunityCompetitorsSetup>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SalesOpportunityCompetitorsSetup>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<SalesOpportunityCompetitorsSetup>;
    /**
     * All fields of the SalesOpportunityCompetitorsSetup entity.
     */
    const _allFields: Array<NumberField<SalesOpportunityCompetitorsSetup> | StringField<SalesOpportunityCompetitorsSetup>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesOpportunityCompetitorsSetup>;
    /**
     * All key fields of the SalesOpportunityCompetitorsSetup entity.
     */
    const _keyFields: Array<Field<SalesOpportunityCompetitorsSetup>>;
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunityCompetitorsSetup.
     */
    const _keys: {
        [keys: string]: Field<SalesOpportunityCompetitorsSetup>;
    };
}
//# sourceMappingURL=SalesOpportunityCompetitorsSetup.d.ts.map