import { IndiaSacCodeRequestBuilder } from './IndiaSacCodeRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "IndiaSacCode" of service "SAPB1".
 */
export declare class IndiaSacCode extends Entity implements IndiaSacCodeType {
    /**
     * Technical entity name for IndiaSacCode.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for IndiaSacCode.
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
     * Service Code.
     * @nullable
     */
    serviceCode?: string;
    /**
     * Service Name.
     * @nullable
     */
    serviceName?: string;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances `IndiaSacCode`.
     * @returns A builder that constructs instances of entity type `IndiaSacCode`.
     */
    static builder(): EntityBuilderType<IndiaSacCode, IndiaSacCodeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `IndiaSacCode` entity type.
     * @returns A `IndiaSacCode` request builder.
     */
    static requestBuilder(): IndiaSacCodeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `IndiaSacCode`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `IndiaSacCode`.
     */
    static customField(fieldName: string): CustomField<IndiaSacCode>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface IndiaSacCodeType {
    absEntry?: number;
    serviceCode?: string;
    serviceName?: string;
    items: ItemsType[];
}
export interface IndiaSacCodeTypeForceMandatory {
    absEntry: number;
    serviceCode: string;
    serviceName: string;
    items: ItemsType[];
}
export declare namespace IndiaSacCode {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<IndiaSacCode>;
    /**
     * Static representation of the [[serviceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CODE: StringField<IndiaSacCode>;
    /**
     * Static representation of the [[serviceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_NAME: StringField<IndiaSacCode>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<IndiaSacCode, Items>;
    /**
     * All fields of the IndiaSacCode entity.
     */
    const _allFields: Array<NumberField<IndiaSacCode> | StringField<IndiaSacCode> | OneToManyLink<IndiaSacCode, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<IndiaSacCode>;
    /**
     * All key fields of the IndiaSacCode entity.
     */
    const _keyFields: Array<Field<IndiaSacCode>>;
    /**
     * Mapping of all key field names to the respective static field property IndiaSacCode.
     */
    const _keys: {
        [keys: string]: Field<IndiaSacCode>;
    };
}
//# sourceMappingURL=IndiaSacCode.d.ts.map