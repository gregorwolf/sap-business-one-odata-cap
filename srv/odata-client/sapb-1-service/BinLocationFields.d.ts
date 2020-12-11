import { BinLocationFieldsRequestBuilder } from './BinLocationFieldsRequestBuilder';
import { BinLocationFieldTypeEnum } from './BinLocationFieldTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BinLocationFields" of service "SAPB1".
 */
export declare class BinLocationFields extends EntityV4 implements BinLocationFieldsType {
    /**
     * Technical entity name for BinLocationFields.
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
     * Field Type.
     * @nullable
     */
    fieldType?: BinLocationFieldTypeEnum;
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
     * Activated.
     * @nullable
     */
    activated?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `BinLocationFields`.
     * @returns A builder that constructs instances of entity type `BinLocationFields`.
     */
    static builder(): EntityBuilderType<BinLocationFields, BinLocationFieldsType>;
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
    static customField(fieldName: string): CustomFieldV4<BinLocationFields>;
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
    absEntry?: number | null;
    fieldType?: BinLocationFieldTypeEnum | null;
    fieldNumber?: number | null;
    name?: string | null;
    activated?: BoYesNoEnum | null;
    defaultFieldName?: string | null;
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
     * Static representation of the [[fieldType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_TYPE: EnumField<BinLocationFields>;
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
     * Static representation of the [[activated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVATED: EnumField<BinLocationFields>;
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
    const _allFields: Array<NumberField<BinLocationFields> | EnumField<BinLocationFields> | StringField<BinLocationFields> | OneToManyLink<BinLocationFields, BinLocationAttributes> | OneToManyLink<BinLocationFields, WarehouseSublevelCodes>>;
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