import { ValueMappingCommunicationRequestBuilder } from './ValueMappingCommunicationRequestBuilder';
import { Moment } from 'moment';
import { VmCommunicationTypeEnum } from './VmCommunicationTypeEnum';
import { VmCommunicationStatusEnum } from './VmCommunicationStatusEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ValueMappingCommunication" of service "SAPB1".
 */
export declare class ValueMappingCommunication extends EntityV4 implements ValueMappingCommunicationType {
    /**
     * Technical entity name for ValueMappingCommunication.
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
     * Third Party System Id.
     * @nullable
     */
    thirdPartySystemId?: number;
    /**
     * Object Id.
     * @nullable
     */
    objectId?: number;
    /**
     * Communication Type.
     * @nullable
     */
    communicationType?: VmCommunicationTypeEnum;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Start Time.
     * @nullable
     */
    startTime?: number;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * End Time.
     * @nullable
     */
    endTime?: number;
    /**
     * Message.
     * @nullable
     */
    message?: string;
    /**
     * Status.
     * @nullable
     */
    status?: VmCommunicationStatusEnum;
    /**
     * Returns an entity builder to construct instances of `ValueMappingCommunication`.
     * @returns A builder that constructs instances of entity type `ValueMappingCommunication`.
     */
    static builder(): EntityBuilderType<ValueMappingCommunication, ValueMappingCommunicationType>;
    /**
     * Returns a request builder to construct requests for operations on the `ValueMappingCommunication` entity type.
     * @returns A `ValueMappingCommunication` request builder.
     */
    static requestBuilder(): ValueMappingCommunicationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ValueMappingCommunication`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ValueMappingCommunication`.
     */
    static customField(fieldName: string): CustomFieldV4<ValueMappingCommunication>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ValueMappingCommunicationType {
    absEntry?: number | null;
    thirdPartySystemId?: number | null;
    objectId?: number | null;
    communicationType?: VmCommunicationTypeEnum | null;
    startDate?: Moment | null;
    startTime?: number | null;
    endDate?: Moment | null;
    endTime?: number | null;
    message?: string | null;
    status?: VmCommunicationStatusEnum | null;
}
export declare namespace ValueMappingCommunication {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<ValueMappingCommunication>;
    /**
     * Static representation of the [[thirdPartySystemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THIRD_PARTY_SYSTEM_ID: NumberField<ValueMappingCommunication>;
    /**
     * Static representation of the [[objectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_ID: NumberField<ValueMappingCommunication>;
    /**
     * Static representation of the [[communicationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMUNICATION_TYPE: EnumField<ValueMappingCommunication>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<ValueMappingCommunication>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: NumberField<ValueMappingCommunication>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<ValueMappingCommunication>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: NumberField<ValueMappingCommunication>;
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE: StringField<ValueMappingCommunication>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<ValueMappingCommunication>;
    /**
     * All fields of the ValueMappingCommunication entity.
     */
    const _allFields: Array<NumberField<ValueMappingCommunication> | EnumField<ValueMappingCommunication> | DateField<ValueMappingCommunication> | StringField<ValueMappingCommunication>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ValueMappingCommunication>;
    /**
     * All key fields of the ValueMappingCommunication entity.
     */
    const _keyFields: Array<Field<ValueMappingCommunication>>;
    /**
     * Mapping of all key field names to the respective static field property ValueMappingCommunication.
     */
    const _keys: {
        [keys: string]: Field<ValueMappingCommunication>;
    };
}
//# sourceMappingURL=ValueMappingCommunication.d.ts.map