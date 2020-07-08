/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TargetGroupsRequestBuilder } from './TargetGroupsRequestBuilder';
import { TargetGroupsDetail, TargetGroupsDetailField } from './TargetGroupsDetail';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "TargetGroups" of service "SAPB1".
 */
export class TargetGroups extends Entity implements TargetGroupsType {
  /**
   * Technical entity name for TargetGroups.
   */
  static _entityName = 'TargetGroups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TargetGroups.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  campaigns!: Campaigns[];

  /**
   * Returns an entity builder to construct instances `TargetGroups`.
   * @returns A builder that constructs instances of entity type `TargetGroups`.
   */
  static builder(): EntityBuilderType<TargetGroups, TargetGroupsTypeForceMandatory> {
    return Entity.entityBuilder(TargetGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TargetGroups` entity type.
   * @returns A `TargetGroups` request builder.
   */
  static requestBuilder(): TargetGroupsRequestBuilder {
    return new TargetGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TargetGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TargetGroups`.
   */
  static customField(fieldName: string): CustomField<TargetGroups> {
    return Entity.customFieldSelector(fieldName, TargetGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace TargetGroups {
  /**
   * Static representation of the [[targetGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_GROUP_CODE: StringField<TargetGroups> = new StringField('TargetGroupCode', TargetGroups, 'Edm.String');
  /**
   * Static representation of the [[targetGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_GROUP_NAME: StringField<TargetGroups> = new StringField('TargetGroupName', TargetGroups, 'Edm.String');
  /**
   * Static representation of the [[targetGroupsDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_GROUPS_DETAILS: CollectionField<TargetGroups> = new CollectionField('TargetGroupsDetails', TargetGroups, new TargetGroupsDetailField('', TargetGroups));
  /**
   * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGNS: OneToManyLink<TargetGroups, Campaigns> = new OneToManyLink('Campaigns', TargetGroups, Campaigns);
  /**
   * All fields of the TargetGroups entity.
   */
  export const _allFields: Array<StringField<TargetGroups> | CollectionField<TargetGroups> | OneToManyLink<TargetGroups, Campaigns>> = [
    TargetGroups.TARGET_GROUP_CODE,
    TargetGroups.TARGET_GROUP_NAME,
    TargetGroups.TARGET_GROUPS_DETAILS,
    TargetGroups.CAMPAIGNS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TargetGroups> = new AllFields('*', TargetGroups);
  /**
   * All key fields of the TargetGroups entity.
   */
  export const _keyFields: Array<Field<TargetGroups>> = [TargetGroups.TARGET_GROUP_CODE];
  /**
   * Mapping of all key field names to the respective static field property TargetGroups.
   */
  export const _keys: { [keys: string]: Field<TargetGroups> } = TargetGroups._keyFields.reduce((acc: { [keys: string]: Field<TargetGroups> }, field: Field<TargetGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
