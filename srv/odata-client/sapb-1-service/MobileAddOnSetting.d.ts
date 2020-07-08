import { MobileAddOnSettingRequestBuilder } from './MobileAddOnSettingRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "MobileAddOnSetting" of service "SAPB1".
 */
export declare class MobileAddOnSetting extends Entity implements MobileAddOnSettingType {
    /**
     * Technical entity name for MobileAddOnSetting.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MobileAddOnSetting.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Url.
     * @nullable
     */
    url?: string;
    /**
     * Provider.
     * @nullable
     */
    provider?: string;
    /**
     * Returns an entity builder to construct instances `MobileAddOnSetting`.
     * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
     */
    static builder(): EntityBuilderType<MobileAddOnSetting, MobileAddOnSettingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `MobileAddOnSetting` entity type.
     * @returns A `MobileAddOnSetting` request builder.
     */
    static requestBuilder(): MobileAddOnSettingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MobileAddOnSetting`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
     */
    static customField(fieldName: string): CustomField<MobileAddOnSetting>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MobileAddOnSettingType {
    code?: string;
    description?: string;
    url?: string;
    provider?: string;
}
export interface MobileAddOnSettingTypeForceMandatory {
    code: string;
    description: string;
    url: string;
    provider: string;
}
export declare namespace MobileAddOnSetting {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<MobileAddOnSetting>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<MobileAddOnSetting>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<MobileAddOnSetting>;
    /**
     * Static representation of the [[provider]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROVIDER: StringField<MobileAddOnSetting>;
    /**
     * All fields of the MobileAddOnSetting entity.
     */
    const _allFields: Array<StringField<MobileAddOnSetting>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MobileAddOnSetting>;
    /**
     * All key fields of the MobileAddOnSetting entity.
     */
    const _keyFields: Array<Field<MobileAddOnSetting>>;
    /**
     * Mapping of all key field names to the respective static field property MobileAddOnSetting.
     */
    const _keys: {
        [keys: string]: Field<MobileAddOnSetting>;
    };
}
//# sourceMappingURL=MobileAddOnSetting.d.ts.map