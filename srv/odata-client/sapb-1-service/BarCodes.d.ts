import { BarCodesRequestBuilder } from './BarCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BarCodes" of service "SAPB1".
 */
export declare class BarCodes extends Entity implements BarCodesType {
    /**
     * Technical entity name for BarCodes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BarCodes.
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
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Barcode.
     * @nullable
     */
    barcode?: string;
    /**
     * Free Text.
     * @nullable
     */
    freeText?: string;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
     */
    unitOfMeasurement: UnitOfMeasurements;
    /**
     * Returns an entity builder to construct instances `BarCodes`.
     * @returns A builder that constructs instances of entity type `BarCodes`.
     */
    static builder(): EntityBuilderType<BarCodes, BarCodesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BarCodes` entity type.
     * @returns A `BarCodes` request builder.
     */
    static requestBuilder(): BarCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BarCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BarCodes`.
     */
    static customField(fieldName: string): CustomField<BarCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
export interface BarCodesType {
    absEntry?: number;
    itemNo?: string;
    uoMEntry?: number;
    barcode?: string;
    freeText?: string;
    item: ItemsType;
    unitOfMeasurement: UnitOfMeasurementsType;
}
export interface BarCodesTypeForceMandatory {
    absEntry: number;
    itemNo: string;
    uoMEntry: number;
    barcode: string;
    freeText: string;
    item: ItemsType;
    unitOfMeasurement: UnitOfMeasurementsType;
}
export declare namespace BarCodes {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<BarCodes>;
    /**
     * Static representation of the [[itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_NO: StringField<BarCodes>;
    /**
     * Static representation of the [[uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UO_M_ENTRY: NumberField<BarCodes>;
    /**
     * Static representation of the [[barcode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BARCODE: StringField<BarCodes>;
    /**
     * Static representation of the [[freeText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_TEXT: StringField<BarCodes>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<BarCodes, Items>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT: OneToOneLink<BarCodes, UnitOfMeasurements>;
    /**
     * All fields of the BarCodes entity.
     */
    const _allFields: Array<NumberField<BarCodes> | StringField<BarCodes> | OneToOneLink<BarCodes, Items> | OneToOneLink<BarCodes, UnitOfMeasurements>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BarCodes>;
    /**
     * All key fields of the BarCodes entity.
     */
    const _keyFields: Array<Field<BarCodes>>;
    /**
     * Mapping of all key field names to the respective static field property BarCodes.
     */
    const _keys: {
        [keys: string]: Field<BarCodes>;
    };
}
//# sourceMappingURL=BarCodes.d.ts.map