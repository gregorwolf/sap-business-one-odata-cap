import { TargetGroupsRequestBuilder } from './TargetGroupsRequestBuilder';
import { TargetGroupsDetail } from './TargetGroupsDetail';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "TargetGroups" of service "SAPB1".
 */
export declare class TargetGroups extends Entity implements TargetGroupsType {
    /**
     * Technical entity name for TargetGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TargetGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Target Group Code.
     * @nullable
     */
    targetGroupCode?: string;
    /**
     * Target Group Name.
     * @nullable
     */
    targetGroupName?: string;
    /**
     * Target Groups Details.
     * @nullable
     */
    targetGroupsDetails?: TargetGroupsDetail[];
    /**
     * One-to-many navigation property to the [[Campaigns]] entity.
     */
    campaigns: Campaigns[];
    /**
     * Returns an entity builder to construct instances `TargetGroups`.
     * @returns A builder that constructs instances of entity type `TargetGroups`.
     */
    static builder(): EntityBuilderType<TargetGroups, TargetGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TargetGroups` entity type.
     * @returns A `TargetGroups` request builder.
     */
    static requestBuilder(): TargetGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TargetGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TargetGroups`.
     */
    static customField(fieldName: string): CustomField<TargetGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Campaigns, CampaignsType } from './Campaigns';
export interface TargetGroupsType {
    targetGroupCode?: string;
    targetGroupName?: string;
    targetGroupsDetails?: TargetGroupsDetail[];
    campaigns: CampaignsType[];
}
export interface TargetGroupsTypeForceMandatory {
    targetGroupCode: string;
    targetGroupName: string;
    targetGroupsDetails: TargetGroupsDetail[];
    campaigns: CampaignsType[];
}
export declare namespace TargetGroups {
    /**
     * Static representation of the [[targetGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_GROUP_CODE: StringField<TargetGroups>;
    /**
     * Static representation of the [[targetGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_GROUP_NAME: StringField<TargetGroups>;
    /**
     * Static representation of the [[targetGroupsDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_GROUPS_DETAILS: CollectionField<TargetGroups>;
    /**
     * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGNS: OneToManyLink<TargetGroups, Campaigns>;
    /**
     * All fields of the TargetGroups entity.
     */
    const _allFields: Array<StringField<TargetGroups> | CollectionField<TargetGroups> | OneToManyLink<TargetGroups, Campaigns>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TargetGroups>;
    /**
     * All key fields of the TargetGroups entity.
     */
    const _keyFields: Array<Field<TargetGroups>>;
    /**
     * Mapping of all key field names to the respective static field property TargetGroups.
     */
    const _keys: {
        [keys: string]: Field<TargetGroups>;
    };
}
//# sourceMappingURL=TargetGroups.d.ts.map