import { UnitOfMeasurementsRequestBuilder } from './UnitOfMeasurementsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UnitOfMeasurements" of service "SAPB1".
 */
export declare class UnitOfMeasurements extends EntityV4 implements UnitOfMeasurementsType {
    /**
     * Technical entity name for UnitOfMeasurements.
     */
    static _entityName: string;
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
     * Length 1.
     * @nullable
     */
    length1?: number;
    /**
     * Length 1 Unit.
     * @nullable
     */
    length1Unit?: number;
    /**
     * Length 2.
     * @nullable
     */
    length2?: number;
    /**
     * Length 2 Unit.
     * @nullable
     */
    length2Unit?: number;
    /**
     * Width 1.
     * @nullable
     */
    width1?: number;
    /**
     * Width 1 Unit.
     * @nullable
     */
    width1Unit?: number;
    /**
     * Width 2.
     * @nullable
     */
    width2?: number;
    /**
     * Width 2 Unit.
     * @nullable
     */
    width2Unit?: number;
    /**
     * Height 1.
     * @nullable
     */
    height1?: number;
    /**
     * Height 1 Unit.
     * @nullable
     */
    height1Unit?: number;
    /**
     * Height 2.
     * @nullable
     */
    height2?: number;
    /**
     * Height 2 Unit.
     * @nullable
     */
    height2Unit?: number;
    /**
     * Volume.
     * @nullable
     */
    volume?: number;
    /**
     * Volume Unit.
     * @nullable
     */
    volumeUnit?: number;
    /**
     * Weight 1.
     * @nullable
     */
    weight1?: number;
    /**
     * Weight 1 Unit.
     * @nullable
     */
    weight1Unit?: number;
    /**
     * Weight 2.
     * @nullable
     */
    weight2?: number;
    /**
     * Weight 2 Unit.
     * @nullable
     */
    weight2Unit?: number;
    /**
     * International Symbol.
     * @nullable
     */
    internationalSymbol?: string;
    /**
     * One-to-many navigation property to the [[ItemGroups]] entity.
     */
    itemGroups: ItemGroups[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[ProductionOrders]] entity.
     */
    productionOrders: ProductionOrders[];
    /**
     * One-to-many navigation property to the [[UnitOfMeasurementGroups]] entity.
     */
    unitOfMeasurementGroups: UnitOfMeasurementGroups[];
    /**
     * One-to-many navigation property to the [[BarCodes]] entity.
     */
    barCodes: BarCodes[];
    /**
     * One-to-many navigation property to the [[BinLocations]] entity.
     */
    binLocations: BinLocations[];
    /**
     * Returns an entity builder to construct instances of `UnitOfMeasurements`.
     * @returns A builder that constructs instances of entity type `UnitOfMeasurements`.
     */
    static builder(): EntityBuilderType<UnitOfMeasurements, UnitOfMeasurementsType>;
    /**
     * Returns a request builder to construct requests for operations on the `UnitOfMeasurements` entity type.
     * @returns A `UnitOfMeasurements` request builder.
     */
    static requestBuilder(): UnitOfMeasurementsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UnitOfMeasurements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UnitOfMeasurements`.
     */
    static customField(fieldName: string): CustomFieldV4<UnitOfMeasurements>;
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
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { UnitOfMeasurementGroups, UnitOfMeasurementGroupsType } from './UnitOfMeasurementGroups';
import { BarCodes, BarCodesType } from './BarCodes';
import { BinLocations, BinLocationsType } from './BinLocations';
export interface UnitOfMeasurementsType {
    absEntry?: number | null;
    code?: string | null;
    name?: string | null;
    length1?: number | null;
    length1Unit?: number | null;
    length2?: number | null;
    length2Unit?: number | null;
    width1?: number | null;
    width1Unit?: number | null;
    width2?: number | null;
    width2Unit?: number | null;
    height1?: number | null;
    height1Unit?: number | null;
    height2?: number | null;
    height2Unit?: number | null;
    volume?: number | null;
    volumeUnit?: number | null;
    weight1?: number | null;
    weight1Unit?: number | null;
    weight2?: number | null;
    weight2Unit?: number | null;
    internationalSymbol?: string | null;
    itemGroups: ItemGroupsType[];
    items: ItemsType[];
    productionOrders: ProductionOrdersType[];
    unitOfMeasurementGroups: UnitOfMeasurementGroupsType[];
    barCodes: BarCodesType[];
    binLocations: BinLocationsType[];
}
export declare namespace UnitOfMeasurements {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<UnitOfMeasurements>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<UnitOfMeasurements>;
    /**
     * Static representation of the [[length1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_1: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[length1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_1_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[length2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_2: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[length2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_2_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[width1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_1: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[width1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_1_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[width2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_2: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[width2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_2_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[height1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_1: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[height1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_1_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[height2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_2: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[height2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_2_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[volume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VOLUME: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[volumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VOLUME_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[weight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_1: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[weight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_1_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[weight2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_2: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[weight2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_2_UNIT: NumberField<UnitOfMeasurements>;
    /**
     * Static representation of the [[internationalSymbol]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_SYMBOL: StringField<UnitOfMeasurements>;
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToManyLink<UnitOfMeasurements, ItemGroups>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<UnitOfMeasurements, Items>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<UnitOfMeasurements, ProductionOrders>;
    /**
     * Static representation of the one-to-many navigation property [[unitOfMeasurementGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT_GROUPS: OneToManyLink<UnitOfMeasurements, UnitOfMeasurementGroups>;
    /**
     * Static representation of the one-to-many navigation property [[barCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BAR_CODES: OneToManyLink<UnitOfMeasurements, BarCodes>;
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATIONS: OneToManyLink<UnitOfMeasurements, BinLocations>;
    /**
     * All fields of the UnitOfMeasurements entity.
     */
    const _allFields: Array<NumberField<UnitOfMeasurements> | StringField<UnitOfMeasurements> | OneToManyLink<UnitOfMeasurements, ItemGroups> | OneToManyLink<UnitOfMeasurements, Items> | OneToManyLink<UnitOfMeasurements, ProductionOrders> | OneToManyLink<UnitOfMeasurements, UnitOfMeasurementGroups> | OneToManyLink<UnitOfMeasurements, BarCodes> | OneToManyLink<UnitOfMeasurements, BinLocations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UnitOfMeasurements>;
    /**
     * All key fields of the UnitOfMeasurements entity.
     */
    const _keyFields: Array<Field<UnitOfMeasurements>>;
    /**
     * Mapping of all key field names to the respective static field property UnitOfMeasurements.
     */
    const _keys: {
        [keys: string]: Field<UnitOfMeasurements>;
    };
}
//# sourceMappingURL=UnitOfMeasurements.d.ts.map