import { BinLocationAttributesRequestBuilder } from './BinLocationAttributesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BinLocationAttributes" of service "SAPB1".
 */
export declare class BinLocationAttributes extends Entity implements BinLocationAttributesType {
    /**
     * Technical entity name for BinLocationAttributes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BinLocationAttributes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Attribute.
     * @nullable
     */
    attribute?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
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
     * Returns an entity builder to construct instances `BinLocationAttributes`.
     * @returns A builder that constructs instances of entity type `BinLocationAttributes`.
     */
    static builder(): EntityBuilderType<BinLocationAttributes, BinLocationAttributesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BinLocationAttributes` entity type.
     * @returns A `BinLocationAttributes` request builder.
     */
    static requestBuilder(): BinLocationAttributesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocationAttributes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BinLocationAttributes`.
     */
    static customField(fieldName: string): CustomField<BinLocationAttributes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BinLocationFields, BinLocationFieldsType } from './BinLocationFields';
export interface BinLocationAttributesType {
    attribute?: number;
    code?: string;
    absEntry?: number;
    binLocationField: BinLocationFieldsType;
}
export interface BinLocationAttributesTypeForceMandatory {
    attribute: number;
    code: string;
    absEntry: number;
    binLocationField: BinLocationFieldsType;
}
export declare namespace BinLocationAttributes {
    /**
     * Static representation of the [[attribute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE: NumberField<BinLocationAttributes>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<BinLocationAttributes>;
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<BinLocationAttributes>;
    /**
     * Static representation of the one-to-one navigation property [[binLocationField]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATION_FIELD: OneToOneLink<BinLocationAttributes, BinLocationFields>;
    /**
     * All fields of the BinLocationAttributes entity.
     */
    const _allFields: Array<NumberField<BinLocationAttributes> | StringField<BinLocationAttributes> | OneToOneLink<BinLocationAttributes, BinLocationFields>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BinLocationAttributes>;
    /**
     * All key fields of the BinLocationAttributes entity.
     */
    const _keyFields: Array<Field<BinLocationAttributes>>;
    /**
     * Mapping of all key field names to the respective static field property BinLocationAttributes.
     */
    const _keys: {
        [keys: string]: Field<BinLocationAttributes>;
    };
}
//# sourceMappingURL=BinLocationAttributes.d.ts.map