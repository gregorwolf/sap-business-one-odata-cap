import { SalesOpportunityReasonsSetupRequestBuilder } from './SalesOpportunityReasonsSetupRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesOpportunityReasonsSetup" of service "SAPB1".
 */
export declare class SalesOpportunityReasonsSetup extends EntityV4 implements SalesOpportunityReasonsSetupType {
    /**
     * Technical entity name for SalesOpportunityReasonsSetup.
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
     * Returns an entity builder to construct instances of `SalesOpportunityReasonsSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunityReasonsSetup`.
     */
    static builder(): EntityBuilderType<SalesOpportunityReasonsSetup, SalesOpportunityReasonsSetupType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunityReasonsSetup` entity type.
     * @returns A `SalesOpportunityReasonsSetup` request builder.
     */
    static requestBuilder(): SalesOpportunityReasonsSetupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityReasonsSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunityReasonsSetup`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesOpportunityReasonsSetup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
export interface SalesOpportunityReasonsSetupType {
    sequenceNo?: number | null;
    description?: string | null;
    sort?: number | null;
    salesOpportunities: SalesOpportunitiesType[];
}
export declare namespace SalesOpportunityReasonsSetup {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_NO: NumberField<SalesOpportunityReasonsSetup>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<SalesOpportunityReasonsSetup>;
    /**
     * Static representation of the [[sort]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SORT: NumberField<SalesOpportunityReasonsSetup>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<SalesOpportunityReasonsSetup, SalesOpportunities>;
    /**
     * All fields of the SalesOpportunityReasonsSetup entity.
     */
    const _allFields: Array<NumberField<SalesOpportunityReasonsSetup> | StringField<SalesOpportunityReasonsSetup> | OneToManyLink<SalesOpportunityReasonsSetup, SalesOpportunities>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesOpportunityReasonsSetup>;
    /**
     * All key fields of the SalesOpportunityReasonsSetup entity.
     */
    const _keyFields: Array<Field<SalesOpportunityReasonsSetup>>;
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunityReasonsSetup.
     */
    const _keys: {
        [keys: string]: Field<SalesOpportunityReasonsSetup>;
    };
}
//# sourceMappingURL=SalesOpportunityReasonsSetup.d.ts.map