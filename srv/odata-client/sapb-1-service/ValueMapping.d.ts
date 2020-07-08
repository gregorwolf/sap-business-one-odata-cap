import { ValueMappingRequestBuilder } from './ValueMappingRequestBuilder';
import { VmThirdPartyValuesData } from './VmThirdPartyValuesData';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ValueMapping" of service "SAPB1".
 */
export declare class ValueMapping extends Entity implements ValueMappingType {
    /**
     * Technical entity name for ValueMapping.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ValueMapping.
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
     * Object Id.
     * @nullable
     */
    objectId?: number;
    /**
     * Object Abs Entry.
     * @nullable
     */
    objectAbsEntry?: string;
    /**
     * Vm Third Party Values Collection.
     * @nullable
     */
    vmThirdPartyValuesCollection?: VmThirdPartyValuesData[];
    /**
     * Returns an entity builder to construct instances `ValueMapping`.
     * @returns A builder that constructs instances of entity type `ValueMapping`.
     */
    static builder(): EntityBuilderType<ValueMapping, ValueMappingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ValueMapping` entity type.
     * @returns A `ValueMapping` request builder.
     */
    static requestBuilder(): ValueMappingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ValueMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ValueMapping`.
     */
    static customField(fieldName: string): CustomField<ValueMapping>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ValueMappingType {
    absEntry?: number;
    objectId?: number;
    objectAbsEntry?: string;
    vmThirdPartyValuesCollection?: VmThirdPartyValuesData[];
}
export interface ValueMappingTypeForceMandatory {
    absEntry: number;
    objectId: number;
    objectAbsEntry: string;
    vmThirdPartyValuesCollection: VmThirdPartyValuesData[];
}
export declare namespace ValueMapping {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<ValueMapping>;
    /**
     * Static representation of the [[objectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_ID: NumberField<ValueMapping>;
    /**
     * Static representation of the [[objectAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_ABS_ENTRY: StringField<ValueMapping>;
    /**
     * Static representation of the [[vmThirdPartyValuesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VM_THIRD_PARTY_VALUES_COLLECTION: CollectionField<ValueMapping>;
    /**
     * All fields of the ValueMapping entity.
     */
    const _allFields: Array<NumberField<ValueMapping> | StringField<ValueMapping> | CollectionField<ValueMapping>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ValueMapping>;
    /**
     * All key fields of the ValueMapping entity.
     */
    const _keyFields: Array<Field<ValueMapping>>;
    /**
     * Mapping of all key field names to the respective static field property ValueMapping.
     */
    const _keys: {
        [keys: string]: Field<ValueMapping>;
    };
}
//# sourceMappingURL=ValueMapping.d.ts.map