import { CycleCountDeterminationsRequestBuilder } from './CycleCountDeterminationsRequestBuilder';
import { CycleCountDeterminationSetup } from './CycleCountDeterminationSetup';
import { CycleCountDeterminationCycleByEnum } from './CycleCountDeterminationCycleByEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CycleCountDeterminations" of service "SAPB1".
 */
export declare class CycleCountDeterminations extends EntityV4 implements CycleCountDeterminationsType {
    /**
     * Technical entity name for CycleCountDeterminations.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Cycle By.
     * @nullable
     */
    cycleBy?: CycleCountDeterminationCycleByEnum;
    /**
     * Cycle Count Determination Setup Collection.
     * @nullable
     */
    cycleCountDeterminationSetupCollection?: CycleCountDeterminationSetup[];
    /**
     * Returns an entity builder to construct instances of `CycleCountDeterminations`.
     * @returns A builder that constructs instances of entity type `CycleCountDeterminations`.
     */
    static builder(): EntityBuilderType<CycleCountDeterminations, CycleCountDeterminationsType>;
    /**
     * Returns a request builder to construct requests for operations on the `CycleCountDeterminations` entity type.
     * @returns A `CycleCountDeterminations` request builder.
     */
    static requestBuilder(): CycleCountDeterminationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CycleCountDeterminations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CycleCountDeterminations`.
     */
    static customField(fieldName: string): CustomFieldV4<CycleCountDeterminations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CycleCountDeterminationsType {
    warehouseCode?: string | null;
    cycleBy?: CycleCountDeterminationCycleByEnum | null;
    cycleCountDeterminationSetupCollection?: CycleCountDeterminationSetup[] | null;
}
export declare namespace CycleCountDeterminations {
    /**
     * Static representation of the [[warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_CODE: StringField<CycleCountDeterminations>;
    /**
     * Static representation of the [[cycleBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CYCLE_BY: EnumField<CycleCountDeterminations>;
    /**
     * Static representation of the [[cycleCountDeterminationSetupCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CYCLE_COUNT_DETERMINATION_SETUP_COLLECTION: CollectionField<CycleCountDeterminations, CycleCountDeterminationSetup>;
    /**
     * All fields of the CycleCountDeterminations entity.
     */
    const _allFields: Array<StringField<CycleCountDeterminations> | EnumField<CycleCountDeterminations> | CollectionField<CycleCountDeterminations, CycleCountDeterminationSetup>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CycleCountDeterminations>;
    /**
     * All key fields of the CycleCountDeterminations entity.
     */
    const _keyFields: Array<Field<CycleCountDeterminations>>;
    /**
     * Mapping of all key field names to the respective static field property CycleCountDeterminations.
     */
    const _keys: {
        [keys: string]: Field<CycleCountDeterminations>;
    };
}
//# sourceMappingURL=CycleCountDeterminations.d.ts.map