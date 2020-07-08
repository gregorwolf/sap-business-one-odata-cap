import { DeterminationCriteriasRequestBuilder } from './DeterminationCriteriasRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "DeterminationCriterias" of service "SAPB1".
 */
export declare class DeterminationCriterias extends Entity implements DeterminationCriteriasType {
    /**
     * Technical entity name for DeterminationCriterias.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DeterminationCriterias.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Dmc Id.
     * @nullable
     */
    dmcId?: number;
    /**
     * Determination Criteria.
     * @nullable
     */
    determinationCriteria?: string;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Returns an entity builder to construct instances `DeterminationCriterias`.
     * @returns A builder that constructs instances of entity type `DeterminationCriterias`.
     */
    static builder(): EntityBuilderType<DeterminationCriterias, DeterminationCriteriasTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DeterminationCriterias` entity type.
     * @returns A `DeterminationCriterias` request builder.
     */
    static requestBuilder(): DeterminationCriteriasRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeterminationCriterias`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeterminationCriterias`.
     */
    static customField(fieldName: string): CustomField<DeterminationCriterias>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DeterminationCriteriasType {
    dmcId?: number;
    determinationCriteria?: string;
    priority?: number;
}
export interface DeterminationCriteriasTypeForceMandatory {
    dmcId: number;
    determinationCriteria: string;
    priority: number;
}
export declare namespace DeterminationCriterias {
    /**
     * Static representation of the [[dmcId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DMC_ID: NumberField<DeterminationCriterias>;
    /**
     * Static representation of the [[determinationCriteria]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETERMINATION_CRITERIA: StringField<DeterminationCriterias>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: NumberField<DeterminationCriterias>;
    /**
     * All fields of the DeterminationCriterias entity.
     */
    const _allFields: Array<NumberField<DeterminationCriterias> | StringField<DeterminationCriterias>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DeterminationCriterias>;
    /**
     * All key fields of the DeterminationCriterias entity.
     */
    const _keyFields: Array<Field<DeterminationCriterias>>;
    /**
     * Mapping of all key field names to the respective static field property DeterminationCriterias.
     */
    const _keys: {
        [keys: string]: Field<DeterminationCriterias>;
    };
}
//# sourceMappingURL=DeterminationCriterias.d.ts.map