import { StockTakingsRequestBuilder } from './StockTakingsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "StockTakings" of service "SAPB1".
 */
export declare class StockTakings extends Entity implements StockTakingsType {
    /**
     * Technical entity name for StockTakings.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for StockTakings.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Counted.
     * @nullable
     */
    counted?: number;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse: Warehouses;
    /**
     * Returns an entity builder to construct instances `StockTakings`.
     * @returns A builder that constructs instances of entity type `StockTakings`.
     */
    static builder(): EntityBuilderType<StockTakings, StockTakingsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `StockTakings` entity type.
     * @returns A `StockTakings` request builder.
     */
    static requestBuilder(): StockTakingsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTakings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `StockTakings`.
     */
    static customField(fieldName: string): CustomField<StockTakings>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { Warehouses, WarehousesType } from './Warehouses';
export interface StockTakingsType {
    itemCode?: string;
    warehouseCode?: string;
    counted?: number;
    item: ItemsType;
    warehouse: WarehousesType;
}
export interface StockTakingsTypeForceMandatory {
    itemCode: string;
    warehouseCode: string;
    counted: number;
    item: ItemsType;
    warehouse: WarehousesType;
}
export declare namespace StockTakings {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<StockTakings>;
    /**
     * Static representation of the [[warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_CODE: StringField<StockTakings>;
    /**
     * Static representation of the [[counted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTED: NumberField<StockTakings>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<StockTakings, Items>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: OneToOneLink<StockTakings, Warehouses>;
    /**
     * All fields of the StockTakings entity.
     */
    const _allFields: Array<StringField<StockTakings> | NumberField<StockTakings> | OneToOneLink<StockTakings, Items> | OneToOneLink<StockTakings, Warehouses>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<StockTakings>;
    /**
     * All key fields of the StockTakings entity.
     */
    const _keyFields: Array<Field<StockTakings>>;
    /**
     * Mapping of all key field names to the respective static field property StockTakings.
     */
    const _keys: {
        [keys: string]: Field<StockTakings>;
    };
}
//# sourceMappingURL=StockTakings.d.ts.map