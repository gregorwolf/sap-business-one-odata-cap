import { WarehouseSublevelCodesRequestBuilder } from './WarehouseSublevelCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "WarehouseSublevelCodes" of service "SAPB1".
 */
export declare class WarehouseSublevelCodes extends Entity implements WarehouseSublevelCodesType {
    /**
     * Technical entity name for WarehouseSublevelCodes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WarehouseSublevelCodes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Warehouse Sublevel.
     * @nullable
     */
    warehouseSublevel?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * One-to-one navigation property to the [[BinLocationFields]] entity.
     */
    binLocationField: BinLocationFields;
    /**
     * Returns an entity builder to construct instances `WarehouseSublevelCodes`.
     * @returns A builder that constructs instances of entity type `WarehouseSublevelCodes`.
     */
    static builder(): EntityBuilderType<WarehouseSublevelCodes, WarehouseSublevelCodesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WarehouseSublevelCodes` entity type.
     * @returns A `WarehouseSublevelCodes` request builder.
     */
    static requestBuilder(): WarehouseSublevelCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WarehouseSublevelCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WarehouseSublevelCodes`.
     */
    static customField(fieldName: string): CustomField<WarehouseSublevelCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BinLocationFields, BinLocationFieldsType } from './BinLocationFields';
export interface WarehouseSublevelCodesType {
    warehouseSublevel?: number;
    code?: string;
    description?: string;
    absEntry?: number;
    binLocationField: BinLocationFieldsType;
}
export interface WarehouseSublevelCodesTypeForceMandatory {
    warehouseSublevel: number;
    code: string;
    description: string;
    absEntry: number;
    binLocationField: BinLocationFieldsType;
}
export declare namespace WarehouseSublevelCodes {
    /**
     * Static representation of the [[warehouseSublevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_SUBLEVEL: NumberField<WarehouseSublevelCodes>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<WarehouseSublevelCodes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<WarehouseSublevelCodes>;
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<WarehouseSublevelCodes>;
    /**
     * Static representation of the one-to-one navigation property [[binLocationField]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATION_FIELD: OneToOneLink<WarehouseSublevelCodes, BinLocationFields>;
    /**
     * All fields of the WarehouseSublevelCodes entity.
     */
    const _allFields: Array<NumberField<WarehouseSublevelCodes> | StringField<WarehouseSublevelCodes> | OneToOneLink<WarehouseSublevelCodes, BinLocationFields>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WarehouseSublevelCodes>;
    /**
     * All key fields of the WarehouseSublevelCodes entity.
     */
    const _keyFields: Array<Field<WarehouseSublevelCodes>>;
    /**
     * Mapping of all key field names to the respective static field property WarehouseSublevelCodes.
     */
    const _keys: {
        [keys: string]: Field<WarehouseSublevelCodes>;
    };
}
//# sourceMappingURL=WarehouseSublevelCodes.d.ts.map