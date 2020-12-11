import { MobileAddOnSettingRequestBuilder } from './MobileAddOnSettingRequestBuilder';
import { MobileAddonSettingTypeEnum } from './MobileAddonSettingTypeEnum';
import { ViewStyleTypeEnum } from './ViewStyleTypeEnum';
import { LogonMethodEnum } from './LogonMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MobileAddOnSetting" of service "SAPB1".
 */
export declare class MobileAddOnSetting extends EntityV4 implements MobileAddOnSettingType {
    /**
     * Technical entity name for MobileAddOnSetting.
     */
    static _entityName: string;
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
     * Type.
     * @nullable
     */
    type?: MobileAddonSettingTypeEnum;
    /**
     * Provider.
     * @nullable
     */
    provider?: string;
    /**
     * View Style.
     * @nullable
     */
    viewStyle?: ViewStyleTypeEnum;
    /**
     * Logon Method.
     * @nullable
     */
    logonMethod?: LogonMethodEnum;
    /**
     * Enable.
     * @nullable
     */
    enable?: BoYesNoEnum;
    /**
     * B 1 Mobile App.
     * @nullable
     */
    b1MobileApp?: BoYesNoEnum;
    /**
     * B 1 Sales App.
     * @nullable
     */
    b1SalesApp?: BoYesNoEnum;
    /**
     * Returns an entity builder to construct instances of `MobileAddOnSetting`.
     * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
     */
    static builder(): EntityBuilderType<MobileAddOnSetting, MobileAddOnSettingType>;
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
    static customField(fieldName: string): CustomFieldV4<MobileAddOnSetting>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MobileAddOnSettingType {
    code?: string | null;
    description?: string | null;
    url?: string | null;
    type?: MobileAddonSettingTypeEnum | null;
    provider?: string | null;
    viewStyle?: ViewStyleTypeEnum | null;
    logonMethod?: LogonMethodEnum | null;
    enable?: BoYesNoEnum | null;
    b1MobileApp?: BoYesNoEnum | null;
    b1SalesApp?: BoYesNoEnum | null;
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
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: EnumField<MobileAddOnSetting>;
    /**
     * Static representation of the [[provider]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROVIDER: StringField<MobileAddOnSetting>;
    /**
     * Static representation of the [[viewStyle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIEW_STYLE: EnumField<MobileAddOnSetting>;
    /**
     * Static representation of the [[logonMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOGON_METHOD: EnumField<MobileAddOnSetting>;
    /**
     * Static representation of the [[enable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENABLE: EnumField<MobileAddOnSetting>;
    /**
     * Static representation of the [[b1MobileApp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const B_1_MOBILE_APP: EnumField<MobileAddOnSetting>;
    /**
     * Static representation of the [[b1SalesApp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const B_1_SALES_APP: EnumField<MobileAddOnSetting>;
    /**
     * All fields of the MobileAddOnSetting entity.
     */
    const _allFields: Array<StringField<MobileAddOnSetting> | EnumField<MobileAddOnSetting>>;
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