import { ReportTypesRequestBuilder } from './ReportTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ReportTypes" of service "SAPB1".
 */
export declare class ReportTypes extends Entity implements ReportTypesType {
    /**
     * Technical entity name for ReportTypes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ReportTypes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Type Code.
     * @nullable
     */
    typeCode?: string;
    /**
     * Type Name.
     * @nullable
     */
    typeName?: string;
    /**
     * Default Report Layout.
     * @nullable
     */
    defaultReportLayout?: string;
    /**
     * Addon Name.
     * @nullable
     */
    addonName?: string;
    /**
     * Addon Form Type.
     * @nullable
     */
    addonFormType?: string;
    /**
     * Menu Id.
     * @nullable
     */
    menuId?: string;
    /**
     * Returns an entity builder to construct instances `ReportTypes`.
     * @returns A builder that constructs instances of entity type `ReportTypes`.
     */
    static builder(): EntityBuilderType<ReportTypes, ReportTypesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ReportTypes` entity type.
     * @returns A `ReportTypes` request builder.
     */
    static requestBuilder(): ReportTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReportTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ReportTypes`.
     */
    static customField(fieldName: string): CustomField<ReportTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ReportTypesType {
    typeCode?: string;
    typeName?: string;
    defaultReportLayout?: string;
    addonName?: string;
    addonFormType?: string;
    menuId?: string;
}
export interface ReportTypesTypeForceMandatory {
    typeCode: string;
    typeName: string;
    defaultReportLayout: string;
    addonName: string;
    addonFormType: string;
    menuId: string;
}
export declare namespace ReportTypes {
    /**
     * Static representation of the [[typeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_CODE: StringField<ReportTypes>;
    /**
     * Static representation of the [[typeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_NAME: StringField<ReportTypes>;
    /**
     * Static representation of the [[defaultReportLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_REPORT_LAYOUT: StringField<ReportTypes>;
    /**
     * Static representation of the [[addonName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDON_NAME: StringField<ReportTypes>;
    /**
     * Static representation of the [[addonFormType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDON_FORM_TYPE: StringField<ReportTypes>;
    /**
     * Static representation of the [[menuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MENU_ID: StringField<ReportTypes>;
    /**
     * All fields of the ReportTypes entity.
     */
    const _allFields: Array<StringField<ReportTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ReportTypes>;
    /**
     * All key fields of the ReportTypes entity.
     */
    const _keyFields: Array<Field<ReportTypes>>;
    /**
     * Mapping of all key field names to the respective static field property ReportTypes.
     */
    const _keys: {
        [keys: string]: Field<ReportTypes>;
    };
}
//# sourceMappingURL=ReportTypes.d.ts.map