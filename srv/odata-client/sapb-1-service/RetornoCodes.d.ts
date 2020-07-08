import { RetornoCodesRequestBuilder } from './RetornoCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "RetornoCodes" of service "SAPB1".
 */
export declare class RetornoCodes extends Entity implements RetornoCodesType {
    /**
     * Technical entity name for RetornoCodes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RetornoCodes.
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
     * Occurence Code.
     * @nullable
     */
    occurenceCode?: number;
    /**
     * Movement Code.
     * @nullable
     */
    movementCode?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Color.
     * @nullable
     */
    color?: number;
    /**
     * File Format.
     * @nullable
     */
    fileFormat?: string;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Returns an entity builder to construct instances `RetornoCodes`.
     * @returns A builder that constructs instances of entity type `RetornoCodes`.
     */
    static builder(): EntityBuilderType<RetornoCodes, RetornoCodesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RetornoCodes` entity type.
     * @returns A `RetornoCodes` request builder.
     */
    static requestBuilder(): RetornoCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RetornoCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RetornoCodes`.
     */
    static customField(fieldName: string): CustomField<RetornoCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface RetornoCodesType {
    absEntry?: number;
    occurenceCode?: number;
    movementCode?: number;
    description?: string;
    color?: number;
    fileFormat?: string;
    bankCode?: string;
}
export interface RetornoCodesTypeForceMandatory {
    absEntry: number;
    occurenceCode: number;
    movementCode: number;
    description: string;
    color: number;
    fileFormat: string;
    bankCode: string;
}
export declare namespace RetornoCodes {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<RetornoCodes>;
    /**
     * Static representation of the [[occurenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCCURENCE_CODE: NumberField<RetornoCodes>;
    /**
     * Static representation of the [[movementCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOVEMENT_CODE: NumberField<RetornoCodes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<RetornoCodes>;
    /**
     * Static representation of the [[color]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLOR: NumberField<RetornoCodes>;
    /**
     * Static representation of the [[fileFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_FORMAT: StringField<RetornoCodes>;
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE: StringField<RetornoCodes>;
    /**
     * All fields of the RetornoCodes entity.
     */
    const _allFields: Array<NumberField<RetornoCodes> | StringField<RetornoCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RetornoCodes>;
    /**
     * All key fields of the RetornoCodes entity.
     */
    const _keyFields: Array<Field<RetornoCodes>>;
    /**
     * Mapping of all key field names to the respective static field property RetornoCodes.
     */
    const _keys: {
        [keys: string]: Field<RetornoCodes>;
    };
}
//# sourceMappingURL=RetornoCodes.d.ts.map