import { SalesOpportunitySourcesSetupRequestBuilder } from './SalesOpportunitySourcesSetupRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesOpportunitySourcesSetup" of service "SAPB1".
 */
export declare class SalesOpportunitySourcesSetup extends EntityV4 implements SalesOpportunitySourcesSetupType {
    /**
     * Technical entity name for SalesOpportunitySourcesSetup.
     */
    static _entityName: string;
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
     * Returns an entity builder to construct instances of `SalesOpportunitySourcesSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunitySourcesSetup`.
     */
    static builder(): EntityBuilderType<SalesOpportunitySourcesSetup, SalesOpportunitySourcesSetupType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunitySourcesSetup` entity type.
     * @returns A `SalesOpportunitySourcesSetup` request builder.
     */
    static requestBuilder(): SalesOpportunitySourcesSetupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunitySourcesSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunitySourcesSetup`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesOpportunitySourcesSetup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
export interface SalesOpportunitySourcesSetupType {
    sequenceNo?: number | null;
    description?: string | null;
    sort?: number | null;
    salesOpportunities: SalesOpportunitiesType[];
}
export declare namespace SalesOpportunitySourcesSetup {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_NO: NumberField<SalesOpportunitySourcesSetup>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<SalesOpportunitySourcesSetup>;
    /**
     * Static representation of the [[sort]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SORT: NumberField<SalesOpportunitySourcesSetup>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<SalesOpportunitySourcesSetup, SalesOpportunities>;
    /**
     * All fields of the SalesOpportunitySourcesSetup entity.
     */
    const _allFields: Array<NumberField<SalesOpportunitySourcesSetup> | StringField<SalesOpportunitySourcesSetup> | OneToManyLink<SalesOpportunitySourcesSetup, SalesOpportunities>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesOpportunitySourcesSetup>;
    /**
     * All key fields of the SalesOpportunitySourcesSetup entity.
     */
    const _keyFields: Array<Field<SalesOpportunitySourcesSetup>>;
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunitySourcesSetup.
     */
    const _keys: {
        [keys: string]: Field<SalesOpportunitySourcesSetup>;
    };
}
//# sourceMappingURL=SalesOpportunitySourcesSetup.d.ts.map