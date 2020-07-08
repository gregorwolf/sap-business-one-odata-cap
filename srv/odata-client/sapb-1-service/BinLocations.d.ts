import { BinLocationsRequestBuilder } from './BinLocationsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BinLocations" of service "SAPB1".
 */
export declare class BinLocations extends Entity implements BinLocationsType {
    /**
     * Technical entity name for BinLocations.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BinLocations.
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
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Sublevel 1.
     * @nullable
     */
    sublevel1?: string;
    /**
     * Sublevel 2.
     * @nullable
     */
    sublevel2?: string;
    /**
     * Sublevel 3.
     * @nullable
     */
    sublevel3?: string;
    /**
     * Sublevel 4.
     * @nullable
     */
    sublevel4?: string;
    /**
     * Bin Code.
     * @nullable
     */
    binCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Alternative Sort Code.
     * @nullable
     */
    alternativeSortCode?: string;
    /**
     * Bar Code.
     * @nullable
     */
    barCode?: string;
    /**
     * Attribute 1.
     * @nullable
     */
    attribute1?: string;
    /**
     * Attribute 2.
     * @nullable
     */
    attribute2?: string;
    /**
     * Attribute 3.
     * @nullable
     */
    attribute3?: string;
    /**
     * Attribute 4.
     * @nullable
     */
    attribute4?: string;
    /**
     * Attribute 5.
     * @nullable
     */
    attribute5?: string;
    /**
     * Attribute 6.
     * @nullable
     */
    attribute6?: string;
    /**
     * Attribute 7.
     * @nullable
     */
    attribute7?: string;
    /**
     * Attribute 8.
     * @nullable
     */
    attribute8?: string;
    /**
     * Attribute 9.
     * @nullable
     */
    attribute9?: string;
    /**
     * Attribute 10.
     * @nullable
     */
    attribute10?: string;
    /**
     * Specific Item.
     * @nullable
     */
    specificItem?: string;
    /**
     * Specific Item Group.
     * @nullable
     */
    specificItemGroup?: number;
    /**
     * Restriction Reason.
     * @nullable
     */
    restrictionReason?: string;
    /**
     * Date Restriction Changed.
     * @nullable
     */
    dateRestrictionChanged?: Moment;
    /**
     * Minimum Qty.
     * @nullable
     */
    minimumQty?: number;
    /**
     * Maximum Qty.
     * @nullable
     */
    maximumQty?: number;
    /**
     * Maximum Weight.
     * @nullable
     */
    maximumWeight?: number;
    /**
     * Maximum Weight 1.
     * @nullable
     */
    maximumWeight1?: number;
    /**
     * Maximum Weight Unit.
     * @nullable
     */
    maximumWeightUnit?: number;
    /**
     * Maximum Weight Unit 1.
     * @nullable
     */
    maximumWeightUnit1?: number;
    /**
     * Specific Uo M.
     * @nullable
     */
    specificUoM?: number;
    /**
     * Specific Uo M Group.
     * @nullable
     */
    specificUoMGroup?: number;
    /**
     * One-to-many navigation property to the [[Warehouses]] entity.
     */
    warehouses: Warehouses[];
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse2: Warehouses;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[ItemGroups]] entity.
     */
    itemGroups: ItemGroups;
    /**
     * One-to-one navigation property to the [[WeightMeasures]] entity.
     */
    weightMeasure: WeightMeasures;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
     */
    unitOfMeasurement: UnitOfMeasurements;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurementGroups]] entity.
     */
    unitOfMeasurementGroup: UnitOfMeasurementGroups;
    /**
     * Returns an entity builder to construct instances `BinLocations`.
     * @returns A builder that constructs instances of entity type `BinLocations`.
     */
    static builder(): EntityBuilderType<BinLocations, BinLocationsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BinLocations` entity type.
     * @returns A `BinLocations` request builder.
     */
    static requestBuilder(): BinLocationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BinLocations`.
     */
    static customField(fieldName: string): CustomField<BinLocations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Warehouses, WarehousesType } from './Warehouses';
import { Items, ItemsType } from './Items';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { WeightMeasures, WeightMeasuresType } from './WeightMeasures';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
import { UnitOfMeasurementGroups, UnitOfMeasurementGroupsType } from './UnitOfMeasurementGroups';
export interface BinLocationsType {
    absEntry?: number;
    warehouse?: string;
    sublevel1?: string;
    sublevel2?: string;
    sublevel3?: string;
    sublevel4?: string;
    binCode?: string;
    description?: string;
    alternativeSortCode?: string;
    barCode?: string;
    attribute1?: string;
    attribute2?: string;
    attribute3?: string;
    attribute4?: string;
    attribute5?: string;
    attribute6?: string;
    attribute7?: string;
    attribute8?: string;
    attribute9?: string;
    attribute10?: string;
    specificItem?: string;
    specificItemGroup?: number;
    restrictionReason?: string;
    dateRestrictionChanged?: Moment;
    minimumQty?: number;
    maximumQty?: number;
    maximumWeight?: number;
    maximumWeight1?: number;
    maximumWeightUnit?: number;
    maximumWeightUnit1?: number;
    specificUoM?: number;
    specificUoMGroup?: number;
    warehouses: WarehousesType[];
    warehouse2: WarehousesType;
    item: ItemsType;
    itemGroups: ItemGroupsType;
    weightMeasure: WeightMeasuresType;
    unitOfMeasurement: UnitOfMeasurementsType;
    unitOfMeasurementGroup: UnitOfMeasurementGroupsType;
}
export interface BinLocationsTypeForceMandatory {
    absEntry: number;
    warehouse: string;
    sublevel1: string;
    sublevel2: string;
    sublevel3: string;
    sublevel4: string;
    binCode: string;
    description: string;
    alternativeSortCode: string;
    barCode: string;
    attribute1: string;
    attribute2: string;
    attribute3: string;
    attribute4: string;
    attribute5: string;
    attribute6: string;
    attribute7: string;
    attribute8: string;
    attribute9: string;
    attribute10: string;
    specificItem: string;
    specificItemGroup: number;
    restrictionReason: string;
    dateRestrictionChanged: Moment;
    minimumQty: number;
    maximumQty: number;
    maximumWeight: number;
    maximumWeight1: number;
    maximumWeightUnit: number;
    maximumWeightUnit1: number;
    specificUoM: number;
    specificUoMGroup: number;
    warehouses: WarehousesType[];
    warehouse2: WarehousesType;
    item: ItemsType;
    itemGroups: ItemGroupsType;
    weightMeasure: WeightMeasuresType;
    unitOfMeasurement: UnitOfMeasurementsType;
    unitOfMeasurementGroup: UnitOfMeasurementGroupsType;
}
export declare namespace BinLocations {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<BinLocations>;
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: StringField<BinLocations>;
    /**
     * Static representation of the [[sublevel1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBLEVEL_1: StringField<BinLocations>;
    /**
     * Static representation of the [[sublevel2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBLEVEL_2: StringField<BinLocations>;
    /**
     * Static representation of the [[sublevel3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBLEVEL_3: StringField<BinLocations>;
    /**
     * Static representation of the [[sublevel4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBLEVEL_4: StringField<BinLocations>;
    /**
     * Static representation of the [[binCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_CODE: StringField<BinLocations>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BinLocations>;
    /**
     * Static representation of the [[alternativeSortCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_SORT_CODE: StringField<BinLocations>;
    /**
     * Static representation of the [[barCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BAR_CODE: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_1: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_2: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_3: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_4: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_5: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_6: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_7: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_8: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_9: StringField<BinLocations>;
    /**
     * Static representation of the [[attribute10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_10: StringField<BinLocations>;
    /**
     * Static representation of the [[specificItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIFIC_ITEM: StringField<BinLocations>;
    /**
     * Static representation of the [[specificItemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIFIC_ITEM_GROUP: NumberField<BinLocations>;
    /**
     * Static representation of the [[restrictionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTRICTION_REASON: StringField<BinLocations>;
    /**
     * Static representation of the [[dateRestrictionChanged]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_RESTRICTION_CHANGED: DateField<BinLocations>;
    /**
     * Static representation of the [[minimumQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_QTY: NumberField<BinLocations>;
    /**
     * Static representation of the [[maximumQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_QTY: NumberField<BinLocations>;
    /**
     * Static representation of the [[maximumWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_WEIGHT: NumberField<BinLocations>;
    /**
     * Static representation of the [[maximumWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_WEIGHT_1: NumberField<BinLocations>;
    /**
     * Static representation of the [[maximumWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_WEIGHT_UNIT: NumberField<BinLocations>;
    /**
     * Static representation of the [[maximumWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_WEIGHT_UNIT_1: NumberField<BinLocations>;
    /**
     * Static representation of the [[specificUoM]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIFIC_UO_M: NumberField<BinLocations>;
    /**
     * Static representation of the [[specificUoMGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIFIC_UO_M_GROUP: NumberField<BinLocations>;
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSES: OneToManyLink<BinLocations, Warehouses>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_2: OneToOneLink<BinLocations, Warehouses>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<BinLocations, Items>;
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToOneLink<BinLocations, ItemGroups>;
    /**
     * Static representation of the one-to-one navigation property [[weightMeasure]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_MEASURE: OneToOneLink<BinLocations, WeightMeasures>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT: OneToOneLink<BinLocations, UnitOfMeasurements>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<BinLocations, UnitOfMeasurementGroups>;
    /**
     * All fields of the BinLocations entity.
     */
    const _allFields: Array<NumberField<BinLocations> | StringField<BinLocations> | DateField<BinLocations> | OneToManyLink<BinLocations, Warehouses> | OneToOneLink<BinLocations, Warehouses> | OneToOneLink<BinLocations, Items> | OneToOneLink<BinLocations, ItemGroups> | OneToOneLink<BinLocations, WeightMeasures> | OneToOneLink<BinLocations, UnitOfMeasurements> | OneToOneLink<BinLocations, UnitOfMeasurementGroups>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BinLocations>;
    /**
     * All key fields of the BinLocations entity.
     */
    const _keyFields: Array<Field<BinLocations>>;
    /**
     * Mapping of all key field names to the respective static field property BinLocations.
     */
    const _keys: {
        [keys: string]: Field<BinLocations>;
    };
}
//# sourceMappingURL=BinLocations.d.ts.map