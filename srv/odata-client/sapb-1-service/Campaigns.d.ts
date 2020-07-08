import { CampaignsRequestBuilder } from './CampaignsRequestBuilder';
import { Moment } from 'moment';
import { CampaignBusinessPartner } from './CampaignBusinessPartner';
import { CampaignItem } from './CampaignItem';
import { CampaignPartner } from './CampaignPartner';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Campaigns" of service "SAPB1".
 */
export declare class Campaigns extends Entity implements CampaignsType {
    /**
     * Technical entity name for Campaigns.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Campaigns.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Campaign Number.
     * @nullable
     */
    campaignNumber?: number;
    /**
     * Campaign Name.
     * @nullable
     */
    campaignName?: string;
    /**
     * Target Group.
     * @nullable
     */
    targetGroup?: string;
    /**
     * Owner.
     * @nullable
     */
    owner?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Finish Date.
     * @nullable
     */
    finishDate?: Moment;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Attachements Entry.
     * @nullable
     */
    attachementsEntry?: number;
    /**
     * Campaign Business Partners.
     * @nullable
     */
    campaignBusinessPartners?: CampaignBusinessPartner[];
    /**
     * Campaign Items.
     * @nullable
     */
    campaignItems?: CampaignItem[];
    /**
     * Campaign Partners.
     * @nullable
     */
    campaignPartners?: CampaignPartner[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-one navigation property to the [[TargetGroups]] entity.
     */
    targetGroup2: TargetGroups;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[Attachments2]] entity.
     */
    attachments2: Attachments2;
    /**
     * Returns an entity builder to construct instances `Campaigns`.
     * @returns A builder that constructs instances of entity type `Campaigns`.
     */
    static builder(): EntityBuilderType<Campaigns, CampaignsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Campaigns` entity type.
     * @returns A `Campaigns` request builder.
     */
    static requestBuilder(): CampaignsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Campaigns`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Campaigns`.
     */
    static customField(fieldName: string): CustomField<Campaigns>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { TargetGroups, TargetGroupsType } from './TargetGroups';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Attachments2, Attachments2Type } from './Attachments2';
export interface CampaignsType {
    campaignNumber?: number;
    campaignName?: string;
    targetGroup?: string;
    owner?: number;
    startDate?: Moment;
    finishDate?: Moment;
    remarks?: string;
    attachementsEntry?: number;
    campaignBusinessPartners?: CampaignBusinessPartner[];
    campaignItems?: CampaignItem[];
    campaignPartners?: CampaignPartner[];
    businessPartners: BusinessPartnersType[];
    targetGroup2: TargetGroupsType;
    employeeInfo: EmployeesInfoType;
    attachments2: Attachments2Type;
}
export interface CampaignsTypeForceMandatory {
    campaignNumber: number;
    campaignName: string;
    targetGroup: string;
    owner: number;
    startDate: Moment;
    finishDate: Moment;
    remarks: string;
    attachementsEntry: number;
    campaignBusinessPartners: CampaignBusinessPartner[];
    campaignItems: CampaignItem[];
    campaignPartners: CampaignPartner[];
    businessPartners: BusinessPartnersType[];
    targetGroup2: TargetGroupsType;
    employeeInfo: EmployeesInfoType;
    attachments2: Attachments2Type;
}
export declare namespace Campaigns {
    /**
     * Static representation of the [[campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGN_NUMBER: NumberField<Campaigns>;
    /**
     * Static representation of the [[campaignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGN_NAME: StringField<Campaigns>;
    /**
     * Static representation of the [[targetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_GROUP: StringField<Campaigns>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: NumberField<Campaigns>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Campaigns>;
    /**
     * Static representation of the [[finishDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINISH_DATE: DateField<Campaigns>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<Campaigns>;
    /**
     * Static representation of the [[attachementsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHEMENTS_ENTRY: NumberField<Campaigns>;
    /**
     * Static representation of the [[campaignBusinessPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGN_BUSINESS_PARTNERS: CollectionField<Campaigns>;
    /**
     * Static representation of the [[campaignItems]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGN_ITEMS: CollectionField<Campaigns>;
    /**
     * Static representation of the [[campaignPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGN_PARTNERS: CollectionField<Campaigns>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<Campaigns, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[targetGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_GROUP_2: OneToOneLink<Campaigns, TargetGroups>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<Campaigns, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENTS_2: OneToOneLink<Campaigns, Attachments2>;
    /**
     * All fields of the Campaigns entity.
     */
    const _allFields: Array<NumberField<Campaigns> | StringField<Campaigns> | DateField<Campaigns> | CollectionField<Campaigns> | OneToManyLink<Campaigns, BusinessPartners> | OneToOneLink<Campaigns, TargetGroups> | OneToOneLink<Campaigns, EmployeesInfo> | OneToOneLink<Campaigns, Attachments2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Campaigns>;
    /**
     * All key fields of the Campaigns entity.
     */
    const _keyFields: Array<Field<Campaigns>>;
    /**
     * Mapping of all key field names to the respective static field property Campaigns.
     */
    const _keys: {
        [keys: string]: Field<Campaigns>;
    };
}
//# sourceMappingURL=Campaigns.d.ts.map