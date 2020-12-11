import { DeterminationCriteriasRequestBuilder } from './DeterminationCriteriasRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DeterminationCriterias" of service "SAPB1".
 */
export declare class DeterminationCriterias extends EntityV4 implements DeterminationCriteriasType {
    /**
     * Technical entity name for DeterminationCriterias.
     */
    static _entityName: string;
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
     * Is Active.
     * @nullable
     */
    isActive?: BoYesNoEnum;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Returns an entity builder to construct instances of `DeterminationCriterias`.
     * @returns A builder that constructs instances of entity type `DeterminationCriterias`.
     */
    static builder(): EntityBuilderType<DeterminationCriterias, DeterminationCriteriasType>;
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
    static customField(fieldName: string): CustomFieldV4<DeterminationCriterias>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DeterminationCriteriasType {
    dmcId?: number | null;
    determinationCriteria?: string | null;
    isActive?: BoYesNoEnum | null;
    priority?: number | null;
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
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE: EnumField<DeterminationCriterias>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: NumberField<DeterminationCriterias>;
    /**
     * All fields of the DeterminationCriterias entity.
     */
    const _allFields: Array<NumberField<DeterminationCriterias> | StringField<DeterminationCriterias> | EnumField<DeterminationCriterias>>;
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