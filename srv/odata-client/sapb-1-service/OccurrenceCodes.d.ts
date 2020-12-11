import { OccurrenceCodesRequestBuilder } from './OccurrenceCodesRequestBuilder';
import { BoBoeStatus } from './BoBoeStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OccurrenceCodes" of service "SAPB1".
 */
export declare class OccurrenceCodes extends EntityV4 implements OccurrenceCodesType {
    /**
     * Technical entity name for OccurrenceCodes.
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
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Note.
     * @nullable
     */
    note?: string;
    /**
     * Requested Boe Status.
     * @nullable
     */
    requestedBoeStatus?: BoBoeStatus;
    /**
     * Is Movement.
     * @nullable
     */
    isMovement?: BoYesNoEnum;
    /**
     * Returns an entity builder to construct instances of `OccurrenceCodes`.
     * @returns A builder that constructs instances of entity type `OccurrenceCodes`.
     */
    static builder(): EntityBuilderType<OccurrenceCodes, OccurrenceCodesType>;
    /**
     * Returns a request builder to construct requests for operations on the `OccurrenceCodes` entity type.
     * @returns A `OccurrenceCodes` request builder.
     */
    static requestBuilder(): OccurrenceCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OccurrenceCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OccurrenceCodes`.
     */
    static customField(fieldName: string): CustomFieldV4<OccurrenceCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface OccurrenceCodesType {
    absEntry?: number | null;
    code?: string | null;
    description?: string | null;
    note?: string | null;
    requestedBoeStatus?: BoBoeStatus | null;
    isMovement?: BoYesNoEnum | null;
}
export declare namespace OccurrenceCodes {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<OccurrenceCodes>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<OccurrenceCodes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<OccurrenceCodes>;
    /**
     * Static representation of the [[note]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTE: StringField<OccurrenceCodes>;
    /**
     * Static representation of the [[requestedBoeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTED_BOE_STATUS: EnumField<OccurrenceCodes>;
    /**
     * Static representation of the [[isMovement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_MOVEMENT: EnumField<OccurrenceCodes>;
    /**
     * All fields of the OccurrenceCodes entity.
     */
    const _allFields: Array<NumberField<OccurrenceCodes> | StringField<OccurrenceCodes> | EnumField<OccurrenceCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OccurrenceCodes>;
    /**
     * All key fields of the OccurrenceCodes entity.
     */
    const _keyFields: Array<Field<OccurrenceCodes>>;
    /**
     * Mapping of all key field names to the respective static field property OccurrenceCodes.
     */
    const _keys: {
        [keys: string]: Field<OccurrenceCodes>;
    };
}
//# sourceMappingURL=OccurrenceCodes.d.ts.map