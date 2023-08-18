/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { TargetGroupsDetail } from './TargetGroupsDetail';
import type { TargetGroupsApi } from './TargetGroupsApi';
import { TargetGroupTypeEnum } from './TargetGroupTypeEnum';
import { Campaigns, CampaignsType } from './Campaigns';

/**
 * This class represents the entity "TargetGroups" of service "SAPB1".
 */
export class TargetGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TargetGroupsType<T>
{
  /**
   * Technical entity name for TargetGroups.
   */
  static _entityName = 'TargetGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TargetGroups entity
   */
  static _keys = ['TargetGroupCode'];
  /**
   * Target Group Code.
   */
  targetGroupCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Target Group Name.
   * @nullable
   */
  targetGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Target Group Type.
   * @nullable
   */
  targetGroupType?: TargetGroupTypeEnum | null;
  /**
   * Target Groups Details.
   * @nullable
   */
  targetGroupsDetails?: TargetGroupsDetail<T>[] | null;
  /**
   * One-to-many navigation property to the {@link Campaigns} entity.
   */
  campaigns!: Campaigns<T>[];

  constructor(readonly _entityApi: TargetGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TargetGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  targetGroupCode: DeserializedType<T, 'Edm.String'>;
  targetGroupName?: DeserializedType<T, 'Edm.String'> | null;
  targetGroupType?: TargetGroupTypeEnum | null;
  targetGroupsDetails?: TargetGroupsDetail<T>[] | null;
  campaigns: CampaignsType<T>[];
}
