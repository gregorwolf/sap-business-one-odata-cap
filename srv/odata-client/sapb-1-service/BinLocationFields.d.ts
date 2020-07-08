import { BinLocationFieldsRequestBuilder } from './BinLocationFieldsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BinLocationFields" of service "SAPB1".
 */
export declare class BinLocationFields extends Entity implements BinLocationFieldsType {
    /**
     * Technical entity name for BinLocationFields.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BinLocationFields.
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
     * Field Number.
     * @nullable
     */
    fieldNumber?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Default Field Name.
     * @nullable
     */
    defaultFieldName?: string;
    /**
     * One-to-many navigation property to the [[BinLocationAttributes]] entity.
     */
    binLocationAttributes: BinLocationAttributes[];
    /**
     * One-to-many navigation property to the [[WarehouseSublevelCodes]] entity.
     */
    warehouseSublevelCodes: WarehouseSublevelCodes[];
    /**
     * Returns an entity builder to construct instances `BinLocationFields`.
     * @returns A builder that constructs instances of entity type `BinLocationFields`.
     */
    static builder(): EntityBuilderType<BinLocationFields, BinLocationFieldsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BinLocationFields` entity type.
     * @returns A `BinLocationFields` request builder.
     */
    static requestBuilder(): BinLocationFieldsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocationFields`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BinLocationFields`.
     */
    static customField(fieldName: string): CustomField<BinLocationFields>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BinLocationAttributes, BinLocationAttributesType } from './BinLocationAttributes';
import { WarehouseSublevelCodes, WarehouseSublevelCodesType } from './WarehouseSublevelCodes';
export interface BinLocationFieldsType {
    absEntry?: number;
    fieldNumber?: number;
    name?: string;
    defaultFieldName?: string;
    binLocationAttributes: BinLocationAttributesType[];
    warehouseSublevelCodes: WarehouseSublevelCodesType[];
}
export interface BinLocationFieldsTypeForceMandatory {
    absEntry: number;
    fieldNumber: number;
    name: string;
    defaultFieldName: string;
    binLocationAttributes: BinLocationAttributesType[];
    warehouseSublevelCodes: WarehouseSublevelCodesType[];
}
export declare namespace BinLocationFields {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<BinLocationFields>;
    /**
     * Static representation of the [[fieldNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_NUMBER: NumberField<BinLocationFields>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<BinLocationFields>;
    /**
     * Static representation of the [[defaultFieldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_FIELD_NAME: StringField<BinLocationFields>;
    /**
     * Static representation of the one-to-many navigation property [[binLocationAttributes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATION_ATTRIBUTES: OneToManyLink<BinLocationFields, BinLocationAttributes>;
    /**
     * Static representation of the one-to-many navigation property [[warehouseSublevelCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_SUBLEVEL_CODES: OneToManyLink<BinLocationFields, WarehouseSublevelCodes>;
    /**
     * All fields of the BinLocationFields entity.
     */
    const _allFields: Array<NumberField<BinLocationFields> | StringField<BinLocationFields> | OneToManyLink<BinLocationFields, BinLocationAttributes> | OneToManyLink<BinLocationFields, WarehouseSublevelCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BinLocationFields>;
    /**
     * All key fields of the BinLocationFields entity.
     */
    const _keyFields: Array<Field<BinLocationFields>>;
    /**
     * Mapping of all key field names to the respective static field property BinLocationFields.
     */
    const _keys: {
        [keys: string]: Field<BinLocationFields>;
    };
}
//# sourceMappingURL=BinLocationFields.d.ts.map