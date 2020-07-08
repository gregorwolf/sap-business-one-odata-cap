import { UnitOfMeasurementGroupsRequestBuilder } from './UnitOfMeasurementGroupsRequestBuilder';
import { UoMGroupDefinition } from './UoMGroupDefinition';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "UnitOfMeasurementGroups" of service "SAPB1".
 */
export declare class UnitOfMeasurementGroups extends Entity implements UnitOfMeasurementGroupsType {
    /**
     * Technical entity name for UnitOfMeasurementGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UnitOfMeasurementGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Base Uo M.
     * @nullable
     */
    baseUoM?: number;
    /**
     * Uo M Group Definition Collection.
     * @nullable
     */
    uoMGroupDefinitionCollection?: UoMGroupDefinition[];
    /**
     * One-to-many navigation property to the [[ItemGroups]] entity.
     */
    itemGroups: ItemGroups[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
     */
    unitOfMeasurement: UnitOfMeasurements;
    /**
     * One-to-many navigation property to the [[BinLocations]] entity.
     */
    binLocations: BinLocations[];
    /**
     * Returns an entity builder to construct instances `UnitOfMeasurementGroups`.
     * @returns A builder that constructs instances of entity type `UnitOfMeasurementGroups`.
     */
    static builder(): EntityBuilderType<UnitOfMeasurementGroups, UnitOfMeasurementGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UnitOfMeasurementGroups` entity type.
     * @returns A `UnitOfMeasurementGroups` request builder.
     */
    static requestBuilder(): UnitOfMeasurementGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UnitOfMeasurementGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UnitOfMeasurementGroups`.
     */
    static customField(fieldName: string): CustomField<UnitOfMeasurementGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Items, ItemsType } from './Items';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
import { BinLocations, BinLocationsType } from './BinLocations';
export interface UnitOfMeasurementGroupsType {
    absEntry?: number;
    code?: string;
    name?: string;
    baseUoM?: number;
    uoMGroupDefinitionCollection?: UoMGroupDefinition[];
    itemGroups: ItemGroupsType[];
    items: ItemsType[];
    unitOfMeasurement: UnitOfMeasurementsType;
    binLocations: BinLocationsType[];
}
export interface UnitOfMeasurementGroupsTypeForceMandatory {
    absEntry: number;
    code: string;
    name: string;
    baseUoM: number;
    uoMGroupDefinitionCollection: UoMGroupDefinition[];
    itemGroups: ItemGroupsType[];
    items: ItemsType[];
    unitOfMeasurement: UnitOfMeasurementsType;
    binLocations: BinLocationsType[];
}
export declare namespace UnitOfMeasurementGroups {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<UnitOfMeasurementGroups>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<UnitOfMeasurementGroups>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<UnitOfMeasurementGroups>;
    /**
     * Static representation of the [[baseUoM]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_UO_M: NumberField<UnitOfMeasurementGroups>;
    /**
     * Static representation of the [[uoMGroupDefinitionCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UO_M_GROUP_DEFINITION_COLLECTION: CollectionField<UnitOfMeasurementGroups>;
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToManyLink<UnitOfMeasurementGroups, ItemGroups>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<UnitOfMeasurementGroups, Items>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT: OneToOneLink<UnitOfMeasurementGroups, UnitOfMeasurements>;
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATIONS: OneToManyLink<UnitOfMeasurementGroups, BinLocations>;
    /**
     * All fields of the UnitOfMeasurementGroups entity.
     */
    const _allFields: Array<NumberField<UnitOfMeasurementGroups> | StringField<UnitOfMeasurementGroups> | CollectionField<UnitOfMeasurementGroups> | OneToManyLink<UnitOfMeasurementGroups, ItemGroups> | OneToManyLink<UnitOfMeasurementGroups, Items> | OneToOneLink<UnitOfMeasurementGroups, UnitOfMeasurements> | OneToManyLink<UnitOfMeasurementGroups, BinLocations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UnitOfMeasurementGroups>;
    /**
     * All key fields of the UnitOfMeasurementGroups entity.
     */
    const _keyFields: Array<Field<UnitOfMeasurementGroups>>;
    /**
     * Mapping of all key field names to the respective static field property UnitOfMeasurementGroups.
     */
    const _keys: {
        [keys: string]: Field<UnitOfMeasurementGroups>;
    };
}
//# sourceMappingURL=UnitOfMeasurementGroups.d.ts.map