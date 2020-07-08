/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CampaignsRequestBuilder } from './CampaignsRequestBuilder';
import { Moment } from 'moment';
import { CampaignBusinessPartner, CampaignBusinessPartnerField } from './CampaignBusinessPartner';
import { CampaignItem, CampaignItemField } from './CampaignItem';
import { CampaignPartner, CampaignPartnerField } from './CampaignPartner';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Campaigns" of service "SAPB1".
 */
export class Campaigns extends Entity implements CampaignsType {
  /**
   * Technical entity name for Campaigns.
   */
  static _entityName = 'Campaigns';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Campaigns.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  businessPartners!: BusinessPartners[];
  /**
   * One-to-one navigation property to the [[TargetGroups]] entity.
   */
  targetGroup2!: TargetGroups;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[Attachments2]] entity.
   */
  attachments2!: Attachments2;

  /**
   * Returns an entity builder to construct instances `Campaigns`.
   * @returns A builder that constructs instances of entity type `Campaigns`.
   */
  static builder(): EntityBuilderType<Campaigns, CampaignsTypeForceMandatory> {
    return Entity.entityBuilder(Campaigns);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Campaigns` entity type.
   * @returns A `Campaigns` request builder.
   */
  static requestBuilder(): CampaignsRequestBuilder {
    return new CampaignsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Campaigns`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Campaigns`.
   */
  static customField(fieldName: string): CustomField<Campaigns> {
    return Entity.customFieldSelector(fieldName, Campaigns);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Campaigns {
  /**
   * Static representation of the [[campaignNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGN_NUMBER: NumberField<Campaigns> = new NumberField('CampaignNumber', Campaigns, 'Edm.Int32');
  /**
   * Static representation of the [[campaignName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGN_NAME: StringField<Campaigns> = new StringField('CampaignName', Campaigns, 'Edm.String');
  /**
   * Static representation of the [[targetGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_GROUP: StringField<Campaigns> = new StringField('TargetGroup', Campaigns, 'Edm.String');
  /**
   * Static representation of the [[owner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER: NumberField<Campaigns> = new NumberField('Owner', Campaigns, 'Edm.Int32');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Campaigns> = new DateField('StartDate', Campaigns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[finishDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINISH_DATE: DateField<Campaigns> = new DateField('FinishDate', Campaigns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<Campaigns> = new StringField('Remarks', Campaigns, 'Edm.String');
  /**
   * Static representation of the [[attachementsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHEMENTS_ENTRY: NumberField<Campaigns> = new NumberField('AttachementsEntry', Campaigns, 'Edm.Int32');
  /**
   * Static representation of the [[campaignBusinessPartners]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGN_BUSINESS_PARTNERS: CollectionField<Campaigns> = new CollectionField('CampaignBusinessPartners', Campaigns, new CampaignBusinessPartnerField('', Campaigns));
  /**
   * Static representation of the [[campaignItems]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGN_ITEMS: CollectionField<Campaigns> = new CollectionField('CampaignItems', Campaigns, new CampaignItemField('', Campaigns));
  /**
   * Static representation of the [[campaignPartners]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGN_PARTNERS: CollectionField<Campaigns> = new CollectionField('CampaignPartners', Campaigns, new CampaignPartnerField('', Campaigns));
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<Campaigns, BusinessPartners> = new OneToManyLink('BusinessPartners', Campaigns, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[targetGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_GROUP_2: OneToOneLink<Campaigns, TargetGroups> = new OneToOneLink('TargetGroup2', Campaigns, TargetGroups);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<Campaigns, EmployeesInfo> = new OneToOneLink('EmployeeInfo', Campaigns, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENTS_2: OneToOneLink<Campaigns, Attachments2> = new OneToOneLink('Attachments2', Campaigns, Attachments2);
  /**
   * All fields of the Campaigns entity.
   */
  export const _allFields: Array<NumberField<Campaigns> | StringField<Campaigns> | DateField<Campaigns> | CollectionField<Campaigns> | OneToManyLink<Campaigns, BusinessPartners> | OneToOneLink<Campaigns, TargetGroups> | OneToOneLink<Campaigns, EmployeesInfo> | OneToOneLink<Campaigns, Attachments2>> = [
    Campaigns.CAMPAIGN_NUMBER,
    Campaigns.CAMPAIGN_NAME,
    Campaigns.TARGET_GROUP,
    Campaigns.OWNER,
    Campaigns.START_DATE,
    Campaigns.FINISH_DATE,
    Campaigns.REMARKS,
    Campaigns.ATTACHEMENTS_ENTRY,
    Campaigns.CAMPAIGN_BUSINESS_PARTNERS,
    Campaigns.CAMPAIGN_ITEMS,
    Campaigns.CAMPAIGN_PARTNERS,
    Campaigns.BUSINESS_PARTNERS,
    Campaigns.TARGET_GROUP_2,
    Campaigns.EMPLOYEE_INFO,
    Campaigns.ATTACHMENTS_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Campaigns> = new AllFields('*', Campaigns);
  /**
   * All key fields of the Campaigns entity.
   */
  export const _keyFields: Array<Field<Campaigns>> = [Campaigns.CAMPAIGN_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property Campaigns.
   */
  export const _keys: { [keys: string]: Field<Campaigns> } = Campaigns._keyFields.reduce((acc: { [keys: string]: Field<Campaigns> }, field: Field<Campaigns>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
