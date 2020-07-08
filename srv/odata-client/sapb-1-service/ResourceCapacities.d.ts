import { ResourceCapacitiesRequestBuilder } from './ResourceCapacitiesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ResourceCapacities" of service "SAPB1".
 */
export declare class ResourceCapacities extends Entity implements ResourceCapacitiesType {
    /**
     * Technical entity name for ResourceCapacities.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ResourceCapacities.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Id.
     * @nullable
     */
    id?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Capacity.
     * @nullable
     */
    capacity?: number;
    /**
     * Source Entry.
     * @nullable
     */
    sourceEntry?: number;
    /**
     * Source Line Num.
     * @nullable
     */
    sourceLineNum?: number;
    /**
     * Base Entry.
     * @nullable
     */
    baseEntry?: number;
    /**
     * Base Line Num.
     * @nullable
     */
    baseLineNum?: number;
    /**
     * Owning Entry.
     * @nullable
     */
    owningEntry?: number;
    /**
     * Owning Line Num.
     * @nullable
     */
    owningLineNum?: number;
    /**
     * Reverted Entry.
     * @nullable
     */
    revertedEntry?: number;
    /**
     * Reverted Line Num.
     * @nullable
     */
    revertedLineNum?: number;
    /**
     * Memo.
     * @nullable
     */
    memo?: string;
    /**
     * Single Run Capacity.
     * @nullable
     */
    singleRunCapacity?: number;
    /**
     * Single Run Memo.
     * @nullable
     */
    singleRunMemo?: string;
    /**
     * One-to-one navigation property to the [[Resources]] entity.
     */
    resource: Resources;
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse2: Warehouses;
    /**
     * Returns an entity builder to construct instances `ResourceCapacities`.
     * @returns A builder that constructs instances of entity type `ResourceCapacities`.
     */
    static builder(): EntityBuilderType<ResourceCapacities, ResourceCapacitiesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ResourceCapacities` entity type.
     * @returns A `ResourceCapacities` request builder.
     */
    static requestBuilder(): ResourceCapacitiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceCapacities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ResourceCapacities`.
     */
    static customField(fieldName: string): CustomField<ResourceCapacities>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Resources, ResourcesType } from './Resources';
import { Warehouses, WarehousesType } from './Warehouses';
export interface ResourceCapacitiesType {
    id?: number;
    code?: string;
    warehouse?: string;
    date?: Moment;
    capacity?: number;
    sourceEntry?: number;
    sourceLineNum?: number;
    baseEntry?: number;
    baseLineNum?: number;
    owningEntry?: number;
    owningLineNum?: number;
    revertedEntry?: number;
    revertedLineNum?: number;
    memo?: string;
    singleRunCapacity?: number;
    singleRunMemo?: string;
    resource: ResourcesType;
    warehouse2: WarehousesType;
}
export interface ResourceCapacitiesTypeForceMandatory {
    id: number;
    code: string;
    warehouse: string;
    date: Moment;
    capacity: number;
    sourceEntry: number;
    sourceLineNum: number;
    baseEntry: number;
    baseLineNum: number;
    owningEntry: number;
    owningLineNum: number;
    revertedEntry: number;
    revertedLineNum: number;
    memo: string;
    singleRunCapacity: number;
    singleRunMemo: string;
    resource: ResourcesType;
    warehouse2: WarehousesType;
}
export declare namespace ResourceCapacities {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<ResourceCapacities>;
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: StringField<ResourceCapacities>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<ResourceCapacities>;
    /**
     * Static representation of the [[capacity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAPACITY: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[sourceEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_ENTRY: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[sourceLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_LINE_NUM: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_ENTRY: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[baseLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_LINE_NUM: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[owningEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNING_ENTRY: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[owningLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNING_LINE_NUM: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[revertedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVERTED_ENTRY: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[revertedLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVERTED_LINE_NUM: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[memo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MEMO: StringField<ResourceCapacities>;
    /**
     * Static representation of the [[singleRunCapacity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SINGLE_RUN_CAPACITY: NumberField<ResourceCapacities>;
    /**
     * Static representation of the [[singleRunMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SINGLE_RUN_MEMO: StringField<ResourceCapacities>;
    /**
     * Static representation of the one-to-one navigation property [[resource]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE: OneToOneLink<ResourceCapacities, Resources>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_2: OneToOneLink<ResourceCapacities, Warehouses>;
    /**
     * All fields of the ResourceCapacities entity.
     */
    const _allFields: Array<NumberField<ResourceCapacities> | StringField<ResourceCapacities> | DateField<ResourceCapacities> | OneToOneLink<ResourceCapacities, Resources> | OneToOneLink<ResourceCapacities, Warehouses>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ResourceCapacities>;
    /**
     * All key fields of the ResourceCapacities entity.
     */
    const _keyFields: Array<Field<ResourceCapacities>>;
    /**
     * Mapping of all key field names to the respective static field property ResourceCapacities.
     */
    const _keys: {
        [keys: string]: Field<ResourceCapacities>;
    };
}
//# sourceMappingURL=ResourceCapacities.d.ts.map