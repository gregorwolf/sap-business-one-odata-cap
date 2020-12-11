import { IntegrationPackagesConfigureRequestBuilder } from './IntegrationPackagesConfigureRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "IntegrationPackagesConfigure" of service "SAPB1".
 */
export declare class IntegrationPackagesConfigure extends EntityV4 implements IntegrationPackagesConfigureType {
    /**
     * Technical entity name for IntegrationPackagesConfigure.
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
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Is Enable.
     * @nullable
     */
    isEnable?: BoYesNoEnum;
    /**
     * Returns an entity builder to construct instances of `IntegrationPackagesConfigure`.
     * @returns A builder that constructs instances of entity type `IntegrationPackagesConfigure`.
     */
    static builder(): EntityBuilderType<IntegrationPackagesConfigure, IntegrationPackagesConfigureType>;
    /**
     * Returns a request builder to construct requests for operations on the `IntegrationPackagesConfigure` entity type.
     * @returns A `IntegrationPackagesConfigure` request builder.
     */
    static requestBuilder(): IntegrationPackagesConfigureRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `IntegrationPackagesConfigure`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `IntegrationPackagesConfigure`.
     */
    static customField(fieldName: string): CustomFieldV4<IntegrationPackagesConfigure>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface IntegrationPackagesConfigureType {
    absEntry?: number | null;
    code?: string | null;
    name?: string | null;
    isEnable?: BoYesNoEnum | null;
}
export declare namespace IntegrationPackagesConfigure {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<IntegrationPackagesConfigure>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<IntegrationPackagesConfigure>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<IntegrationPackagesConfigure>;
    /**
     * Static representation of the [[isEnable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ENABLE: EnumField<IntegrationPackagesConfigure>;
    /**
     * All fields of the IntegrationPackagesConfigure entity.
     */
    const _allFields: Array<NumberField<IntegrationPackagesConfigure> | StringField<IntegrationPackagesConfigure> | EnumField<IntegrationPackagesConfigure>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<IntegrationPackagesConfigure>;
    /**
     * All key fields of the IntegrationPackagesConfigure entity.
     */
    const _keyFields: Array<Field<IntegrationPackagesConfigure>>;
    /**
     * Mapping of all key field names to the respective static field property IntegrationPackagesConfigure.
     */
    const _keys: {
        [keys: string]: Field<IntegrationPackagesConfigure>;
    };
}
//# sourceMappingURL=IntegrationPackagesConfigure.d.ts.map