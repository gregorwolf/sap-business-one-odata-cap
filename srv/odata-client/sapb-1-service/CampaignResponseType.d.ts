import { CampaignResponseTypeRequestBuilder } from './CampaignResponseTypeRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CampaignResponseType" of service "SAPB1".
 */
export declare class CampaignResponseType extends EntityV4 implements CampaignResponseTypeType {
    /**
     * Technical entity name for CampaignResponseType.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Response Type Description.
     * @nullable
     */
    responseTypeDescription?: string;
    /**
     * Response Type.
     * @nullable
     */
    responseType?: string;
    /**
     * Is Active.
     * @nullable
     */
    isActive?: BoYesNoEnum;
    /**
     * Returns an entity builder to construct instances of `CampaignResponseType`.
     * @returns A builder that constructs instances of entity type `CampaignResponseType`.
     */
    static builder(): EntityBuilderType<CampaignResponseType, CampaignResponseTypeType>;
    /**
     * Returns a request builder to construct requests for operations on the `CampaignResponseType` entity type.
     * @returns A `CampaignResponseType` request builder.
     */
    static requestBuilder(): CampaignResponseTypeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CampaignResponseType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CampaignResponseType`.
     */
    static customField(fieldName: string): CustomFieldV4<CampaignResponseType>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CampaignResponseTypeType {
    responseTypeDescription?: string | null;
    responseType?: string | null;
    isActive?: BoYesNoEnum | null;
}
export declare namespace CampaignResponseType {
    /**
     * Static representation of the [[responseTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_TYPE_DESCRIPTION: StringField<CampaignResponseType>;
    /**
     * Static representation of the [[responseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_TYPE: StringField<CampaignResponseType>;
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE: EnumField<CampaignResponseType>;
    /**
     * All fields of the CampaignResponseType entity.
     */
    const _allFields: Array<StringField<CampaignResponseType> | EnumField<CampaignResponseType>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CampaignResponseType>;
    /**
     * All key fields of the CampaignResponseType entity.
     */
    const _keyFields: Array<Field<CampaignResponseType>>;
    /**
     * Mapping of all key field names to the respective static field property CampaignResponseType.
     */
    const _keys: {
        [keys: string]: Field<CampaignResponseType>;
    };
}
//# sourceMappingURL=CampaignResponseType.d.ts.map