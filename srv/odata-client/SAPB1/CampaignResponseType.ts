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
import type { CampaignResponseTypeApi } from './CampaignResponseTypeApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "CampaignResponseType" of service "SAPB1".
 */
export class CampaignResponseType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CampaignResponseTypeType<T>
{
  /**
   * Technical entity name for CampaignResponseType.
   */
  static _entityName = 'CampaignResponseType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CampaignResponseType entity
   */
  static _keys = ['ResponseType'];
  /**
   * Response Type Description.
   * @nullable
   */
  responseTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Response Type.
   */
  responseType!: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;

  constructor(readonly _entityApi: CampaignResponseTypeApi<T>) {
    super(_entityApi);
  }
}

export interface CampaignResponseTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  responseTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  responseType: DeserializedType<T, 'Edm.String'>;
  isActive?: BoYesNoEnum | null;
}
